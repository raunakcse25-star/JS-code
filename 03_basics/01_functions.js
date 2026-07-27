// console.log("R")
// console.log("A")
// console.log("U")
// console.log("N")
// console.log("A")
// console.log("K")

// function sayName(){
// console.log("R");
// console.log("A");
// console.log("U");
// console.log("N");
// console.log("A");
// console.log("K");
// }
// sayName()

// function addTwoNumbers(number1,number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1,number2){
    // let result = number1 + number2
    // return result

    return number1 + number2
}

const result = addTwoNumbers(3,5)
// console.log("Result:", result);

// function loginUserMessage(username  = "Sam"){
//     if(!username){

//         console.log("Please enter a username")
//         return
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("Raunak"));
// console.log(loginUserMessage("Raunak"));

function calculateCartPrice(val1,val2,...num1){
return num1
}
// console.log(calculateCartPrice(200,400,500,600,700,900))

const user = {
    username: "Raunak",
    price:199

}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

// handleObject ({
//     username: "Ekta",
//     price:399
// })

const myNewArray =[200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray))