"use strict";
// // // Exercise-16   
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
// Step 1 Found Bigger Table 
let guest = ["Zia Khan", "Jahanzaib Tayyab", "Kamran", "Ali Phool", "Usama"
];
// Step 1 Message inviting only two people
console.log(`I can invite only two Persons for dinner`);
// Step 2 Message for those who you cancelled
while (guest.length > 2) {
    let removguest = guest.pop();
    console.log(`Sorry ${removguest} I cannot Invite you to Dinner! `);
}
// Step 3 Message to remaining 2 Guest
guest.forEach((gueststring) => console.log(`Dear ${guest} You are Invited`));
