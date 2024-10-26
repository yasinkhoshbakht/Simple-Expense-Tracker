import React, { useContext, useEffect, useState } from 'react';
import { FinanceContext } from '../../App';
import "./ExpenseBox.css";

function ExpenseBox() {
    let [expenses, setExpenses] = useState([]);
    let { updateTrigger, dispatch, setUpdateTrigger } = useContext(FinanceContext);

    useEffect(() => {
        let storedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
        setExpenses(storedExpenses);
    }, [updateTrigger]);

    let deleteExpense = (index, amount) => {
        let updatedExpenses = expenses.filter((_, i) => i !== index);
        localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
        setExpenses(updatedExpenses);
        dispatch({ type: 'ADD_INCOME', payload: amount }); 
        setUpdateTrigger((prev) => !prev); 
    };

    return (
        <div className="expense-box">
            <h2>Expenses</h2>
            <ul>
                {expenses.map((expense, index) => (
                    <li key={index}>
                        {expense.name}: ${expense.amount}
                        <button onClick={() => deleteExpense(index, expense.amount)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ExpenseBox;
