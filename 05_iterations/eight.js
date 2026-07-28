const muNums = [1,2,3,4]

// const myTotal = muNums.reduce(function (acc,currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)
// console.log(myTotal);


// const myTotal = muNums.reduce(function (acc,currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 3)
// console.log(myTotal);


const myTotal = muNums.reduce((acc,curr) => acc+curr,0)
// console.log(myTotal)

const shoppinfCart = [
    {
        itemName: "Js Course",
        price:1299
    },
    {
        itemName: "AI & ML",
        price:999
    },
    {
        itemName: "DS",
        price:1399
    }
]

const priceToPay = shoppinfCart.reduce((acc,item)=> acc +  item.price,0)

console.log(priceToPay);
