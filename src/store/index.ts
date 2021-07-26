import { createContext, useContext } from "react";
import RootStore from "./RootStore";

export const RootContext = createContext<RootStore>({} as RootStore);
export const RootProvider = RootContext.Provider;

export const useStore = () => useContext(RootContext);
