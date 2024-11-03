"use client";

import React from "react";
import { useExampleStore } from "@/stores/useStore";

const ExampleComponent3 = () => {
  const example3State = useExampleStore((state) => state.example3State);
  const setExample3State = useExampleStore((state) => state.setExample3State);
  const checkboxes = useExampleStore((state) => state.checkboxes);
  const setCheckbox = useExampleStore((state) => state.setCheckbox);

  return (
    <div className="p-4 border rounded-md shadow-md bg-gray-100">
      <p className="text-lg font-semibold mb-2">{example3State}</p>
      <button
        onClick={() => setExample3State("Updated state for ExampleComponent3")}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 mb-4"
      >
        Update Example 3 State
      </button>
      <div>
        <p className="font-medium mb-2">Checkboxes:</p>
        <div className="flex flex-col space-y-2">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={checkboxes.checkbox1}
              onChange={(e) => setCheckbox("checkbox1", e.target.checked)}
              className="form-checkbox h-4 w-4 text-blue-600"
            />
            <span>Checkbox 1</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={checkboxes.checkbox2}
              onChange={(e) => setCheckbox("checkbox2", e.target.checked)}
              className="form-checkbox h-4 w-4 text-blue-600"
            />
            <span>Checkbox 2</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={checkboxes.checkbox3}
              onChange={(e) => setCheckbox("checkbox3", e.target.checked)}
              className="form-checkbox h-4 w-4 text-blue-600"
            />
            <span>Checkbox 3</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default ExampleComponent3;
