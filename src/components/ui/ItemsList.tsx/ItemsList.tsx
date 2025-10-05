import SingleItem from "../SingleItem/SingleItem";

export default function ItemsList() {
  return (
    <div>
      <SingleItem item={"Kartoffeln"} quantity={2} checked={true} />
      <SingleItem item={"Kartoffeln"} quantity={2} checked={false} />
    </div>
  );
}
