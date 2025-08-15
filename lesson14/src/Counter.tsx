import type { ReactNode } from "react";
import { useState } from "react";

type ChildrenType = {
  children: (num: number) => ReactNode;
}

const Counter = ({ children}: ChildrenType) => {
  const [count, setCount] = useState<number>(1);

  const addUp = () => setCount(prev => prev + 1);
  const takeDown = () => setCount(prev => prev - 1);

  return (
    <>
      <h1>{children(count)}</h1>
      <div>
        <button onClick={addUp}>Up</button>
        <button onClick={takeDown}>Down</button>
      </div>
    </>
  )
}

export default Counter;