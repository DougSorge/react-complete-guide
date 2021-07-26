import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [desiredYear, setDesiredYear] = useState("2021");

  function getDesiredYear(year) {
    setDesiredYear(year);
    console.log(desiredYear);
  }

  let expense1 = props.items[0];
  let expense2 = props.items[1];
  let expense3 = props.items[2];
  let expense4 = props.items[3];

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter getYear={getDesiredYear} selected={desiredYear} />
        <ExpenseItem expense={expense1} />
        <ExpenseItem expense={expense2} />
        <ExpenseItem expense={expense3} />
        <ExpenseItem expense={expense4} />
      </Card>
    </div>
  );
}

export default Expenses;
