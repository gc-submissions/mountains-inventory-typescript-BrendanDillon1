import { Product } from "../src/products";

interface InventoryItem {
  product: Product;
  quantity: number;
}

const inventory: InventoryItem[] = [
  { product: { name: "motor", price: 10.0 }, quantity: 10 },
  { product: { name: "sensor", price: 12.5 }, quantity: 4 },
  { product: { name: "LED", price: 1.0 }, quantity: 20 },
];

function calcInventoryValue(items: InventoryItem[]): number {
  if (items.length === 0) return 0;

  return items.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );
}

const totalInventoryValue = calcInventoryValue(inventory);
console.log(totalInventoryValue);

export { calcInventoryValue, InventoryItem, inventory };
