import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import AddExpense from "./pages/addexpense";
import Login from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";
import Expenses from "./pages/expenses";
import "./App.css";
function App() {
  const [expenses, setExpenses] = useState([]);
  useEffect(() => {
    async function fetchExpenses() {
      try {
        const response = await fetch("http://localhost:5000/api/expenses");
        if (!response.ok) {
          throw new Error("failed to fetch expenses");
        }
        const data = await response.json();
        setExpenses(data);
      } catch (error) {
        console.error("Error fetching expenses:", error);
      }
    }
    fetchExpenses();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard expenses={expenses} />} />
        <Route
          path="/add-expense"
          element={<AddExpense expenses={expenses} setExpenses={setExpenses} />}
        />
        <Route
          path="/expenses"
          element={<Expenses expenses={expenses} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
