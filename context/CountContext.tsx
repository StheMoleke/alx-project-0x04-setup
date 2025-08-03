import React, { createContext, useContext, useState, ReactNode } from "react";

// 1. Define the interface with increment & decrement
interface CountContextProps {
  count: number;
  increment: () => void;
  decrement: () => void;
}

// 2. Create the context with a default value (optional if using Provider directly)
const CountContext = createContext<CountContextProps | undefined>(undefined);

// 3. Provider component
export const CountProvider = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  return (
    <CountContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CountContext.Provider>
  );
};

// 4. Custom hook to use the context
export const useCount = () => {
  const context = useContext(CountContext);
  if (!context) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return context;
};
