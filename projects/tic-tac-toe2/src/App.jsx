import { useState } from "react";

const turns = {
  X: "x",
  o: "o",
};

const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? "is-selected" : ""}`;

  const handleClick = () => {
    updateBoard(index);
  };

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  );
};

function App() {
  const [boardstate, setboardstate] = useState(Array(9).fill(null));

  const [turn, setturn] = useState(turns.X);

  const updateBoard = (id) => {
    if (boardstate[id] != null) {
      console.log("No puedes dar click");
    } else {
      setturn(turn == turns.X ? turns.o : turns.X);
      const newBoard = [...boardstate];
      newBoard[id] = turn;
      setboardstate(newBoard);
      console.log("Si puedes dar click");
    }
  };

  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <section className="game">
        {boardstate.map((xORo, i) => {
          return (
            <Square
              key={i}
              children={xORo}
              updateBoard={updateBoard}
              index={i}
            ></Square>
          );
        })}
      </section>
      <section className="turn">
        <Square children={turns.X} isSelected={turn == turns.X} />
        <Square children={turns.o} isSelected={turn == turns.o} />
      </section>
    </main>
  );
}

export default App;
