import React, { useState } from 'react'

const BudgetForm = ({ setBudget, budget }) => {
  const [newBudget, setNewBudget] = useState(budget)

  const handleSubmit = (e) => {
    e.preventDefault()
    setBudget(newBudget)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Set Your Budget</h3>
      <input
        type='number'
        value={newBudget}
        onChange={(e) => setNewBudget(Number(e.target.value))}
      />
      <button type='submit'>Update Budget</button>
    </form>
  )
}

export default BudgetForm
