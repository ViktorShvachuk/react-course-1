import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const expenses = props.expenses;
  const [enteredFilterYear, setEnteredFilterYear] = useState("2021");

  const expensesFilterHandler = (expensesFilterYear) => {
    setEnteredFilterYear(expensesFilterYear);
  };

  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === enteredFilterYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={enteredFilterYear}
          onFilterChange={expensesFilterHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
