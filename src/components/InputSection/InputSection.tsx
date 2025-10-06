import { useContext } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { ShoppingListContext } from "@/context/shoppingListContext";

export default function InputSection() {
  const { dispatchCurrentItems } = useContext(ShoppingListContext);
  return (
    <div className="flex flex-col gap-2 mb-6">
      <div className="grid grid-cols-[auto_60px] gap-2">
        <Input className="text-sm" placeholder="Produkt eingeben..."></Input>
        <Input className="text-sm" type="number"></Input>
      </div>
      <Button
        onClick={() => {
          //console.log("Button clicked");
          //console.log("currentList =", currentList);
          dispatchCurrentItems({
            item: { id: -1, item: "Apfel", quantity: 3, checked: false },
            type: "ADD_ITEM",
          });
          //console.log("currentList nach dem Reducer =", currentList);
        }}
      >
        Eintrag Hinzufügen
      </Button>
    </div>
  );
}
