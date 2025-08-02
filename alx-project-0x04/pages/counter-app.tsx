import { useState } from "react";

export default function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter App</h1>
      <p style={{ fontSize: "24px" }}>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)} style={{ marginLeft: "10px" }}>
        Decrease
      </button>
      <button onClick={() => setCount(0)} style={{ marginLeft: "10px" }}>
        Reset
      </button>
    </div>
  );
}
