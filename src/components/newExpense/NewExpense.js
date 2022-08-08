import "./NewExpense.css";
import { useState } from "react";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const [showForm, enableForm] = useState(false);
  const saveExpenseData = (expenseDataInput) => {
    const expenseData = {
      ...expenseDataInput,
      date: new Date(expenseDataInput.date),
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const clickNewExpenseHandler = (enable) => {
    enableForm(enable);
  };

  let newExpenseContent = (
    <ExpenseForm
      onSaveExpenseData={saveExpenseData}
      disableForm={clickNewExpenseHandler}
    ></ExpenseForm>
  );

  if (!showForm) {
    newExpenseContent = (
      <button onClick={() => clickNewExpenseHandler(true)}>
        Add New Expense
      </button>
    );
  }

  return <div className="new-expense">{newExpenseContent}</div>;
}

export default NewExpense;
