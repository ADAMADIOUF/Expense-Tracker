import React, { useState } from 'react'

const ExpenseForm = ({ addExpense }) => {
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState(0)
  const [category, setCategory] = useState('Food')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!description || amount <= 0) return
    const newExpense = {
      id: Date.now(),
      description,
      amount,
      category,
    }
    addExpense(newExpense)
    setDescription('')
    setAmount(0)
    setCategory('Food')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add New Expense</h3>
      <input
        type='text'
        placeholder='Description'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type='number'
        placeholder='Amount'
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value='Food'>Food</option>
        <option value='Transport'>Transport</option>
        <option value='Entertainment'>Entertainment</option>
        <option value='Other'>Other</option>
      </select>
      <button type='submit'>Add Expense</button>
    </form>
  )
}

export default ExpenseForm
