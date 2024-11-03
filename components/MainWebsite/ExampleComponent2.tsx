"use client";

import React from "react";
import { useExampleStore } from "@/stores/useStore";

const ExampleComponent2 = () => {
  const example2State = useExampleStore((state) => state.example2State);
  const setExample2State = useExampleStore((state) => state.setExample2State);

  return (
    <div>
      <p>{example2State}</p>
      <button
        onClick={() => setExample2State("Updated state for ExampleComponent2")}
      >
        Update Example 2 State
      </button>
    </div>
  );
};

export default ExampleComponent2;
