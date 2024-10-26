import React, { useContext, useEffect, useState } from "react";
import { FinanceContext } from "../../App";
import "./IncomeBox.css";

function IncomeBox() {
  let [incomes, setIncomes] = useState([]);
  let { updateTrigger, dispatch, setUpdateTrigger } =
    useContext(FinanceContext);

  useEffect(() => {
    let storedIncomes = JSON.parse(localStorage.getItem("incomes")) || [];
    setIncomes(storedIncomes);
  }, [updateTrigger]);

  let deleteIncome = (index, amount) => {
    let updatedIncomes = incomes.filter((_, i) => i !== index);
    localStorage.setItem("incomes", JSON.stringify(updatedIncomes));
    setIncomes(updatedIncomes);
    dispatch({ type: "ADD_EXPENSE", payload: amount });
    setUpdateTrigger((prev) => !prev);
  };

  return (
    <div className="income-box">
      <h2>Incomes</h2>
      <ul>
        {incomes.map((income, index) => (
          <li key={index}>
            {income.name}: ${income.amount}
            <button onClick={() => deleteIncome(index, income.amount)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default IncomeBox;
