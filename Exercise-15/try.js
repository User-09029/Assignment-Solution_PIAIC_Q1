"use strict";
// Exercise-15   
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
Object.defineProperty(exports, "__esModule", { value: true });
exports.guest = void 0;
let guest = [
    "Ali", "Zia Khan", "Jahanzaib Tayyab", "Kamran", "Elon musk", "Allama Iqbal"
];
exports.guest = guest;
// STep 1 :Person who can't come
console.log(`${guest[0]} can't come !`);
// Replace with New Guest
let newguest = "Ahmad";
guest[0] = (newguest);
if (guest[0] !== "come") {
    console.log(`Our New Guest is Mr.${guest[0]}`);
}
guest.forEach((guest) => {
    console.log(`Dear Mr.${guest}, You are Invited For Dinner Tonight`);
});
