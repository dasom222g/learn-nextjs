import { useState } from "react"

export default function Counter() {
  const [count, setCount] = useState(0)
  return (
    <>
      <h3>Counter {count}</h3>
      <button type="button" onClick={() => setCount(prev => prev + 1)}>+</button>
    </>
  )
}