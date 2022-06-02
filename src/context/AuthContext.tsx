import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import { IUser } from "../interfaces/IUser";

export type TContext = {
  user: IUser;
  authToken: string;
  setContextUserValue: Dispatch<SetStateAction<IUser>>;
  setContextAuthTokenValues: Dispatch<SetStateAction<string>>;
};

export const Auth = createContext<TContext>({} as TContext);

function AuthContextProvider({ children }: any) {
  const [user, setUser] = useState({} as IUser);
  const [authToken, setAuthToken] = useState("");

  return (
    <Auth.Provider
      value={{
        user: user,
        authToken: authToken,
        setContextUserValue: setUser,
        setContextAuthTokenValues: setAuthToken,
      }}
    >
      {children}
    </Auth.Provider>
  );
}

export default AuthContextProvider;
