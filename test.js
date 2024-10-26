const CSV_STR = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

let bigArray = []; // creates an empty array
let arr = CSV_STR.split('\n');

// loops through each string in array (USING FOREACH)
// arr.forEach((string) => {
//     bigArray.push(string.split(',')) // add to array
// })

// (USING WHILE)
let index = 0;
while (index < arr.length){
    bigArray.push(arr[index].split(',')) // add to array
    index += 1;
    console.log(index)
}
console.log(bigArray)
