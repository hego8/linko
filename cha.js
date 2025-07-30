const products = [
  { id: 1, name: "Laptop", price: 1200, category: "Electronics", inStock: true, discount: 10 },
  { id: 2, name: "Shirt", price: 40, category: "Clothing", inStock: false, discount: 0 },
  { id: 3, name: "Phone", price: 900, category: "Electronics", inStock: true, discount: 25 },
  { id: 4, name: "Book", price: 20, category: "Books", inStock: true, discount: 5 },
  { id: 5, name: "Sneakers", price: 100, category: "Clothing", inStock: true, discount: 30 }
];

let mapProd = products.map(product => {return `Name:${product.name} with Price $${product.price} in Category ${product.category} and Stock State ${product.inStock}...`});
console.log(mapProd);
//filter by cat,availabe,sort price highli discount
let filtProd = products.filter(product => product.category === );
console.log(filtProd);

