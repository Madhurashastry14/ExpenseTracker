import Navbar from "./components/navbar";
import ExpenseForm from "./components/expenseform";
import ExpenseList from "./components/expenselist";
import "./App.css";
function App() {
  return (
    <div>
      <Navbar />
      <ExpenseForm />
      <ExpenseList />
    </div>
  );
}
export default App;
