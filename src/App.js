
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: 1,
      title: "Toilet Paper",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  const addData = newExpense => {
    console.log(newExpense);
  }

  return (
    <div className="App">
      <NewExpense onExpenseAdd={addData}/>
      <Expenses items={expenses}/>
     
    </div>
  );
}

export default App;
