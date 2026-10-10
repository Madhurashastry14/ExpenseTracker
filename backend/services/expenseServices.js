const pool = require("../config/db");

async function getAllExpenses() {
  const result = await pool.query(
    "SELECT *FROM expenses ORDER BY date DESC , id DESC",
  );
  return result.rows;
}

async function createExpenses(expense) {
  const { amount, description, category, date } = expense;
  const result = await pool.query(
    "INSERT INTO expenses (amount,description,category,date) VALUES ($1,$2,$3,$4) RETURNING *",
    [amount, description, category, date],
  );
  return result.rows[0];
}

module.exports = {
  getAllExpenses,
  createExpenses,
};
