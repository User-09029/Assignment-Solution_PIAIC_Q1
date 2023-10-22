"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
let travelDestination = ["Pakistan", "Australia", "Saudia", "UAE", "USA"];
// • Print your array in its original order.
console.log(`\nOriginal Order Travel destinations are: ${travelDestination}.`);
// • Print your array in alphabetical order without modifying the actual list.
console.log(`\nAlphabetically Sorted:${[...travelDestination].sort()}`);
// • Show that your array is still in its original order by printing it.
console.log(`\nOriginal Order is : ${travelDestination}`);
// • Print your array in reverse alphabetical order without changing the order of the original list.
console.log(`\nAlphabetically Reverse Sorted:${[...travelDestination].sort().reverse()}`);
// • Show that your array is still in its original order by printing it again.
console.log(`\nOriginal Order is : ${travelDestination}`);
// • Reverse the order of your list. Print the array to show that its order has changed.
console.log(`\nReverse of Travel Destination: ${[...travelDestination].reverse()}`);
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log(`\nOriginal Order is : ${travelDestination}`);
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log(`\nAlpabetical order Travel Destination: ${[...travelDestination].sort()}`);
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log(`\n Reverse Alpabetical order Travel Destination: ${[...travelDestination].sort().reverse()}`);
