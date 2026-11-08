
// Reversing the String from Testleaf to faeltset - Without function to reverse the String


let str = "Testleaf"
let rev = "";

for (let i = str.length - 1; i >= 0; i--) {
    rev = rev + str.charAt(i);

}
console.log(`The reversed String of ${str}:`, rev);

// O/P: The reversed String of Testleaf: faeltseT

//2 Reversing the String from Testleaf to faeltset- Used function to reverse the String

let str2 = "Testleaf";

function reversingString(str2) {

    let rev2 = "";

    for (let i = str2.length - 1; i >= 0; i--) {
        rev2 = rev2 + str2.charAt(i);

    }
    return `The reversed string using function is:${rev2}`;
}

console.log(reversingString("Testleaf"));

// O/P: The reversed string using function is:faeltseT
