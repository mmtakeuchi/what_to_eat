import "./App.scss";
import { Food, Prices } from "./api/data";

function App() {
  let foodIndex = Math.floor(Math.random() * Object.keys(Food).length);
  let randomPrice = Prices[Math.floor(Math.random() * Prices.length)];

  return (
    <div className="App">
      <h1>What To Eat</h1>
      <div className="food">{Object.keys(Food)[foodIndex]}:</div>
      <div>{Object.values(Food)[foodIndex]}</div>
      <div>{randomPrice}</div>
    </div>
  );
}

export default App;
