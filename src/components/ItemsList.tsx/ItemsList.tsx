import { useContext } from "react";
import SingleItem from "../SingleItem/SingleItem";
import { ShoppingListContext } from "@/context/shoppingListContext";

export default function ItemsList() {
  const { currentItems } = useContext(ShoppingListContext);
  return (
    <div>
      {currentItems.map((item) => {
        return (
          <SingleItem
            key={item.id}
            id={item.id}
            item={item.item}
            quantity={item.quantity}
            checked={item.checked}
          />
        );
      })}
    </div>
  );
}
