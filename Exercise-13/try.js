"use strict";
// Exercise 13 - Your Own Array of favorite transport to print, I would like to own a Honda motorcycle.
let fav = [];
fav.push(["motorcycle", "Yamaha"]);
fav.push(["Car", "Audi"]);
fav.push(["Bicycle", "Sohrab"]);
// console.log(fav)
fav.forEach(([transport, Brand]) => { console.log(`I would like to own a ${Brand} ${transport}.`); });
