import Heading from "./components/Heading";
import { Section } from "./components/Section";
import Counter from "./components/Counter";

import { useState } from "react";

const App = () => {
  const [count, setCount] = useState<number>(1)

  return (
    <>
      <Heading title={"Good Day Sir!"}/>
      <Section title={"Some Silly Prop"}>This is where children go!</Section>
      <Counter setCount={setCount}> Current Number: {count} </Counter>
    </>
  )
}

export default App;
