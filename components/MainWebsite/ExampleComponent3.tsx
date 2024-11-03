// ExampleComponent3.tsx
import React from "react";
import { useExampleStore } from "@/stores/useStore";
import { ExampleStore } from "@/stores/useStore"; // Import the type if not already imported

const ExampleComponent3 = () => {
  const example3State = useExampleStore(
    (state: ExampleStore) => state.example3State
  );
  const setExample3State = useExampleStore(
    (state: ExampleStore) => state.setExample3State
  );

  return (
    <div>
      <p>{example3State}</p>
      <button
        onClick={() => setExample3State("Updated state for ExampleComponent3")}
      >
        Update Example 3 State
      </button>
    </div>
  );
};

export default ExampleComponent3;
