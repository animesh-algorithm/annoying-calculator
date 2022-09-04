import { useEffect, useState } from "react";

const Board = ({ input, setInput }) => {
  const [board, setBoard] = useState([
    ["AC", "/", "%", "DEL"],
    ["7", "8", "9", "*"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    [".", "0", "=", "@"],
  ]);
  const shuffleBoard = (e) => {
    if (e.target.innerText === "AC") {
      setInput("");
      return;
    } else if (e.target.innerText === "DEL") {
      setInput(input.slice(0, -1));
      return;
    } else if (e.target.innerText === "=") {
      setInput(eval(input));
      return;
    }
    setInput(input + e.target.innerText.replace(/[^0-9+\-%*/.]/g, ""));
    const key = e.target.innerText;
    if (key >= "0" && key <= "9") {
      let imax = board.length - 1;
      let imin = 1;
      let jmax = board[0].length - 2;
      let jmin = 0;
      for (let i = imin; i <= imax; i++) {
        for (let j = jmin; j <= jmax; j++) {
          let i1 = Math.floor(Math.random() * (imax - imin) + imin);
          let j1 = Math.floor(Math.random() * (jmax - jmin) + jmin);
          if (
            board[i1][j1] !== "." &&
            board[i1][j1] !== "=" &&
            board[i][j] !== "." &&
            board[i][j] !== "="
          ) {
            [board[i][j], board[i1][j1]] = [board[i1][j1], board[i][j]];
          }
        }
      }
      setBoard([...board]);
    }
  };
  return (
    <div className="flex flex-col space-y-1 min-w-max">
      {board.map((row, i) => (
        <>
          <div key={i} className="space-x-1">
            {row.map((col, j) => (
              <button
                key={j}
                onClick={shuffleBoard}
                className="bg-gray-200 rounded-md p-2 md:p-4 sm:shrink-0 sm:p-0 sm:w-20 sm:h-10 sm:text-md md:w-20 md:h-20 font-bold text-2xl"
              >
                {col}
              </button>
            ))}
          </div>
        </>
      ))}
    </div>
  );
};

export default Board;
