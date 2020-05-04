import React, { useState } from 'react';
import ExpenseList from './components/ExpenseList';
import ExpenseForm from './components/ExpenseForm';
import FormAlert from './components/FormAlert';
import { v4 as uuidv4 } from "uuid";

const initialExpenses = [
  { id: uuidv4(), charge: "rent", amount: 1600 },
  { id: uuidv4(), charge: "food", amount: 400 },
  { id: uuidv4(), charge: "car expenses", amount: 600 }
]

function App() {
  // All expenses
  const [expenses, setExpenses] = useState(initialExpenses);
  // Single additional expense
  const [charge, setCharge] = useState("");
  // Single additional amount
  const [amount, setAmount] = useState("");

  function handleCharge(event) {
    setCharge(event.target.value);
  }

  function handleAmount(event) {
    setAmount(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (charge === "" || amount < 0) return;

    const newExpense = {
      id: uuidv4(),
      charge,
      amount
    };

    setExpenses([...expenses, newExpense]);
    setCharge("");
    setAmount("");
  }

  return (
    <div className="App">
      <FormAlert />
      <h1>Budget Calculator</h1>
      <main className="main">
        <ExpenseForm
          charge={charge}
          amount={amount}
          handleAmount={handleAmount}
          handleCharge={handleCharge}
          handleSubmit={handleSubmit}
        />
        <ExpenseList expenses={expenses} />
      </main>
      <h2>
        Total Spending: <span className="total">${ expenses.reduce((total, curr) => total + Number(curr.amount), 0) }</span>
      </h2>
    </div>
  );
}

export default App;
