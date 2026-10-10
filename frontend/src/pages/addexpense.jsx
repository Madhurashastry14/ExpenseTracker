import ExpenseForm from "../components/expenseform";
import Navbar from "../components/navbar";
function AddExpense({ setExpenses }) {
  return (
    <div>
      <Navbar />
      <ExpenseForm setExpenses={setExpenses} />
    </div>
  );
}

export default AddExpense;
