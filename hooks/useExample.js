import { useState } from "react";

export function useExample() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((prev) => prev + 1);
  }

  return { count, increment };
}
