import { useEffect, useState } from "react";
import Board from "./Board";
import Input from "./Input";

const Calculator = () => {
  const [input, setInput] = useState("");
  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      document.querySelector("input").focus();
    });
  }, []);
  return (
    <section className="flex flex-col items-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
      <Input input={input} setInput={setInput} />
      <Board input={input} setInput={setInput} />
    </section>
  );
};

export default Calculator;
