
//Retrieving the duplicate elements from a given array

let arr = [12, 34, 55, 56, 66, 777, 77, 8, 12, 12, 34];


for (let i = 0; i <= arr.length - 1; i++) {

    for (let j = i + 1; j <= arr.length - 1; j++) {
        if (arr[i] == arr[j])
            console.log(arr[i]);
    }

}

/* Output: 12
12
34
12  It printed the duplicated values repeatedly so wrote the second logic*/


//2 Retrieving the unique & duplicate elements from a given array

let arr1 = [12, 34, 55, 56, 66, 777, 77, 8, 12, 12, 34];
let unique = [];
let duplicate = [];

for (let i = 0; i <= arr1.length - 1; i++) {

    if (!unique.includes(arr1[i])) {
        unique.push(arr1[i]);
    }
    else {
        if (!duplicate.includes(arr1[i])) {
            duplicate.push(arr[i]);
        }
    }
}

console.log("The unique element are:", unique);
console.log("The duplicate element are:", duplicate);

/* Output: The unique element are: [
  12,  34, 55, 56,
  66, 777, 77,  8
]
The duplicate element are: [ 12, 34 ] */