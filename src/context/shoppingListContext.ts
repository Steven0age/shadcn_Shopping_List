import { shoppingListReducerAction } from "@/hooks/shoppingListReducer";
import { ShoppingItem } from "@/types/ShoppingItem";
import { createContext } from "react";

export const ShoppingListContext = createContext<{
  currentItems: ShoppingItem[];
  dispatchCurrentItems: React.Dispatch<shoppingListReducerAction>;
}>({
  currentItems: [],
  dispatchCurrentItems: () => {},
});
