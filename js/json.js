// JavaScript Object Notation
// JSON
const user = { id: 11, name: "Nurul Ahsan", Job: "Web Dev" };
const stringify = JSON.stringify(user);
console.log(stringify);
console.log(user);

const shop = {
  name: "Alia Store",
  address: "Randir Road",
  profit: 100,
  owner: {
    name: "Muhammad Nurul Ahsan",
    profession: "CEO",
  },
  products: ["Laptop", "Mobile", "Cover"],
  isExpensive: false,
};
const shopStringified = JSON.stringify(shop);
console.log(shop);
console.log(shopStringified);
const converted = JSON.parse(shopStringified);
console.log(converted);
