import { useState } from "react";
import Counter from "../components/Counter";

export default function home() {
  const [counters, setCounters] = useState([
    {
      title: "Pushup Counter",
      initialCount: 100,
    },
  ]);

  return (
    <div className="App">
      {counters.map((counter) => (
        <Counter title={counter.title} initialCount={counter.initialCount} />
      ))}
    </div>
  );
}