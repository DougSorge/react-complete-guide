import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [currentTitle, updateCurrentTitle] = useState("");
  const [currentAmount, updateCurrentAmount] = useState("");
  const [currentDate, updateCurrentDate] = useState("");

  //   or we could use one useState call instead of 3
  // const [userInput, setUserInput] = useState({
  //     currentTitle: '',
  //     currentAmount: "",
  //     currentDate: ""
  // });

  // const titleChangeHandler = (e) => {
  // setUserInput((prevState) => {
  //   return {...prevState, cerrentTitle: e.target.value}
  //   })
  //   };

  const titleChangeHandler = (e) => {
    updateCurrentTitle(e.target.value);
  };

  const amountChangeHandler = (e) => {
    updateCurrentAmount(e.target.value);
  };

  const dateChangeHandler = (e) => {
    updateCurrentDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: currentTitle,
      amount: currentAmount,
      date: new Date(currentDate),
    };
    props.onNewExpenseFormSubmitted(expenseData);
    updateCurrentAmount("");
    updateCurrentTitle("");
    updateCurrentDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={currentTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            value={currentAmount}
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            value={currentDate}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
