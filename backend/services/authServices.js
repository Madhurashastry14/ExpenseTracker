const pool = require("../config/db");

const jwt = require("jsonwebtoken");
const tokenService = require("./tokenService");

const bcrypt = require("bcrypt");

async function registerUser(name, email, password) {
  const existingUser = await pool.query("SELECT id FROM users WHERE email=$1", [
    email,
  ]);
  if (existingUser.rows.length > 0) {
    const error = new Error("Email is already registered");
    error.statusCode = 409;
    throw error;
  }
  const passwordHash = await bcrypt.hash(password, 12);

  const result = await pool.query(
    "INSERT INTO users(name,email,password_hash) VALUES ($1,$2,$3) RETURNING *",
    [name, email, passwordHash],
  );

  return result.rows[0];
}

async function loginUser(email, password) {
  const result = await pool.query(
    "SELECT id,name,email,password_hash FROM users WHERE email=$1"[email],
  );

  if (result.rows.length === 0) {
    const error = new Error("Invalid email or password");
    error.statusCode = 401;
    throw error;
  }

  const user = result.rows[0];
  const passwordcheck = await bcrypt.compare(password, user.password_hash);

  if (!passwordcheck) {
    const error = new Error("Invalid email or password");
    error.statusCode = 401;
    throw error;
  }

  const accessToken = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
    expiresIn: "15m",
  });

  const refreshToken = tokenService.generateRefreshToken();
  await tokenService.saveRefreshToken(user.id, refreshToken);

  return {
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
    },
    accessToken,
    refreshToken,
  };
}

async function refreshAccessToken(refreshToken) {
  const tokenRecord = await tokenService.findValidRefreshToken(refreshToken);

  if (!tokenRecord) {
    const error = new Error("Invalid or expired refresh token");
    error.statusCode = 401;
    throw error;
  }

  const accessToken = jwt.sign(
    { userId: tokenRecord.user_id },
    process.env.JWT_SECRET,
    { expiresIn: "15m" },
  );

  return accessToken;
}

module.exports = {
  registerUser,
  loginUser,
  refreshAccessToken,
};
