import { useContext } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { ShoppingListContext } from "@/context/shoppingListContext";
import useInputs from "@/hooks/useInputs";

export default function InputSection() {
  const { dispatchCurrentItems } = useContext(ShoppingListContext);
  const itemInput = useInputs();
  const itemQuantity = useInputs();

  return (
    <div className="flex flex-col gap-2 mb-6">
      <div className="grid grid-cols-[auto_60px] gap-2">
        <Input
          onChange={itemInput.handleInputChange}
          className="text-sm"
          placeholder="Produkt eingeben..."
          value={itemInput.value}
        ></Input>
        <Input
          onChange={itemQuantity.handleInputChange}
          className="text-sm"
          type="number"
          value={itemQuantity.value}
        ></Input>
      </div>
      <Button
        onClick={() => {
          dispatchCurrentItems({
            item: {
              id: -1,
              item: itemInput.value,
              quantity: Number(itemQuantity.value),
              checked: false,
            },
            type: "ADD_ITEM",
          });
        }}
      >
        Eintrag Hinzufügen
      </Button>
    </div>
  );
}
