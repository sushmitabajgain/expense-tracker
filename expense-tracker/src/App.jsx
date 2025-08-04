import React, { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import "./index.css";

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((e) => e.id !== id));
  };

  const total = expenses.reduce((sum, e) => sum + Number(e.amount), 0);

  return (
    <div className="app">
      <h1>💰 Expense Tracker</h1>
      <ExpenseForm onAdd={addExpense} />
      <ExpenseList items={expenses} onDelete={deleteExpense} />
      <h2 className="total">Total: ${total}</h2>
    </div>
  );
}

export default App;
