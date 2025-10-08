import { useContext } from "react";
import SingleItem from "../SingleItem/SingleItem";
import { ShoppingListContext } from "@/context/shoppingListContext";

export default function ItemsList() {
  const { currentItems } = useContext(ShoppingListContext);
  const { dispatchCurrentItems } = useContext(ShoppingListContext);
  return (
    <div>
      {currentItems.map((item) => {
        if (!item.checked) {
          return (
            <SingleItem
              key={item.id}
              id={item.id}
              item={item.item}
              quantity={item.quantity}
              checked={item.checked}
              clickHandler={() => {
                dispatchCurrentItems({
                  item: {
                    id: item.id,
                    item: item.item,
                    quantity: Number(item.quantity),
                    checked: item.checked,
                  },
                  type: "DELETE_ITEM",
                });
              }}
              checkedHandler={() => {
                dispatchCurrentItems({
                  item: {
                    id: item.id,
                    item: item.item,
                    quantity: Number(item.quantity),
                    checked: item.checked,
                  },
                  type: "UPDATE_ITEM",
                });
              }}
            />
          );
        }
      })}

      {currentItems.map((item) => {
        if (item.checked) {
          return (
            <SingleItem
              key={item.id}
              id={item.id}
              item={item.item}
              quantity={item.quantity}
              checked={item.checked}
              clickHandler={() => {
                dispatchCurrentItems({
                  item: {
                    id: item.id,
                    item: item.item,
                    quantity: Number(item.quantity),
                    checked: item.checked,
                  },
                  type: "DELETE_ITEM",
                });
              }}
              checkedHandler={() => {
                dispatchCurrentItems({
                  item: {
                    id: item.id,
                    item: item.item,
                    quantity: Number(item.quantity),
                    checked: item.checked,
                  },
                  type: "UPDATE_ITEM",
                });
              }}
            />
          );
        }
      })}
    </div>
  );
}
