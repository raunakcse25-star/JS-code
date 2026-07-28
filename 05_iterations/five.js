const coding = ["JS","java","C++","ruby","Python"]

coding.forEach( function (item) {
    // console.log(item);
} )

coding.forEach( (item) => {
    // console.log(item);
} )

// function printME(item){
//     console.log(item);
// }
// coding.forEach(printME)

coding.forEach( (item, index,arr) => {
    // console.log(item,index,arr);
})

const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: "JS"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
    {
        languageName: "Java",
        languageFileName: "Java"
    }
]


myCoding.forEach((item)=>{

    console.log(item.languageName);
    // console.log(item.languageFileName);
    })

