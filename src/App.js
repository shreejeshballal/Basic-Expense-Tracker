
import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    {
      id: 1,
      title: "Toilet Paper",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div className="App">
      <h2>Let's get started!</h2>
      <Expenses items={expenses}/>
     
    </div>
  );
}

export default App;
