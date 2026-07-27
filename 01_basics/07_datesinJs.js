// Dates

let myDate = new Date()
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreateData = new Date(2026,6,27)
let myCreateData = new Date("07-27-2026")
// console.log(myCreateData.toDateString());
// console.log(myCreateData.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreateData.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());
console.log(newDate.toLocaleString(`default`,{weekday:"long"}));