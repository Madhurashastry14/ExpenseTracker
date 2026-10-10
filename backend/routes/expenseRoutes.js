const express = require("express");
const router = express.Router();
const expenseController = require("../controller/expenseController");
router.get("/", expenseController.getExpenses);
router.post("/", expenseController.createExpense);
module.exports = router;
