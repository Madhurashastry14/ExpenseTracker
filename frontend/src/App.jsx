import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import AddExpense from "./pages/addexpense";
import Login from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";
import Expenses from "./pages/expenses";
import "./App.css";
function App() {
  const [expenses, setExpenses] = useState([]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
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
