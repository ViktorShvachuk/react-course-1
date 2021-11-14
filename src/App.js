import { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_ITEMS = [
  {
    id: '1',
    date: new Date(),
    title: "Test title 1",
    amount: 147.47,
  },
  {
    id: '2',
    date: new Date(),
    title: "Test title 2",
    amount: 199.55,
  },
];


const App = () => {
  const [items, setItems] = useState(DUMMY_ITEMS);

  const addExpenseHandler = expense => {
    setItems(prevItems => [expense, ...prevItems]);
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={items}/>
    </div>
  );
}

export default App;

