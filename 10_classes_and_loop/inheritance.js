class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class teacher extends User{
constructor(username,email,password)
{
    super(username)
    this.email = email
    this.password = password
}

addCourse(){
    console.log(`A new course was added by ${this.username}`);
}
}


const chai = new teacher("Chai","Chai@teacher.com","123")

chai.logMe()

const masalachai = new User("massalaChai")
masalachai.logMe()

console.log(chai instanceof User);

