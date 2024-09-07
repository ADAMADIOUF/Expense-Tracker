import React from 'react'

const ExpenseList = ({ expenses, editExpense, deleteExpense }) => {
  return (
    <ul>
      {expenses.map((expense) => (
        <li key={expense.id}>
          <span>
            {expense.description} - ${expense.amount} ({expense.category})
          </span>
          <button onClick={() => deleteExpense(expense.id)}>Delete</button>
          <button
            onClick={() =>
              editExpense(expense.id, {
                ...expense,
                amount: expense.amount + 10,
              })
            }
          >
            Increase Amount
          </button>
        </li>
      ))}
    </ul>
  )
}

export default ExpenseList
