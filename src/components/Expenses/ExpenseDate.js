import "./ExpenseDate.css";

function ExpenseDate(props) {
  const convertMonth = props.date.toLocaleString("en-US", { month: "short" });
  const convertDay = props.date.toLocaleString("en-US", { day: "2-digit" });
  const convertYear = props.date.getFullYear();

  return (
    <div className="expense-date__container">
      <div className="expense-date__month">{convertMonth}</div>
      <div className="expense-date__day">{convertDay}</div>
      <div className="expense-date__year">{convertYear}</div>
    </div>
  );
}

export default ExpenseDate;
