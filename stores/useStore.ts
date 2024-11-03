// useStore.ts
import { create, StoreApi } from "zustand";

export interface ExampleStore {
  example1State: string;
  example2State: string;
  example3State: string;
  counter: number;
  textInput: string;
  checkboxes: { [key: string]: boolean };
  setExample1State: (value: string) => void;
  setExample2State: (value: string) => void;
  setExample3State: (value: string) => void;
  incrementCounter: () => void;
  setTextInput: (value: string) => void;
  setCheckbox: (key: string, value: boolean) => void;
}

export const useExampleStore = create<ExampleStore>(
  (set: StoreApi<ExampleStore>["setState"]) => ({
    example1State: "Initial state for ExampleComponent",
    example2State: "Initial state for ExampleComponent2",
    example3State: "Initial state for ExampleComponent3",
    counter: 0,
    textInput: "",
    checkboxes: {
      checkbox1: false,
      checkbox2: false,
      checkbox3: false,
    },
    setExample1State: (value: string) => set({ example1State: value }),
    setExample2State: (value: string) => set({ example2State: value }),
    setExample3State: (value: string) => set({ example3State: value }),
    incrementCounter: () => set((state) => ({ counter: state.counter + 1 })),
    setTextInput: (value: string) => set({ textInput: value }),
    setCheckbox: (key: string, value: boolean) =>
      set((state) => ({
        checkboxes: { ...state.checkboxes, [key]: value },
      })),
  })
);
