function deepEqual(obj1, obj2) {

    let c = Object.entries(obj1)
        let v = Object.entries(obj2)

        

}
const objA = {
  name: "Alice",
  age: 25,
  hobbies: ["reading", "gaming"],
  address: {
    city: "Wonderland",
    zip: 12345,
  },
};

const objB = {
  name: "Alice",
  age: 25,
  hobbies: ["reading", "gaming"],
  address: {
    city: "Wonderland",
    zip: 12345,
  },
};

const objC = {
  name: "Alice",
  age: 25,
  hobbies: ["reading", "gaming", "chess"],
  address: {
    city: "Wonderland",
    zip: 12345,
  },
};

console.log(deepEqual(objA, objB)); // true
console.log(deepEqual(objA, objC)); // false