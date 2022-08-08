import "./Expense.css";
import ExpensesList from "./ExpensesList";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../ui/Card";
import { useState } from "react";

function Expense(props) {
  const [yearFilter, setYear] = useState("2020");

  const yearFilterHandler = (year) => {
    setYear(year);
  };

  const expenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === yearFilter
  );

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          onYearSelect={yearFilterHandler}
          selectFilter={yearFilter}
        ></ExpenseFilter>
        <ExpensesList items={expenses} />
      </Card>
    </div>
  );
}

export default Expense;
