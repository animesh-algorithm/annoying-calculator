import { useEffect, useRef } from "react";

const Input = ({ input, setInput }) => {
  const inputRef = useRef(null);
  const handleKeyDown = (e) => {
    if (e.key === "Backspace") {
      document.querySelector("button[value='DEL']")?.click();
      return;
    } else if (e.key === "Enter") {
      setInput(eval(input));
      return;
    }
  };
  const handleInput = (e) => {
    e.target.value = e.target.value.replace(/[^0-9+%\-*/.]/g, "");
    setInput(e.target.value);
  };
  return (
    <input
      ref={inputRef}
      onKeyDown={handleKeyDown}
      onChange={handleInput}
      value={input}
      type="text"
      className="flex-grow w-full p-5 mb-2 text-right border-2 border-gray-200 rounded-md text-2xl focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent"
      autoFocus={true}
    />
  );
};

export default Input;
