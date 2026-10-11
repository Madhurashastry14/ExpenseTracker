const pool = require("../config/db");

async function getAllExpenses(userId) {
  const result = await pool.query(
    `SELECT *
     FROM expenses
     WHERE user_id = $1
     ORDER BY date DESC, id DESC`,
    [userId],
  );

  return result.rows;
}

async function createExpense(expenseData, userId) {
  const { amount, category, description, date } = expenseData;

  const result = await pool.query(
    `INSERT INTO expenses
       (amount, category, description, date, user_id)
     VALUES ($1, $2, $3, $4, $5)
     RETURNING *`,
    [amount, category, description, date, userId],
  );

  return result.rows[0];
}

module.exports = {
  getAllExpenses,
  createExpense,
};
