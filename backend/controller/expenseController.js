const expenseService = require("../services/expenseServices");
async function getExpenses(req, res) {
  try {
    const expenses = await expenseService.getAllExpenses();
    res.status(200).json(expenses);
  } catch (error) {
    console.log("Failed to fetch expenses", error.message);
    res.status(500).json({
      error: "Failed to fetch expenses",
    });
  }
}

async function createExpense(req, res) {
  try {
    const { amount, description, category, date } = req.body;
    if (
      amount === undefined ||
      amount === null ||
      amount === "" ||
      !Number.isFinite(Number(amount)) ||
      Number(amount) <= 0 ||
      typeof description !== "string" ||
      !description.trim() ||
      typeof category !== "string" ||
      !category.trim() ||
      !date
    ) {
      return res.status(400).json({
        error: "Valid amount, category, description, and date are required ",
      });
    }
    const expenses = await expenseService.createExpenses({
      amount: Number(amount),
      category: category.trim(),
      description: description.trim(),
      date,
    });
    return res.status(201).json(expenses);
  } catch (error) {
    console.log("Failed to create expense:", error.message);
    return res.status(500).json({
      error: "Failed to create expense",
    });
  }
}

module.exports = {
  getExpenses,
  createExpense,
};
