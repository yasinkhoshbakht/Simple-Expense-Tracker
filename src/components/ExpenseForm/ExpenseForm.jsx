import React, { useContext, useState } from 'react';
import { FinanceContext } from '../../App';
import './ExpenseForm.css';

function ExpenseForm() {
    let { dispatch, setUpdateTrigger } = useContext(FinanceContext);
    let [name, setName] = useState('');
    let [amount, setAmount] = useState('');

    let handleSubmit = () => {
        let newExpense = { name, amount: parseFloat(amount) };
        let updatedExpenses = [...(JSON.parse(localStorage.getItem('expenses')) || []), newExpense];
        localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
        dispatch({ type: 'ADD_EXPENSE', payload: parseFloat(amount) });
        setUpdateTrigger((prev) => !prev); 
        setName('');
        setAmount('');
    };

    return (
        <div className="form">
            <input
                type="text"
                placeholder="Expense Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <button onClick={handleSubmit}>Add Expense</button>
        </div>
    );
}

export default ExpenseForm;
