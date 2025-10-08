import ItemsList from "./components/ItemsList/ItemsList.tsx";
import InputSection from "./components/InputSection/InputSection";
import { useReducer } from "react";
import shoppingListReducer from "./hooks/shoppingListReducer.ts";
import { fetchItemsFromLs } from "./utils/itemsUtils.ts";
import { ShoppingListContext } from "./context/shoppingListContext.ts";
import { Toaster } from "sonner";

function App() {
  const [currentItems, dispatchCurrentItems] = useReducer(
    shoppingListReducer,
    [],
    fetchItemsFromLs
  );

  return (
    <ShoppingListContext.Provider
      value={{ currentItems, dispatchCurrentItems }}
    >
      <>
        <div className="mx-auto pt-16 px-4 w-full max-w-[512px] h-svh flex flex-col">
          <div className="">
            <h1 className="text-3xl text-center font-semibold mb-10">
              Einkaufsliste
            </h1>
            <InputSection />
          </div>
          <div className="overflow-y-auto">
            <ItemsList />
          </div>
        </div>
        <Toaster richColors />
      </>
    </ShoppingListContext.Provider>
  );
}

export default App;
