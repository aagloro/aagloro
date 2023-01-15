/* Array of ages 3, 9, 23, 64, 2, 8, 28, 93 */ 
console.log("Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93")
 let ages = new Array(3, 9, 23, 64, 2, 8, 28, 93); 
 const first = ages[0];
 console.log("Programmatically subtract the value of the first element in the array from the value in the last element of the array");
 const last = ages [ages.length - 1];
 
 console.log(last - first);

 /* add numbers 7, 14 to array  */
console.log("Add a new age to your array and repeat the step above to ensure it is dynamic");
  ages.push(7, 14);
  console.log(ages);

/* take the average of the array*/
console.log("Use a loop to iterate through the array and calculate the average age")
  const average1 = ages.reduce((a,b) => a + b, 0 / ages.length);
  console.log(average1);

/* Create an array called names that contains the following values: 
‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’. */
console.log("Create an array called names that contains the following values: Sam, Tommy, Tim, Sally, Buck, Bob.");

let names = new Array("Sam", "Tommy", "Tim", "Sally", "Buck", "Bob");
console.log(names);

/*Use a loop to iterate through the array and calculate the average number of 
letters per name*/

console.log("Use a loop to iterate through the array and calculate the average number of letters per name");
let sum = 0;
for(let i= 0; i < names.length; i++)
{

    sum += names[i].length;
}
let average = sum/(names.length);

console.log(average);

/*
average without loop

charsSum = 0;
names.forEach( (el) => {
charsSum += el.length;
});

 average = charsSum/names.length;
console.log(average); */


/*Use a loop to iterate through the array again and 
concatenate all the names together, separated by spaces. */

console.log("Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.");
let output = '';
for(let i =0; i < names.length; i++)
{
    output += names[i] + ' ';
}
console.log(output);

/* showing in HTML without loop
let removeComma= (names) => {
	
    document.write (names.join(' '));			// using join() method.
}
removeComma(names);
console.log(names);
*/
/*
How do you access the last element of any array?
*/

console.log("How do you access the last element of any array?");
console.log("there are many ways to get the last element of an array first or find using splice, index 0");
/*
How do you access the first element of any array?

*/
console.log("How do you access the first element of any array?");
console.log("there are many ways to get the first element of an array last or find using slice, index -1");










/*
Create a new array called nameLengths. Write a loop to iterate over the previously 
created names array and add the length of each name to the nameLengths array.
*/

console.log("Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.");



let namesLengths = new Array("Amanda", "Marie", "Kaylee", "MacKenzie", "Casey", "Hope");
for (let i = 0; i < namesLengths.length; i++){
    console.log(namesLengths[i].length);
}



/* Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to 
itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’). 
*/


console.log("Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).");


{const word = 'Hello';
var n = 3;
console.log(`${word.repeat(n)}`);
}



/*
Write a function that takes two parameters, firstName and lastName, and returns a full name. 
The full name should be the first and the last name separated by a space. 
*/


console.log("Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.");

/*
without a function
var firstName = "Amanda";
var lastName = "Agloro";

console.log(firstName + " " + lastName);
*/
function func1(){}
    func1.displayName="Amanda"
function func2(){}
    func2.displayName="Agloro"
    console.log(func1.displayName + " " + func2.displayName);


/*
Write a function that takes an array of numbers and returns true if the sum of all the numbers in the 
array is greater than 100.
*/

console.log("Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.");
var array = [70, 40, 30];
var sum1 = array.reduce(function(a,b){return a + b;
}, 0);

console.log(sum1);



/*
Write a function that takes an array of numbers and returns the average of all the elements in the array.
*/

console.log("Write a function that takes an array of numbers and returns the average of all the elements in the array.");

const ave = array => array.reduce((a, b) => a + b) / array.length;
console.log(ave([1,2,3,4,5]));

/*
Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is 
greater than the average of the elements in the second array.
*/

console.log("Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.");


Array.prototype.sum = function() {
    return this.reduce(function(a, b) {return a+b});
};

var arr = [1, 2, 3, 4, 5];
var ar =(arr.sum() / arr.length)


Array.prototype.sum = function() {
    return this.reduce(function(a, b) {return a+b});
};

var arr2 = [2, 4, 6, 8, 10];
var ar2 = (arr2.sum() / arr2.length)

if (ar > ar2) {
    console.log(arr);
}else{
    console.log(ar);
}



/*
Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and 
returns true if it is hot outside and if moneyInPocket is greater than 10.50.
*/

console.log("Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.");

function willBuyDrink(moneyInPocket) {
    return (moneyInPocket > 10.5);
}
var money = 10.3;
var temp = "isHotOutside"
if(willBuyDrink(money) && (temp)) 

{
    console.log('Will Buy Drink');
    
}else{
    console.log("Won't Buy Drink")
}

/*
Create a function of your own that solves a problem. 

find out the average age of everyone in my family
*/

console.log("Create a function of your own that solves a problem. ");
console.log("What is the average age of my family members?");

const family = array => array.reduce((a, b) => a + b) / array.length;
console.log(family([4, 11, 36, 35, 65, 73, 39, 53]));
