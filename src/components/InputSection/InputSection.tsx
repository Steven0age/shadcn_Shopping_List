import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { toast } from "sonner";

export default function InputSection() {
  return (
    <div className="flex flex-col gap-2 mb-6">
      <div className="grid grid-cols-[auto_60px] gap-2">
        <Input className="text-sm" placeholder="Produkt eingeben..."></Input>
        <Input className="text-sm" type="number"></Input>
      </div>
      <Button
        onClick={() =>
          toast("Geklickt", {
            description: "Button wurde angeklickt",
          })
        }
      >
        Eintrag Hinzufügen
      </Button>
    </div>
  );
}
