import React, { createContext, useReducer, useState } from "react";
import "./App.css";
import IncomeForm from "./components/IncomeForm/IncomeForm";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import IncomeBox from "./components/IncomeBox/IncomeBox";
import ExpenseBox from "./components/ExpenseBox/ExpenseBox";

export let FinanceContext = createContext();

let initialState = 0;

function reducer(state, action) {
  switch (action.type) {
    case "ADD_INCOME":
      return state + action.payload;
    case "ADD_EXPENSE":
      return state - action.payload;
    default:
      return state;
  }
}

function App() {
  let [balance, dispatch] = useReducer(reducer, initialState);
  let [updateTrigger, setUpdateTrigger] = useState(false);

  return (
    <FinanceContext.Provider
      value={{ balance, dispatch, updateTrigger, setUpdateTrigger }}
    >
      <div className="App">
        <h1>Balance: {balance}</h1>
        <IncomeForm />
        <ExpenseForm />
        <IncomeBox />
        <ExpenseBox />
      </div>
    </FinanceContext.Provider>
  );
}

export default App;
