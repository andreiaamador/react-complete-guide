import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const saveExpenseData = (expenseDataInput) => {
    const expenseData = {
      ...expenseDataInput,
      date: new Date(expenseDataInput.date),
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseData}></ExpenseForm>
    </div>
  );
}

export default NewExpense;
