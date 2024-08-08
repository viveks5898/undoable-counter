import "./App.css";
import { useState } from "react";
import Counter from "./Counter/Counter";

function App() {
  const [counter, setCounter] = useState(0);
  const plusArray = [1, 10, 100];
  const [history, setHistory] = useState([{ value: 0 }]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleCounter = (value, operator) => {
    const newCounter = operator === "+" ? counter + value : counter - value;
    const newHistory = [
      ...history.slice(0, currentIndex + 1),
      { value: newCounter },
    ];
    setHistory(newHistory);
    setCounter(newCounter);
    setCurrentIndex(newHistory.length - 1);
  };

  const handleUndo = () => {
    if (currentIndex === 0) {
      return alert("No more actions to undo");
    }
    const prevIndex = currentIndex - 1;
    setCounter(history[prevIndex].value);
    setCurrentIndex(prevIndex);
  };

  const handleRedo = () => {
    if (currentIndex === history.length - 1) {
      return alert("No more actions to redo");
    }
    const nextIndex = currentIndex + 1;
    setCounter(history[nextIndex].value);
    setCurrentIndex(nextIndex);
  };

  return (
    <div className="App">
      <header className="App-header">
        Undoable Counter
        <div className="flex gap-5 justify-center mt-10">
          <button
            className="bg-[#877878] px-8 py-2 rounded-xl font-bold text-[20px]"
            onClick={handleUndo}
          >
            Undo
          </button>
          <button
            className="bg-red-900 px-8 py-2 font-bold rounded-xl text-[20px]"
            onClick={handleRedo}
          >
            Redo
          </button>
        </div>
        <div className="mt-[9.5rem]">
          <Counter
            counter={counter}
            plusArray={plusArray}
            handleCounter={handleCounter}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
