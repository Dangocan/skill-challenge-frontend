import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

export type TContext = {
  contextValues: Array<{ name: string; values: string }>;
  setContextValues: Dispatch<
    SetStateAction<Array<{ name: string; values: string }>>
  >;
};

export const Global = createContext<TContext>({
  contextValues: [{}],
} as TContext);

function GlobalContext({ children }: any) {
  const [contextValues, setContextValues] = useState([{}] as Array<{
    name: string;
    values: string;
  }>);

  return (
    <Global.Provider
      value={{
        contextValues: contextValues,
        setContextValues,
      }}
    >
      {children}
    </Global.Provider>
  );
}

export default GlobalContext;
