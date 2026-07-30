const user= {
    username: "Raunak",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function(){
        //console.log("Got details from database");
        // console.log(`Username:${this.username}`);
        console.log(this)
    }
}



// console.log(user.username)
// console.log(user.getUserDetails())
//  console.log(this)


function User(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    globalThis.greeting = function(){
        console.log(`Welcome! ${this.unername}`)
    }
    // return this
}

const userOne = new User("Raunak",12,true)
const userTwo = new User("Sourav",22,false)
console.log(userOne.constructor);
// console.log(userTwo);

