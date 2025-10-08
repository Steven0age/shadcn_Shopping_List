import { nextFreeID } from "@/utils/itemsUtils";
import { ShoppingItem } from "../types/ShoppingItem";

export type shoppingListReducerState = ShoppingItem[];

export type shoppingListReducerAction = {
  type: "ADD_ITEM" | "DELETE_ITEM" | "UPDATE_ITEM";
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
    case "UPDATE_ITEM": {
      const actionItemCopy = { ...action.item, checked: !action.item.checked };

      updatedItems = currentItems.map((item) =>
        item.id === action.item.id ? actionItemCopy : item
      );

      break;
    }

    default: {
      updatedItems = currentItems;
    }
  }
  localStorage.setItem("shoppingList", JSON.stringify(updatedItems));
  return updatedItems;
}
