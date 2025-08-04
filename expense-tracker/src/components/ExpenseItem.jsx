import React from "react";

const ExpenseItem = ({ item, onDelete }) => {
  return (
    <li className="expense-item">
      <span>{item.desc}</span>
      <span>${item.amount}</span>
      <button onClick={() => onDelete(item.id)}>❌</button>
    </li>
  );
};

export default ExpenseItem;
