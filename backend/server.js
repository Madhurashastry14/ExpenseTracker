require("dotenv").config();
const express = require("express");
const cors = require("cors");
const pool = require("./config/db");
const expenseRoutes = require("./routes/expenseRoutes");
const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/health", async (req, res) => {
  try {
    await pool.query("SELECT 1");
    res.status(200).json({
      server: "running",
      database: "connected",
    });
  } catch (error) {
    console.error("Database connection failed:", error.message);
    res.status(503).json({
      server: "running",
      database: "disconnected",
    });
  }
});

app.use("/api/expenses", expenseRoutes);
app.use((req, res) => {
  res.status(404).json({
    error: "Route not found",
  });
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
