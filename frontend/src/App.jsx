import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import ExpenseForm from "./components/expenseform";
import ExpenseList from "./components/expenselist";
import Login from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
