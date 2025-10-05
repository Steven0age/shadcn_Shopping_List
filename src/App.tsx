import ItemsList from "./components/ui/ItemsList.tsx/ItemsList";
import InputSection from "./components/InputSection/InputSection";

function App() {
  return (
    <>
      <div className="mt-16 px-4 w-full">
        <h1 className="text-3xl text-center font-semibold mb-10">
          Einkaufsliste
        </h1>
        <InputSection />
        <ItemsList />
      </div>
    </>
  );
}

export default App;
