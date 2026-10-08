import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
function Dashboard() {
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
        </div>

        <div className="summary-cards">
          <div className="summary-card">
            <p>Total Spent</p>
            <h2>₹12,450</h2>
          </div>

          <div className="summary-card">
            <p>This Month</p>
            <h2>₹4,280</h2>
          </div>

          <div className="summary-card">
            <p>No. of Expenses</p>
            <h2>24</h2>
          </div>
        </div>

        <div className="dashboard-content">
          <div className="category-card">
            <h2>Spending by Category</h2>

            <div className="category-row">
              <span>Food</span>
              <strong>₹2,000</strong>
            </div>

            <div className="category-row">
              <span>Transport</span>
              <strong>₹1,200</strong>
            </div>

            <div className="category-row">
              <span>Shopping</span>
              <strong>₹800</strong>
            </div>

            <div className="category-row">
              <span>Entertainment</span>
              <strong>₹280</strong>
            </div>
          </div>

          <div className="recent-card">
            <h2>Recent Expenses</h2>

            <div className="expense-row">
              <div>
                <strong>Lunch</strong>
                <p>Food</p>
              </div>
              <span>₹250</span>
            </div>

            <div className="expense-row">
              <div>
                <strong>Bus</strong>
                <p>Transport</p>
              </div>
              <span>₹40</span>
            </div>

            <div className="expense-row">
              <div>
                <strong>Shopping</strong>
                <p>Shopping</p>
              </div>
              <span>₹900</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
