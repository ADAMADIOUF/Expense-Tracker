import React, { useState, useEffect } from 'react'
import BudgetForm from './components/BudgetForm'
import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'
import Filters from './components/Filters'
import Charts from './components/Charts'

const App = () => {
  const [expenses, setExpenses] = useState([])
  const [budget, setBudget] = useState(0)
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    const savedExpenses = JSON.parse(localStorage.getItem('expenses')) || []
    const savedBudget = JSON.parse(localStorage.getItem('budget')) || 0
    setExpenses(savedExpenses)
    setBudget(savedBudget)
  }, [])

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses))
    localStorage.setItem('budget', JSON.stringify(budget))
  }, [expenses, budget])

  const addExpense = (expense) => {
    setExpenses([...expenses, expense])
  }

  const editExpense = (id, updatedExpense) => {
    setExpenses(
      expenses.map((expense) => (expense.id === id ? updatedExpense : expense))
    )
  }

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id))
  }

  const filteredExpenses =
    filter === 'all'
      ? expenses
      : expenses.filter((expense) => expense.category === filter)

  return (
    <div>
      <h1>Expense Tracker</h1>
      <BudgetForm setBudget={setBudget} budget={budget} />
      <ExpenseForm addExpense={addExpense} />
      <Filters setFilter={setFilter} />
      <ExpenseList
        expenses={filteredExpenses}
        editExpense={editExpense}
        deleteExpense={deleteExpense}
      />
      <Charts expenses={expenses} />
      <div>
        <h3>Budget: ${budget}</h3>
        <h3>
          Remaining Budget: $
          {budget -
            expenses.reduce((total, expense) => total + expense.amount, 0)}
        </h3>
      </div>
    </div>
  )
}

export default App
