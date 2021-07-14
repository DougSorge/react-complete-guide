import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
  let expense1 = props.items[0];
  let expense2 = props.items[1];
  let expense3 = props.items[2];
  let expense4 = props.items[3];

  return (
    <Card className="expenses">
      <ExpenseItem expense={expense1} />
      <ExpenseItem expense={expense2} />
      <ExpenseItem expense={expense3} />
      <ExpenseItem expense={expense4} />
    </Card>
  );
}

export default Expenses;
