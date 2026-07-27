const tinderUser = new Object()
// console.log(tinderUser);
tinderUser.id = "123idabc"
tinderUser.name = "Sonam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "sonam@gmail.com",
    fullname: {
        userfullname:{
            firstname:"Raunak",
            lastname:"Sahni"
        }
    }
}
//console.log(regularUser.fullname.userfullname.firstname)

const obj1  = {1: "A",2:"B"}
const obj2  = {3: "K",4: "W"}
const obj3  = {5: "K",6: "W"}
const obj4  = {7: "K",8: "W"}
// const obj3 = {obj1,obj2}
//  const obj5 = Object.assign({},obj1,obj2,obj3,obj4)
// console.log(obj5)
const obj5 = {...obj1,...obj2,...obj3,...obj4}
console.log(obj5);

// user[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(tinderUser.hasOwnProperty('isLogged'));