import React from 'react';

export default function ExpenseItem({ expenseInfo, handleEditItem, handleDeleteItem }) {
    if (!expenseInfo) return null;

    const { id, charge, amount } = expenseInfo;

    return (
        <li>
            <div className="list__item">
                <span className="list__item__expense">{ charge }</span>
                <span className="list__item__amount">${ amount }</span>
            </div>
            <div className="list__item-btns">
                <button onClick={() => handleEditItem(id)} className="list__item-btns__edit">Edit</button>
                <button onClick={() => handleDeleteItem(id)} className="list__item-btns__delete">Delete</button>
            </div>
        </li>
    )
}
