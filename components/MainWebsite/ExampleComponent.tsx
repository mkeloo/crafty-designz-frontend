"use client";

import React from "react";
import { useExampleStore } from "@/stores/useStore";

const ExampleComponent = () => {
  const example1State = useExampleStore((state) => state.example1State);
  const setExample1State = useExampleStore((state) => state.setExample1State);
  const counter = useExampleStore((state) => state.counter);
  const incrementCounter = useExampleStore((state) => state.incrementCounter);

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md space-y-3">
      <p className="text-lg font-semibold text-gray-800">{example1State}</p>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        onClick={() => setExample1State("Updated state for ExampleComponent")}
      >
        Update Example 1 State
      </button>
      <div className="flex items-center space-x-2">
        <p className="text-gray-700 font-medium">Counter: {counter}</p>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
          onClick={incrementCounter}
        >
          Increment Counter
        </button>
      </div>
    </div>
  );
};

export default ExampleComponent;
