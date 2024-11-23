const ExpenseList = ({ expenses }) => {
    return (
      <ul>
        {expenses.map(expense => (
          <li key={expense._id}>
            {expense.amount} - {expense.category}
            <button>Edit</button>
            <button>Delete</button>
          </li>
        ))}
      </ul>
    );
  };

  export default ExpenseList;