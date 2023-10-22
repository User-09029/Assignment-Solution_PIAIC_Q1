"use strict";
// Exercise 11 - Names: Store your friends names in a array. Print each in the list, one at a time.
Object.defineProperty(exports, "__esModule", { value: true });
let names = ['ali', 'ahmad', 'usama'];
console.log(names[1]);
console.log(names[0]);
console.log(names[2]);
for (let name of names) {
    // Print Personalized Message for every friend
    console.log(`Good Morning ${name}. Hope You are great!`);
}
