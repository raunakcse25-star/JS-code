//JEC => JAVASCRIPT EXECUTION CONTEXT
// 1. GLOBAL EXECUTION CONTEXT
// 2. FUNCTIONAL EXECUTION CONTEXT
// 3. EVAL EXECUTION CONTEXT


// Memory Creation Phase
// Execution Phase

let val1 = 10
let val2 = 5
function addNum(num1 ,num2){
    let total = num1 + num2
    return total

}
let return1 = addNum(val1,val2)
let return2 = addNum(10,2)

//1. Global Execution => this
//2. Memory Phase:
    // val1 -> undefined
    // val1 -> undefined
    // addNum -> definition
    // result -> undefined
    // result2 -> undefined

//3. Execution Phase
//  val<--10
//  val<--5
//  addNum --> newVariable environment + Execution thread  ==> Memory phase -> val1 -->undefined,val2 --> undefined, total ---> undefined.

//Execution Context
//num1 --> 10
//num2 --> 5
//total --> 15