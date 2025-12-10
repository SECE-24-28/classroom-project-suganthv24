import "../css/Counter.css";
import { useContext } from "react";
import { CounterContext } from "../../Context/CounterContext";

export default function Counter() {
  const { count, increment, decrement, reset } = useContext(CounterContext);
  return (
    <div className="counter-container">
      <h1>Counter : {count}</h1>
      <div className="buttons">
        <button id="increment" onClick={increment}>Increment</button>
        <button id="increment" onClick={decrement}>Decrement</button>
        <button id="increment" style={{ backgroundColor: "red", color: "white" }} onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
