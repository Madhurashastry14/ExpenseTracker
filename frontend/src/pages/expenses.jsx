import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import ExpenseList from "../components/expenselist";
function Expenses() {
  return (
    <>
      <Navbar />
      <div className="expenses-page">
        <div className="expenses-header">
          <div>
            <h1>My Expenses</h1>
            <p>View and Manage Your Expenses</p>
          </div>
          <Link to="/add-expense" className="add-expense-btn">
            + Add Expense
          </Link>
        </div>
        <ExpenseList />
      </div>
    </>
  );
}
export default Expenses;
