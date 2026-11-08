
/* Anagram is we can form a new word from the existing string or characters (Both the new and
existing String will be equal in length) */

//First logic written with console.log()

function isAnagram(str1, str2) {

    str1 = str1.toLowerCase().trim();
    //I'm using split() because js have sort in arrays
    str1 = str1.split("").sort();
    let original1 = str1.join("");
    console.log(str1);

    str2 = str2.toLowerCase().trim().split("").sort();
    //str2=str2.split("").sort();
    let original2 = str2.join("");
    console.log(str2);

    if (original1 === original2) {
        console.log("The given string is anagram")
    }
    else {
        console.log("The given String is not anagram")
    }

}
isAnagram(" Listen", "Silent");

/*  O/P1: [ 'e', 'i', 'l', 'n', 's', 't' ]
[ 'e', 'i', 'l', 'n', 's', 't' ]
The given string is anagram */

//****************************************************************************************

//Second logic written with return

function isAnagramPrint(str3, str4) {

    str3 = str3.toLowerCase().trim().split("").sort();
    let original3 = str3.join("");
    console.log(str3);

    str4 = str4.toLowerCase().trim().split("").sort();
    let original4 = str4.join("");
    console.log(str4);

    return original3 === original4;

}
let result = isAnagramPrint(" Listen", "Radius");

if (result) {
    console.log("Is Anagram");
}
else {
    console.log("Not an Anagram");
}

/* O/P2: [ 'e', 'i', 'l', 'n', 's', 't' ]
[ 'a', 'd', 'i', 'r', 's', 'u' ]
Not an Anagram */
