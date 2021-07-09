import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "A Book",
    amount: 94.12,
    date: new Date(2021, 7, 14),
  },
  {
    id: "e2",
    title: "TV",
    amount: 94.12,
    date: new Date(2020, 8, 14),
  },
  {
    id: "e3",
    title: "Car",
    amount: 200000,
    date: new Date(2021, 10, 30),
  },
];
function App () {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
