// // Exercise-16   
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.


// Step 1 Found Bigger Table 
let guest:Array <string> = [
    "Zia Khan", "Jahanzaib Tayyab", "Kamran"
]
// Step 1 Found Bigger Table 
guest.forEach((guest:string)=>{
    console.log(`Dear Mr.${guest},We Foud a bigger Dinner Table!`)
}   )


for (let guest1 of guest){
    console.log(`Dear Mr.${guest} we found a bigger table.`)}
// Step 2 Add New Guest on start
let firstGuest:string= "Ali.Phool";
guest.unshift(firstGuest)
console.log(`${guest}`)
// Step 3 : Add guest in middle 
let guestinmiddle:string = "Mian Ahmad"
let middleindex:number = Math.floor(guest.length/2)
guest.splice(middleindex,0,guestinmiddle)
console.log(guest)

// Step 4 : Add Guest in last 
let guestlast : string = "Usama"
guest.push(guestlast)
console.log(guest)
for(let guest1 of guest){
    console.log(`Dear ${guest}.You are invited for Dinner`)
}