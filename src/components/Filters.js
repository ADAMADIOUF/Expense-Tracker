import React from 'react'

const Filters = ({ setFilter }) => {
  return (
    <div>
      <h3>Filter by Category</h3>
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value='all'>All</option>
        <option value='Food'>Food</option>
        <option value='Transport'>Transport</option>
        <option value='Entertainment'>Entertainment</option>
        <option value='Other'>Other</option>
      </select>
    </div>
  )
}

export default Filters
