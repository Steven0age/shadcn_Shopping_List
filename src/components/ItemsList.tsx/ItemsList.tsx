import SingleItem from "../SingleItem/SingleItem";

export default function ItemsList() {
  return (
    <div>
      <SingleItem id={1} item={"Kartoffeln"} quantity={2} checked={true} />
      <SingleItem id={2} item={"Apfel"} quantity={2} checked={false} />
    </div>
  );
}
