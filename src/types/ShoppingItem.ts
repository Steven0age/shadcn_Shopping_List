export type ShoppingItem = {
  id: number;
  item: string;
  quantity: number;
  checked: boolean;
  clickHandler?: VoidFunction;
};
