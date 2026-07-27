// var c= 300
let a= 300
if (true){
    let a = 10
    const b = 20
// console.log(b);
// console.log("Inner:",a);
}
// console.log(a);
// console.log(b);
// console.log(a);

//DOM ==> Document Object Model

function one(){
    const username = "Raunak"
    function two (){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
// one()

if(true){
    const username = "Raunak"
    if(username === "Raunak") {
        const website = " Youtube"
        // console.log(username + website);
    }
    // console.log(website);

}

// console.log(username)

// ++++++++++ interesting ++++++++++

console.log(addone(5));
function addone(num){
    return num +1
}


// (addTwo(5));
const addTwo= function(num){
    return num + 2
}
