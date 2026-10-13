import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import AddExpense from "./pages/addexpense";
import Login from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";
import Expenses from "./pages/expenses";
import Landing from "./pages/landing";

import { apiFetch } from "./api";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(() =>
    Boolean(sessionStorage.getItem("accessToken")),
  );

  useEffect(() => {
    if (!isLoggedIn) {
      setExpenses([]);
      return;
    }

    async function fetchExpenses() {
      try {
        const response = await apiFetch("/api/expenses");

        if (!response.ok) {
          throw new Error("Failed to fetch expenses");
        }

        const data = await response.json();
        setExpenses(data);
      } catch (error) {
        console.error("Error fetching expenses:", error);
      }
    }

    fetchExpenses();
  }, [isLoggedIn]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={<Login onLogin={() => setIsLoggedIn(true)} />}
        />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard expenses={expenses} />} />
        <Route
          path="/add-expense"
          element={<AddExpense expenses={expenses} setExpenses={setExpenses} />}
        />
        <Route path="/expenses" element={<Expenses expenses={expenses} />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
