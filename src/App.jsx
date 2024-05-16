import { useState } from "react";
import Button from "./components/Button";
import FormPanel from "./components/FormPanel";

import "./app.css"
import Posts from "./components/Posts";
import Animal from "./components/Animal";

const App = () => {

  const [count, setCount] = useState(0);

  const send = (msg) => console.log(msg);


  const increment = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  }

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <>
      <div>My Form</div>
      <div className="panel">{count}</div>
      <Button label="-" action={decrement}/>
      <Button label="+" action={increment}/>
      <FormPanel count={count}/>
      <Button label="Button 1" color="blue" action={() => send("Button1")}/>
      <Button color="green" action={() => send("Button2")}/>
      <hr />
      <Animal />
      <Posts />
    </>
  );
};

export default App;
