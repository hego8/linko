const orders = [
  { id: 101, customer: "Ali", total: 300, items: 5, delivered: true, vip: true },
  { id: 102, customer: "Sara", total: 80, items: 2, delivered: false, vip: false },
  { id: 103, customer: "John", total: 500, items: 10, delivered: true, vip: true },
  { id: 104, customer: "Laila", total: 150, items: 3, delivered: true, vip: false },
  { id: 105, customer: "Omar", total: 1000, items: 12, delivered: true, vip: true }
];
const users = [
  {
    id: 1,
    name: "Ali",
    age: 25,
    discount: true,
    active: true,
    premium: true,
    purchases: [
      { item: "Laptop", amount: 1200 },
      { item: "Mouse", amount: 40 }
    ],
    score: 80,
    orders: [
      { id: 101, total: 300, delivered: true },
      { id: 102, total: 150, delivered: false }
    ]
  },
  {
    id: 2,
    name: "Sara",
    age: 30,
    discount: false,
    active: false,
    premium: false,
    purchases: [
      { item: "Phone", amount: 800 }
    ],
    score: 95,
    orders: [
      { id: 103, total: 80, delivered: true }
    ]
  },
  {
    id: 3,
    name: "John",
    age: 17,
    discount: true,
    active: true,
    premium: false,
    purchases: [
      { item: "Tablet", amount: 600 },
      { item: "Keyboard", amount: 70 }
    ],
    score: 70,
    orders: [
      { id: 104, total: 200, delivered: true },
      { id: 105, total: 90, delivered: true }
    ]
  },
  {
    id: 4,
    name: "Laila",
    age: 28,
    discount: false,
    active: true,
    premium: true,
    purchases: [
      { item: "Monitor", amount: 300 }
    ],
    score: 100,
    orders: [
      { id: 106, total: 150, delivered: false },
      { id: 107, total: 1000, delivered: true }
    ]
  }
];

//--------------------------------------------
//Challenge 1 

let upper = users.map(user => `${user.name}`.toUpperCase());
console.log(upper);

//Challenge 2 

let filt = users.filter(user => user.active);
console.log(filt); //we can also return just thier names but you can tell me how?

//Challenge 3

let fin = users.find(user => user.vip || ! user.vip);
console.log(fin)

//Challenge 4

//we will use the some() function to check if anyone has the condition 

let dis = users.some(user => user.discount);
console.log(dis);

//Challenge 5

let old = users.every(user => user.age >= 18);
console.log(old);
