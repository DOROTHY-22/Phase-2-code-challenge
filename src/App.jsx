import React, { useState } from 'react';
import './App.css';
import ExpenseTable from './ExpenseTable';
import AddExpenseForm from './AddExpenseForm';
import SearchBar from './SearchBar';

function App() {
  const initialExpenses = [
    { id: 1, name: 'Groceries', category: 'Food', amount: 50, description: 'Weekly grocery shopping' },
    { id: 2, name: 'Movie Ticket', category: 'Entertainment', amount: 15, description: 'Watching the latest movie' },
    { id: 3, name: 'Gasoline', category: 'Transportation', amount: 30, description: 'Filling up the car' },
  ];
  const [expenses, setExpenses] = useState(initialExpenses);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredExpenses, setFilteredExpenses] = useState(initialExpenses);

  const handleSearch = (term) => {
    setSearchTerm(term);
    const filtered = expenses.filter(expense =>
      expense.name.toLowerCase().includes(term.toLowerCase()) ||
      expense.description.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredExpenses(filtered);
  };

  const handleAddExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
    if (!searchTerm) {
      setFilteredExpenses([...filteredExpenses, newExpense]);
    }
  };

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
      <AddExpenseForm onAddExpense={handleAddExpense} />
      <div className="expenses-table">
        <ExpenseTable expenses={filteredExpenses} />
      </div>
    </div>
  );
}

export default App;