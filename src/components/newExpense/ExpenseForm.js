import "./ExpenseForm.css";
import { useState } from "react";

function ExpenseForm(props) {
  const [userInput, setInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const titleChangeHandler = (event) => {
    setInput((previousState) => {
      return { ...previousState, title: event.target.value };
    });
  };

  const amountChangeHandler = (event) => {
    setInput((previousState) => {
      return { ...previousState, amount: event.target.value };
    });
  };

  const dateChangeHandler = (event) => {
    setInput((previousState) => {
      return { ...previousState, date: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onSaveExpenseData(userInput);
    props.disableForm(false);
    setInput({ title: "", amount: "", date: "" });
  };

  const cancelHandler = () => {
    props.disableForm(false);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={userInput.title}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={userInput.amount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={userInput.date}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
