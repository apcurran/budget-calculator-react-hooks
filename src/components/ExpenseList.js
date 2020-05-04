import React from 'react';
import ExpenseItem from "./ExpenseItem";

export default function ExpenseList({ expenses }) {
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
                       />
                   )
               })}
            </ul>
            {expenses.length > 0 && <button className="submit">Clear Expenses</button>}
            <ExpenseItem />
        </React.Fragment>
    )
}
