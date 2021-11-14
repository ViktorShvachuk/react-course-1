import { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [formActive, setFormActive] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    setFormActive(false);
    props.onAddExpense(expenseData);
  };

  const cancelNewExpenseHandler = () => {
    setFormActive(false);
  };

  const openNewExpenseFormHandler = () => {
    setFormActive(true);
  };

  if (!formActive)
  {
    return (
      <div className="new-expense">
        <button onClick={openNewExpenseFormHandler}>Add new expense</button>
      </div>
    )
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelNewExpenseHandler} />
    </div>
  );
};

export default NewExpense;
