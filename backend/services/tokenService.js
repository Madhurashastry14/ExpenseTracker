const crypto = require("crypto");
const pool = require("../config/db");

function generateRefreshToken() {
  return crypto.randomBytes(32).toString("hex");
}

function hashRefreshToken(token) {
  return crypto.createHash("sha256").update(token).digest("hex");
}

async function saveRefreshToken(userId, token) {
  const tokenHash = hashRefreshToken(token);

  const result = await pool.query(
    `INSERT INTO refresh_tokens (user_id, token_hash, expires_at)
     VALUES (
       $1,
       $2,
       NOW() + INTERVAL '7 days'
     )
     RETURNING id, expires_at`,
    [userId, tokenHash],
  );

  return result.rows[0];
}

async function findValidRefreshToken(token) {
  const tokenHash = hashRefreshToken(token);

  const result = await pool.query(
    `SELECT id, user_id
     FROM refresh_tokens
     WHERE token_hash = $1
       AND expires_at > NOW()`,
    [tokenHash],
  );

  return result.rows[0] || null;
}

async function revokeRefreshToken(token) {
  const tokenHash = hashRefreshToken(token);

  await pool.query(
    `DELETE FROM refresh_tokens
     WHERE token_hash = $1`,
    [tokenHash],
  );
}

async function rotateRefreshToken(oldToken, userId, newToken) {
  const client = await pool.connect();
  try {
    await client.query("BEGIN");
    const oldHash = hashRefreshToken(oldToken);
    const newHash = hashRefreshToken(newToken);
    const result = client.query(
      `DELETE FROM refresh_tokens WHERE token_hash=$1 AND user_id=$2 AND expires_at>NOW() RETURNING is`[
        (oldHash, userId)
      ],
    );

    if (result.rows[0] === 0) {
      await client.query("ROLLBACK");
      return false;
    }
    await client.query(
      `INSERT INTO refresh_tokens(user_id,token_hash,expires_at) VALUES ($1,$2, NOW() + INTERVAL '7 days')`,
      [userId, newHash],
    );
    await client.query("COMMIT");
    return true;
  } catch (error) {
    await client.query("ROLLBACK");
  } finally {
    client.release();
  }
}

module.exports = {
  generateRefreshToken,
  hashRefreshToken,
  saveRefreshToken,
  findValidRefreshToken,
  revokeRefreshToken,
  rotateRefreshToken,
};
