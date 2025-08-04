import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ items, onDelete }) => {
  return (
    <ul className="expense-list">
      {items.map((item) => (
        <ExpenseItem key={item.id} item={item} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default ExpenseList;
