import { createContext, useContext, useState } from "react";

interface ExpandContextType {
  expand: boolean;
  setExpand: React.Dispatch<React.SetStateAction<boolean>>;
}

const INITIAL_STATE = {
  expand: true,
  setExpand: () => {},
};

export const ExpandContext = createContext<ExpandContextType>(INITIAL_STATE);

const ExpandContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [expand, setExpand] = useState<boolean>(INITIAL_STATE.expand);

  return (
    <ExpandContext.Provider value={{ expand, setExpand }}>
      {children}
    </ExpandContext.Provider>
  );
};

export default ExpandContextProvider;

export const useExpandContext = () => {
  return useContext(ExpandContext);
};
