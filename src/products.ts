interface Product {
  name: string;
  price: number;
}

const products: Product[] = [
  { name: "ExampleProduct1", price: 100 },
  { name: "ExampleProduct2", price: 200 },
];

function calcAverageProductPrice(prods: Product[]): number {
  if (prods.length === 0) return 0;

  let total = prods.reduce((acc, product) => acc + product.price, 0);
  return total / prods.length;
}

const averagePrice = calcAverageProductPrice(products);
console.log(averagePrice);

export { Product, products, calcAverageProductPrice };
