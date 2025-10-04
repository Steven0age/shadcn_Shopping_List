import { Button } from "./components/ui/button";
import { Toaster } from "./components/ui/sonner";
import { toast } from "sonner";

function App() {
  return (
    <>
      <h1 className="bg-blue-600 text-white text-3xl font-bold">Hallo Welt</h1>
      <Button
        className="mt-10"
        onClick={() =>
          toast("Geklickt", {
            description: "Button wurde angeklickt",
          })
        }
      >
        Es klappt
      </Button>
      <Toaster />
    </>
  );
}

export default App;
