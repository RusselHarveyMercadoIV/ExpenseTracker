import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [yearFilter, setYearFilter] = useState("Default");

  const filterHandller = (year) => {
    setYearFilter(year);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    if (yearFilter === "Default") return expense;
    return expense.date.getFullYear().toString() === yearFilter;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter value={yearFilter} onFilter={filterHandller} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
