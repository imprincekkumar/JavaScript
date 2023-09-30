//basic comparisons when both the operands are same
console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2==1);
console.log(2!=1);

//comparisons when the operands are diffrent

/*
When two operands of differnt data types are converted,ideally it should give an error as 
it is not possible to compare them,but js compares them by converting the firdt operand in 
number
*/

console.log("2">1);
console.log("02">1);

/* In java script when a null value is compared with any other datatype it first converts itself
into either to "0" or "NaN"
*/

console.log(null>0);//false:as 0!>0
console.log(null==0);//false 
console.log(null>=0);//

//undefined compared with any value gives result as false
console.log(undefined==0);
console.log(undefined>0);
console.log(undefined<0);

//=== strict check:in this comparison the value as well as data type is compared

console.log("2"===2);//false result as string is compred with a number
console.log("2"==2);//true result as == only compares the value

