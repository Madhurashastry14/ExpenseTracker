import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Expense Tracker</h2>

      <div className="navbar-links">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/expenses">Expenses</Link>
        <Link to="/add-expense">Add Expense</Link>
      </div>
    </nav>
  );
}

export default Navbar;
