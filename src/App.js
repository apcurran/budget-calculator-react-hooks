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
  const [alert, setAlert] = useState({ show: false });
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState("");

  function handleCharge(event) {
    setCharge(event.target.value);
  }

  function handleAmount(event) {
    setAmount(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    // Check for invalid data first
    if (charge === "" || amount < 0) {
      handleAlert({
        type: "danger",
        text: "Please check that your charge is not empty, and the amount value is greater than zero."
      });

      return;
    }

    // Editing
    if (edit) {
      const tempExpenses = expenses.map(expense => {
        return expense.id === id ? {...expense, charge, amount} : expense; 
      });

      setExpenses(tempExpenses);
      setEdit(false);
    } else { // Not editing
      const newExpense = {
        id: uuidv4(),
        charge,
        amount
      };

      setExpenses([...expenses, newExpense]);
      handleAlert({
        type: "success",
        text: "Item added"
      });
    }

    setCharge("");
    setAmount("");
  }

  function handleAlert({ type, text }) {
    setAlert({ show: true, type, text });

    setTimeout(() => {
      setAlert({ show: false });
    }, 4000);
  }

  function clearItems() {
    setExpenses([]);
  }

  function handleDeleteItem(id) {
    const revisedExpenses = expenses.filter(expense => expense.id !== id);

    setExpenses(revisedExpenses);
  }

  function handleEditItem(id) {
    const expense = expenses.find(expense => expense.id === id);
    const { charge, amount } = expense;
    setCharge(charge);
    setAmount(amount);
    setEdit(true);
    setId(id);
    console.log(id);
  }

  return (
    <div className="App">
      {alert.show && <FormAlert type={alert.type} text={alert.text} />}
      <FormAlert />
      <h1>Budget Calculator</h1>
      <main className="main">
        <ExpenseForm
          charge={charge}
          amount={amount}
          handleAmount={handleAmount}
          handleCharge={handleCharge}
          handleSubmit={handleSubmit}
          edit={edit}
        />
        <ExpenseList
          expenses={expenses}
          handleDeleteItem={handleDeleteItem}
          handleEditItem={handleEditItem}
          clearItems={clearItems}
        />
      </main>
      <h2>
        Total Spending: <span className="total">${ expenses.reduce((total, curr) => total + Number(curr.amount), 0) }</span>
      </h2>
    </div>
  );
}

export default App;
