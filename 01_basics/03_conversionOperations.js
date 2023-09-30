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


