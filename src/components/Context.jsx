import { createContext } from "react";

// Создание контекста приложения
export const DataContext = createContext({
    bodyNoScroll: false,
    setBodyNoScroll: () => {},
});