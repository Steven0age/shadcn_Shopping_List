import { createContext } from "react";

export const ShoppingListContext = createContext({
  currentList: [],
  dispatchCurrentList: () => {},
});
