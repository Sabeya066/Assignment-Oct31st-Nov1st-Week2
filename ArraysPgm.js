
//Implementing the different type of Array methods

let arr = [];
//1)Used push method to add the elements at the end of array
arr.push(30);
console.log("THe first element pushed is:", arr);
arr.push(2, 60, 55, 85, 35);
console.log("After pushing the multiple element in arr is:", arr);

// Used splice method here to add the element at specific index
arr.splice(2, 0, 6);
console.log("Used splice method to push at specific index:", arr);

// Used Splice method here to add multiple elements
arr.splice(3, 0, 66, 77, 88);
console.log("Used splice method to push multiple elements:", arr);

/* O/P: THe first element pushed is: [ 30 ]
After pushing the multiple element in arr is: [ 30, 2, 60, 55, 85, 35 ]
Used splice method to push at specific index: [
  30,  2,  6, 60,
  55, 85, 35
]
Used splice method to push multiple elements: [
  30,  2,  6, 66, 77,
  88, 60, 55, 85, 35
] */


//************************************************************************** 

//2) Used pop method to remove the element from end of array
let removedLast = arr.pop();
console.log(removedLast);
console.log(arr);
/* O/P: 35
[
    30, 2, 6, 66, 77,
    88, 60, 55, 85
] */

//Used splice method to remove from the specific index
let removedFromIndexPos = arr.splice(4, 1);
console.log(removedFromIndexPos);
console.log(arr);
/* O/P:[ 77 ]
[
  30,  2,  6, 66,
  88, 60, 55, 85
] */

//Used splice method to remove multiple elements from the index specified
let multipleRemove = arr.splice(2, 3);
console.log(multipleRemove);
console.log(arr);
/* O/P:[ 6, 66, 88 ]
[ 30, 2, 60, 55, 85 ] */

//**************************************************************************************** 

//3) Used shift method to remove the element from beginning of array
let removeFirst = arr.shift();
console.log(removeFirst);
console.log(arr);
/* O/P:30
[ 2, 60, 55, 85 ] */

//****************************************************************************************

//4) Used unshift method to add elements to the beginning of array
let addElements = arr.unshift("Sabeya", "Js", 120);
console.log(addElements);
console.log(arr);
/* O/P:7
[ 'Sabeya', 'Js', 120, 2, 60, 55, 85 ] */

//***************************************************************************************

//5) Used includes method whichreturn boolean to check if the element exist or not
let isEnabled = arr.includes("Js");
console.log(isEnabled);
// O/P: true

//**************************************************************************************

//6) Used indexOf method to get the element position - Returns Negative if the element is not present
let position = arr.indexOf(55);
console.log(position);
let position2 = arr.indexOf(1234);
console.log(position2);
/* O/P: 5
-1 */

//********************************************************************************************

//7) Used join method to convert the array into String
let arrToStr = arr.join("");
console.log(arrToStr);
// O/P: SabeyaJs1202605585

//********************************************************************************************
//8) Used reverse method to reverse the array -I didn't use split here because my array has String and numbers

let arrRev = arr.reverse();
console.log(arrRev);
// O/P: [ 85, 55, 60, 2, 120, 'Js', 'Sabeya' ]

//********************************************************************************************

let arr2 = [12, 34, 55, 32, 11, 54, 77];
//9) Now used spread operator so that it creates the copy of the array first
// Using sort method to sort the array in asecending order
let sortAsc = [...arr2].sort((a, b) => a - b);
console.log(sortAsc);
/* O/P:[
  11, 12, 32, 34,
  54, 55, 77
] */

//Using sort method to sort the array in descending order
let sortDesc = [...arr2].sort((a, b) => b - a);
console.log(sortDesc);

/* O/P:[
  77, 55, 54, 34,
  32, 12, 11
] */
//********************************************************************************************

//Just for s reference to show that it doesnt mutates the original array
console.log(sortAsc);

/* O/P: [
  11, 12, 32, 34,
  54, 55, 77
] */

//********************************************************************************************
