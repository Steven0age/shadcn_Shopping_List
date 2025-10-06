import { useReducer } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import shoppingListReducer from "@/hooks/shoppingListReducer";

export default function InputSection() {
  const [currentList, dispatchCurrentList] = useReducer(
    shoppingListReducer,
    []
  );

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
          dispatchCurrentList({
            item: { id: 3, item: "Melone", quantity: 3, checked: false },
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
