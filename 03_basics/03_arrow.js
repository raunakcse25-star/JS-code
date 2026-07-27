const user = {
    username: "Raunak",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome the to website`);
        console.log(this);
    }

}
user.welcomeMessage()
user.username = "Sam"
user.welcomeMessage()
console.log(this);

function chai(){
    let username = "Raunak"
    console.log(this.username);
}
chai()


// const chai = () => {
//     let username = "Raunak"
//     console.log(this);
// }
// chai()


// const addTwo = (num1, num2) =>{
//     return num1 + num2
// }


 const addTwo = (num1,num2) =>  num1 + num2
//  const addTwo = (num1,num2) =>  (num1 + num2)

//  const addTwo = (num1,num2) =>  ({username: "Raunak"})
 

 console.log(addTwo(2,4));



