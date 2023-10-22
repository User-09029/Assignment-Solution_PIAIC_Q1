"use strict";
// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
Object.defineProperty(exports, "__esModule", { value: true });
// Define an Array 
let bouqet = {
    name: "Spring Delight",
    price: 250,
    description: "Beautiful arrangemnt of Spring Flowers"
};
// Define an Array 
let bouqets = [];
// Pushing multiple object
console.log(bouqets);
bouqets.push(bouqet);
bouqets.push({ name: "Summerbliss", price: 350, description: "Summer" });
let bouqet3 = {
    name: "Red Rose",
    price: 1500,
    description: "Red Winter beauty"
};
bouqets.push(bouqet3);
// console.log(bouqets)
function displayBouqet(bouqets) {
    for (let i = 0; i < bouqets.length; i++) {
        console.log(bouqets[i].name);
    }
}
