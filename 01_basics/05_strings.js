const name = "Raunak"
const repoCount = 50
// console.log(name + repoCount + " Value")

// console.log(`Hello my name is ${name} and my repoCound is ${repoCount}`);

const gameName = new String('Raunak-Sahni')
// console.log(gamenName[1])
// console.log(gamenName.length);
// console.log(gamenName.toUpperCase());
// console.log(gamenName.__proto__);
// console.log(gamenName.charAt(3));
// console.log(gamenName.indexOf('i'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-10,-9)
console.log(anotherString);

const newStringOne = "  Raunak   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://raunak.com/raunak%10sahni"

console.log(url.replace('%10', '-'));
console.log(url.includes('raunak'));
console.log(gameName.split('-'));