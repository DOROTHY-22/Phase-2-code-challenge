import React from 'react';

function ExpenseTable({ expenses }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Amount</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map(expense => (
          <tr key={expense.id}>
            <td>{expense.name}</td>
            <td>{expense.category}</td>
            <td>{expense.amount}</td>
            <td>{expense.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ExpenseTable;