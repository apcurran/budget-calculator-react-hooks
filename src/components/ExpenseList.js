import React from 'react';
import ExpenseItem from "./ExpenseItem";

export default function ExpenseList({ expenses, handleEditItem, handleDeleteItem, clearItems }) {
    if (!expenses.length) {
        return <p>Your current list is empty.</p>;
    }

    return (
        <React.Fragment>
            <ul className="list">
               {expenses.map(expense => {
                   return (
                       <ExpenseItem
                        key={expense.id}
                        expenseInfo={expense}
                        handleEditItem={handleEditItem}
                        handleDeleteItem={handleDeleteItem}
                       />
                   )
               })}
            </ul>
            {expenses.length > 0 && <button onClick={clearItems} className="submit">Clear Expenses</button>}
            <ExpenseItem />
        </React.Fragment>
    )
}
