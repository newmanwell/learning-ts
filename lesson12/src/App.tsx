import Heading from "./components/Heading";
import { Section } from "./components/Section";
import Counter from "./components/Counter";
import List from "./components/List";

import { useState } from "react";

const App = () => {
  const [count, setCount] = useState<number>(1)

  return (
    <>
      <Heading title={"Good Day Sir!"}/>
      <Section title={"Some Silly Prop"}>This is where children go!</Section>
      <Counter setCount={setCount}> Current Number: {count} </Counter>
      <List items={["USA 🇺🇸", "UK 🇬🇧", "EU 🇪🇺"]} render={(item: string) => <div className="gold">{item}</div>} />
    </>
  )
}

export default App;
