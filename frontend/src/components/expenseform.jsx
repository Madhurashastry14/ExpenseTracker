import { useState } from "react";
function ExpenseForm() {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const expense = { amount, category, description, date };
    console.log(expense);
  }
  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <h2> Add Expense</h2>

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(event) => {
          setAmount(event.target.value);
        }}
      />
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

      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(event) => {
          setDescription(event.target.value);
        }}
      />

      <input
        type="date"
        value={date}
        onChange={(event) => {
          setDate(event.target.value);
        }}
      />
      <button> Add expense</button>
    </form>
  );
}

export default ExpenseForm;
