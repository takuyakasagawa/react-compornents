import { useState } from "react";
import { ChildArea } from "./ChildArea";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);

  const onClickCountUp = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={onClickCountUp}>カウント</button>
      <p>{count}</p>
      <input />
      <br />
      <br />
      <button>表示</button>
      <ChildArea />
    </div>
  );
}
