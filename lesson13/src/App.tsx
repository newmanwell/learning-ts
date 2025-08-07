import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import type { MouseEvent, KeyboardEvent } from "react";

interface User {
  id: number,
  username: string
}

type fibonacciSeSequence = (num: number) => number

const fibonacci: fibonacciSeSequence = (num) => {
  if (num < 2) return num;

  return fibonacci(num - 1) + fibonacci(num - 2);
}

const theNumber: number = 40;

const App = () => {
  const [count, setCount] = useState<number>(68);
  const [users, setUsers] = useState<User[] | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  console.log(inputRef?.current);
  console.log(inputRef?.current?.value)

  useEffect(() =>{
    console.log('Welcome to your Doom!');
    console.log(`Users: ${users}`);

    return () => console.log('See you later aligator');
  }, [users]);

  const addFour = useCallback((event: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>): void => setCount(prev => prev + 4)
  , []);

  const result = useMemo<number>(() => fibonacci(theNumber), [theNumber]);

  return (
    <div className="App">
      <h2>{count}</h2>
      <button onClick={addFour}>+</button>
      <h3>{result}</h3>
      <input ref={inputRef} type="text" />
    </div>
  )
}

export default App
