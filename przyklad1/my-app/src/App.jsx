import "./App.css";
import { useCounter } from "./useCounter";

function App() {
  const { count, increment, decrement, reset } = useCounter(5);
  const {
    count: count2,
    increment: increment2,
    decrement: decrement2,
    reset: reset2,
  } = useCounter(4);

  return (
    <>
      <div>
        <h2>Count: {count}</h2>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
        <button onClick={reset}>Reset</button>
      </div>
      <div>
        <h2>Count: {count2}</h2>
        <button onClick={increment2}>+1</button>
        <button onClick={decrement2}>-1</button>
        <button onClick={reset2}>Reset</button>
      </div>
    </>
  );
}

export default App;
