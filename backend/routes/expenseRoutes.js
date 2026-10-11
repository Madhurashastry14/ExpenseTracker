const express = require("express");
const router = express.Router();
const expenseController = require("../controller/expenseController");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/", authMiddleware, expenseController.getExpenses);
router.post("/", authMiddleware, expenseController.createExpense);
module.exports = router;
