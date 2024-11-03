"use client";

import React from "react";
import { useExampleStore } from "@/stores/useStore";

const ExampleComponent2 = () => {
  const example2State = useExampleStore((state) => state.example2State);
  const setExample2State = useExampleStore((state) => state.setExample2State);
  const textInput = useExampleStore((state) => state.textInput);
  const setTextInput = useExampleStore((state) => state.setTextInput);

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md space-y-3">
      <p className="text-lg font-semibold text-gray-800">{example2State}</p>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        onClick={() => setExample2State("Updated state for ExampleComponent2")}
      >
        Update Example 2 State
      </button>
      <div>
        <p className="text-gray-700 font-medium">Text Input:</p>
        <input
          type="text"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
};

export default ExampleComponent2;
