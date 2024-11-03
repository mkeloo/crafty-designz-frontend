// useStore.ts
import { create, StoreApi } from "zustand";

export interface ExampleStore {
  example1State: string;
  example2State: string;
  example3State: string;
  setExample1State: (value: string) => void;
  setExample2State: (value: string) => void;
  setExample3State: (value: string) => void;
}

export const useExampleStore = create<ExampleStore>(
  (set: StoreApi<ExampleStore>["setState"]) => ({
    example1State: "Initial state for ExampleComponent",
    example2State: "Initial state for ExampleComponent2",
    example3State: "Initial state for ExampleComponent3",
    setExample1State: (value: string) => set({ example1State: value }),
    setExample2State: (value: string) => set({ example2State: value }),
    setExample3State: (value: string) => set({ example3State: value }),
  })
);
