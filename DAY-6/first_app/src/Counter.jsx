import React, { useState } from "react";
import "./Counter.css";

export default function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <div>
      <h1>Counter : {count}</h1>
      <button id="increment" onClick={increment}>Increment</button>
      <button id="decrement" onClick={decrement}>Decrement</button>
    </div>
  );
}
