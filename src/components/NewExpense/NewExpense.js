import React from "react";
import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const onNewExpenseFormSubmitted = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.addToArray(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onNewExpenseFormSubmitted={onNewExpenseFormSubmitted} />
    </div>
  );
}

export default NewExpense;
