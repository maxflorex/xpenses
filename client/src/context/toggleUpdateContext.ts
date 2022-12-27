import { createContext } from "react";

interface Props {
    children: React.ReactNode;
}

export const Context = createContext(<any>null);

