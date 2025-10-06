import { nextFreeID } from "@/utils/itemsUtils";
import { ShoppingItem } from "../types/ShoppingItem";

type shoppingListReducerState = ShoppingItem[];

type shoppingListReducerAction = {
  type: "ADD_ITEM" | "DELETE_ITEM";
  item: ShoppingItem;
};
export default function shoppingListReducer(
  currentItems: shoppingListReducerState,
  action: shoppingListReducerAction
) {
  let updatedItems: shoppingListReducerState;

  switch (action.type) {
    case "ADD_ITEM": {
      action.item.id = nextFreeID(currentItems);
      updatedItems = [...currentItems, action.item];
      break;
    }
    case "DELETE_ITEM": {
      updatedItems = currentItems.filter((item) => item.id !== action.item.id);
      break;
    }
    default: {
      updatedItems = currentItems;
    }
  }
  localStorage.setItem("shoppingList", JSON.stringify(updatedItems));
  return updatedItems;
}
