let score = 33
let score1="33abc"

 console.log(typeof score);
 console.log(typeof(score));

/* gives output NaN:not a  number 
*/

let valueInNumber = Number(score);
console.log(valueInNumber);



/* if thers a numerical value inside a string it can be converted into number data type 
*/

let valueInNumber = Number(score)
console.log(valueInNumber);
console.log(typeof valueInNumber);

 /*if there is a mixture of number and string value inside a string it will throw an error NaN
 */

let valueInNumber = Number(score1);
console.log(valueInNumber);


// ************************* Operations *****************************

let value = 3;
let negValue = -value;
// console.log(negValue);

console.log(2+2) //addition
console.log(2-2) //subtraction
console.log(2*2) //multiplication
console.log(2/2) //division
console.log(2**2) //power
console.log(2%2) //modulo

let str1="Hello"
let str2="Prince"

let str3=str1 + str2
console.log(str3);

console.log(1+"2");
console.log("1"+2);
console.log("1"+2+2);
console.log(2+2+"2");

console.log(true);
console.log(+true);
console.log(+"");

let gameCounter = 100;
gameCounter++;
++gameCounter
console.log(gameCounter);
console.log(gameCounter);

//PostFix Increment
/*If used postfix, with operator after operand (for example, x++), 
the increment operator increments and returns the value before incrementing.
*/

let x = 3;
const y = x++;
console.log(y);
console.log(x);
//o/p x is 4; y is 3


//Prefix Increment
/*If used prefix, with operator before operand (for example, ++x),
 the increment operator increments and returns the value after incrementing.

*/

let x = 3;
const y = ++x;
console.log(y);
console.log(x);

//o/p x is 4; y is 4



/* A number can be converted into string
*/

let valueInNumber = String(score)
console.log(valueInNumber);
console.log(typeof valueInNumber);



/* A number can be converted into a boolean value*/

let isLoggedIn=1;
let booleanIsLoggedIn=Boolean(isLoggedIn);
console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);



/* When An empty string is converted into boolean it gives false    */
let isLoggedIn="";
let booleanIsLoggedIn=Boolean(isLoggedIn);
console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);


/*When a string is converted to boolean it gives true*/
let isLoggedIn="Prince";
let booleanIsLoggedIn=Boolean(isLoggedIn);
console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);


