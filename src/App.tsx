import ItemsList from "./components/ItemsList/ItemsList.tsx";
import InputSection from "./components/InputSection/InputSection";
import { useReducer } from "react";
import shoppingListReducer from "./hooks/shoppingListReducer.ts";
import { fetchItemsFromLs } from "./utils/itemsUtils.ts";
import { ShoppingListContext } from "./context/shoppingListContext.ts";

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
        <div className="mx-auto mt-16 px-4 w-full max-w-[512px]">
          <h1 className="text-3xl text-center font-semibold mb-10">
            Einkaufsliste
          </h1>
          <InputSection />
          <ItemsList />
        </div>
      </>
    </ShoppingListContext.Provider>
  );
}

export default App;
