import "./App.css";
import { Food, Prices } from "./api/data";

function App() {
  let index = Math.floor(Math.random() * Object.keys(Food).length);
  return (
    <div className="App">
      <h1>What To Eat</h1>
      <div>{Object.keys(Food)[index]}:</div>
      <div>{Object.values(Food)[index]}</div>
      <div>{Prices[0]}</div>
    </div>
  );
}

export default App;
