import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const getExpenseData = (enteredExpenseData)=>{
      const expenseData = {
        ...enteredExpenseData,
        id: Math.random().toString()
      };
      props.onExpenseAdd(expenseData);
  }
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={getExpenseData}/>
    </div>
  );
};

export default NewExpense;
