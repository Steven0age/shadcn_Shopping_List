import { nextFreeID } from "@/utils/itemsUtils";
import { ShoppingItem } from "../types/ShoppingItem";
import { toast } from "sonner";

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
  let validAction = true;

  switch (action.type) {
    case "ADD_ITEM": {
      if (
        currentItems.find(
          (item) => item.item.toLowerCase() === action.item.item.toLowerCase()
        )
      ) {
        validAction = false;
        toast.error("Hinzufügen fehlgeschlagen", {
          description: "Das Produkt ist bereits in der Einkaufsliste vorhanden",
        });
        updatedItems = currentItems;
      } else {
        action.item.id = nextFreeID(currentItems);
        updatedItems = [...currentItems, action.item];
      }
      break;
    }
    case "DELETE_ITEM": {
      updatedItems = currentItems.filter((item) => item.id !== action.item.id);
      toast("Produkt gelöscht", {
        description: `${action.item.item} wurde aus der Einkaufsliste entfernt`,
      });
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
  if (validAction) {
    localStorage.setItem("shoppingList", JSON.stringify(updatedItems));
  }
  return updatedItems;
}
