import React, {
  createContext,
  createRef,
  useContext,
  useEffect,
  useState,
} from "react";

export const ThreeContext = createContext(null);

export function ThreeProvider({ state, children }) {
  const [threeState, setThreeState] = useState({});

  useEffect(() => {
    setThreeState(state);
  }, []);

  return (
    <ThreeContext.Provider value={threeState}>{children}</ThreeContext.Provider>
  );
}

export const useThreeContext = () => useContext(ThreeContext);
