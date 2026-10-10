function ExpenseList({ expenses }) {
  return (
    <div className="expense-list">
      <div className="expense-list-header">
        <span>Description</span>
        <span>Category</span>
        <span>Date</span>
        <span>Amount</span>
      </div>

      {(expenses ?? []).map((expense) => (
        <div className="expense-item" key={expense.id}>
          <span>{expense.description}</span>
          <span>{expense.category}</span>
          <span>{expense.date?.slice(0, 10)}</span>
          <span>₹{expense.amount}</span>
        </div>
      ))}
    </div>
  );
}

export default ExpenseList;
