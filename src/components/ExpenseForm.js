import React from 'react'

export default function ExpenseForm({ charge, amount, handleCharge, handleAmount, handleSubmit, edit }) {
    return (
        <form onSubmit={handleSubmit} className="form">
            <div className="form-group">
                <label htmlFor="" className="form-group__label">Charge</label>
                <input
                    type="text"
                    className="form-group__input"
                    id="charge"
                    name="charge"
                    placeholder="ex. rent"
                    value={ charge }
                    onChange={handleCharge}
                />
            </div>
            <div className="form-group">
                <label htmlFor="" className="form-group__label">Amount</label>
                <input
                    type="number"
                    className="form-group__input"
                    id="amount" name="amount"
                    placeholder="ex. 100"
                    value={ amount }
                    onChange={ handleAmount }
                />
            </div>
            <button type="submit" className="form__submit">
                {edit ? "Done" : "Submit"}
            </button>
        </form>
    )
}
