
//In this program learning the retrieval of Strings as elements by separating it using array

let str = "Helloo World";
let arr=(str.trim().split(" "));
console.log(`The length of ${arr[1]} is`, arr[1].length);
console.log(`The length of ${arr[0]} is`, arr[0].length);

/* O/P1: The length of World is 5
The length of Helloo is 6 */

//********************************************************************************************

let str2 = "   fly me   to   the moon  ";
let res=str2.trim().replace(/\s+/g," ").split(" ");
console.log(res);
//console.log(`The length of ${arr2[4]} is`,arr2[4].length);
console.log(`The length of ${res[4]} is:`, res[4].length);
console.log(`The length of ${res[3]} is:`, res[3].length);

/* O/P2: The length of moon is: 4
The length of the is: 3 */

//********************************************************************************** 
