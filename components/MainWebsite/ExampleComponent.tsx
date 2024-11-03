"use client";

import React from "react";
import { useExampleStore } from "@/stores/useStore";

const ExampleComponent = () => {
  const example1State = useExampleStore((state) => state.example1State);
  const setExample1State = useExampleStore((state) => state.setExample1State);

  return (
    <div>
      <p>{example1State}</p>
      <button
        onClick={() => setExample1State("Updated state for ExampleComponent")}
      >
        Update Example 1 State
      </button>
    </div>
  );
};

export default ExampleComponent;
