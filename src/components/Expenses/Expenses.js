import React from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
const Expenses = (props) => {
  return (
  <Card className="expenses">
    <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
  </Card>
  );
};

export default Expenses;
