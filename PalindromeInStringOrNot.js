
//String Reversal program which will reverse the string from backwards
//First logic is without using for loop

function stringReversalValidation(str) {

    let original = str;
    let rev = str.split('').reverse().join('');

    /*  Split methods split it into the character of array then reverse the string
    And join methods combines the array of characters as String */

    if (original.toLowerCase() === rev.toLowerCase()) {
        console.log("The given String is palindrome");
    }
    else {
        console.log("The given string is not a palindrome");
    }
    return rev;
}

let result = stringReversalValidation("Sabeya");
console.log(`And The reversed string is: ${result}`);

/* O/P1: The given string is not a palindrome
And The reversed string is: ayebaS */

let result2 = stringReversalValidation("Madam");
console.log(`And The reversed string is: ${result2}`);

/* O/P2: The given String is palindrome
And The reversed string is: madaM */

//*************************************************************************************


//Second logic is by using for loop



function stringReversalValidation2(str2) {
    let original2 = str2;
    let rev2 = "";

    for (let i = str2.length - 1; i >= 0; i--) {
        rev2 = rev2 + str2.charAt(i);
    }

    if (original2.toLowerCase() === rev2.toLowerCase()) {
        console.log("The given String is palindrome");
    }
    else {
        console.log("The given string is not a palindrome");
    }

    return rev2;

}

let output = stringReversalValidation2("Sabeya");
console.log(`And the reversed string by using for loop is:${output}`);

/* O/P3: The given string is not a palindrome
And the reversed string by using for loop is:ayebaS */

let output2 = stringReversalValidation2("Radar");
console.log(`And the reversed string by using for loop is:${output2}`);

/* O/P4: The given String is palindrome
And the reversed string by using for loop is:radaR */