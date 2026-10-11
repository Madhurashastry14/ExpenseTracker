import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import { logoutUser } from "../api";

function Dashboard({ expenses }) {
  const totalSpent = expenses.reduce((total, expense) => {
    return total + Number(expense.amount);
  }, 0);

  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();

  const monthlyExpenses = expenses.filter((expense) => {
    const expenseDate = new Date(expense.date);
    return (
      expenseDate.getMonth() === currentMonth &&
      expenseDate.getFullYear() === currentYear
    );
  });

  const monthlyTotal = monthlyExpenses.reduce((total, expense) => {
    return total + Number(expense.amount);
  }, 0);

  const categoryTotal = expenses.reduce((total, expense) => {
    const category = expense.category.trim().toLowerCase();
    const amount = Number(expense.amount);
    total[category] = (total[category] || 0) + amount;
    return total;
  }, {});

  const recentExpenses = [...expenses]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);
  return (
    <>
      <Navbar />
      <div className="dashboard-container">
        <div className="dashboard-header">
          <div>
            <h1>Welcome 👋</h1>
            <p>Here's your spending overview.</p>
          </div>
          <Link to="/add-expense" className="add-expense-btn">
            + Add Expense
          </Link>

          <button className="logout-btn" onClick={logoutUser}>
            <span>↪</span> Logout
          </button>
        </div>

        <div className="summary-cards">
          <div className="summary-card">
            <p>Total Spent</p>
            <h2>₹{totalSpent.toLocaleString("en-IN")}</h2>
          </div>

          <div className="summary-card">
            <p>This Month</p>
            <h2>₹{monthlyTotal.toLocaleString("en-IN")}</h2>
          </div>

          <div className="summary-card">
            <p>No. of Expenses</p>
            <h2>{expenses.length}</h2>
          </div>
        </div>

        <div className="dashboard-content">
          <div className="category-card">
            <h2>Spending by Category</h2>

            {Object.entries(categoryTotal).map(([category, amount]) => (
              <div className="category-row" key={category}>
                <span>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </span>
                <strong>₹{amount.toLocaleString("en-IN")}</strong>
              </div>
            ))}
          </div>

          <div className="recent-card">
            <h2>Recent Expenses</h2>
            {recentExpenses.map((expense) => (
              <div className="expense-row" key={expense.id}>
                <div>
                  <strong>{expense.description}</strong>
                  <p>{expense.category}</p>
                </div>
                <span>₹{Number(expense.amount).toLocaleString("en-IN")}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
