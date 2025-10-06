import ItemsList from "./components/ItemsList.tsx/ItemsList";
import InputSection from "./components/InputSection/InputSection";

function App() {
  return (
    <>
      <div className="mx-auto mt-16 px-4 w-full max-w-[512px]">
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
