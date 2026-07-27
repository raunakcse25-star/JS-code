//singleton

//object literals
const mysym = Symbol("key1")
const JsUser = {
    name : "Raunak",
    "full name": "Raunak",
    [mysym]: "mykey1",
    age:  19,
    city: "FBD",
    email:"raunak@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday" ,"Sunday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser.name)
// console.log(JsUser[mysym])

JsUser.email = "raunaksahni@gmail.com"

// Object.freeze(JsUser)
JsUser.email = "raunaksahni@microsoft.com"
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello-Raunak");
}
// console.log(JsUser.greeting());
// console.log(JsUser.greeting);

JsUser.greetingTwo = function(){
    console.log(`Hello-JS-User,${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
