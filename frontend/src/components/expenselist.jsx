function ExpenseList() {
  const expenses = [
    {
      id: 1,
      description: "Lunch",
      category: "Food",
      amount: 250,
      date: "2026-10-08",
    },
    {
      id: 2,
      description: "Bus",
      category: "Transport",
      amount: 40,
      date: "2026-10-07",
    },
    {
      id: 3,
      description: "Shopping",
      category: "Shopping",
      amount: 900,
      date: "2026-10-05",
    },
  ];

  return (
    <div className="expense-list">
      <div className="expense-list-header">
        <span>Description</span>
        <span>Category</span>
        <span>Date</span>
        <span>Amount</span>
      </div>

      {expenses.map((expense) => (
        <div className="expense-item" key={expense.id}>
          <span>{expense.description}</span>
          <span>{expense.category}</span>
          <span>{expense.date}</span>
          <span>₹{expense.amount}</span>
        </div>
      ))}
    </div>
  );
}

export default ExpenseList;
