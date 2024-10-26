import React, { useContext, useState } from "react";
import { FinanceContext } from "../../App";
import "./IncomeForm.css";

function IncomeForm() {
  let { dispatch, setUpdateTrigger } = useContext(FinanceContext);
  let [name, setName] = useState("");
  let [amount, setAmount] = useState("");

  let handleSubmit = () => {
    let newIncome = { name, amount: parseFloat(amount) };
    let updatedIncomes = [
      ...(JSON.parse(localStorage.getItem("incomes")) || []),
      newIncome,
    ];
    localStorage.setItem("incomes", JSON.stringify(updatedIncomes));
    dispatch({ type: "ADD_INCOME", payload: parseFloat(amount) });
    setUpdateTrigger((prev) => !prev);
    setName("");
    setAmount("");
  };

  return (
    <div className="form">
      <input
        type="text"
        placeholder="Income Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleSubmit}>Add Income</button>
    </div>
  );
}

export default IncomeForm;
