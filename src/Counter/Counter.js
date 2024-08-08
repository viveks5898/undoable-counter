import React from "react";

const Counter = ({ counter, plusArray, handleCounter }) => {
  return (
    <div className="flex gap-6 justify-between items-center max-w-[860px] m-auto">
      <div className="flex gap-3">
        {plusArray.map((value, index) => (
          <button
            className="bg-white px-4 text-black py-2 rounded-xl font-bold text-[20px]"
            key={index}
            onClick={() => handleCounter(value, "-")}
          >
            - {value}
          </button>
        ))}
      </div>
      <div className="text-2xl font-bold">{counter}</div>
      <div className="flex gap-3">
        {plusArray.map((value, index) => (
          <button
            className="bg-white px-4 text-black py-2 rounded-xl font-bold text-[20px]"
            key={index}
            onClick={() => handleCounter(value, "+")}
          >
            + {value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Counter;
