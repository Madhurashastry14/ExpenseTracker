import { BrowserRouter, Routes, Route } from "react-router-dom";

import AddExpense from "./pages/addexpense";
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
        <Route path="/add-expense" element={<AddExpense />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
