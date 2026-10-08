import { useState } from "react";
function ExpenseForm() {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const expense = { amount, category, description, date };
  }
  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <h2>Add Expense</h2>
      <div className="section">
        <label>Amount:</label>
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(event) => {
            setAmount(event.target.value);
          }}
        />
      </div>
      <div className="section">
        <label>Category:</label>
        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="">Select a category</option>
          <option value="food">Food</option>
          <option value="transport">Transport</option>
          <option value="shopping">Shopping</option>
          <option value="entertainment">Entertainment</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="section">
        <label>Description:</label>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        />
      </div>
      <div className="section">
        <label>Date:</label>
        <input
          type="date"
          value={date}
          onChange={(event) => {
            setDate(event.target.value);
          }}
        />
      </div>

      <button className="add-expense"> Add expense</button>
    </form>
  );
}

export default ExpenseForm;
