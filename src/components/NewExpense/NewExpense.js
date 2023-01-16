import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (savedExpenseData) => {
    const expenseData = {
      ...savedExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);

    setIsEditing(!isEditing);
  };

  const editExpenseClickHandler = (event) => {
    event.preventDefault();
    setIsEditing(!isEditing);
  };

  return (
    <div className="new-expense">
      {isEditing ? (
        <ExpenseForm
          onEditExpense={editExpenseClickHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      ) : (
        <button onClick={editExpenseClickHandler}>Add new expense</button>
      )}
    </div>
  );
};

export default NewExpense;
