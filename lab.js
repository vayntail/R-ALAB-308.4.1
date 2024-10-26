const CSV_STR = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// ======== Part 1: Refactoring Old Code ========
// let word = '';
// let row = [];

// for (let i = 0; i < CSV_STR.length; i++) {
//     let ch = CSV_STR[i];
//     if (ch == "," || ch == "\n" || i === CSV_STR.length - 1){
//         row.push(word); // add to row
//         word = ''; // clear word

//         // if it is new line or we are at the last character of the whole string,
//         // it is the end of the row.
//         if (ch == "\n" || i === CSV_STR.length - 1){
//             // print out the row
//             console.log(row.join(', '));
//             // clear row
//             row = [];
//         }
//     }
//     else {
//         word += ch; // add character to word
//     }
// }

// ======== Part 2: Expanding Functionality ========
// let word = '';
// let data = [];
// let row = [];

// for (let i = 0; i < CSV_STR.length; i++) {
//     let ch = CSV_STR[i];

//     if (ch == "," || ch == "\n" || i === CSV_STR.length - 1){
//         row.push(word); // add to row
//         word = ''; // clear word

//         if (ch == "\n" || i === CSV_STR.length - 1){
//             // add row array to data array
//             console.log(row.join(', '));
//             // clear row
//             row = [];
//         }
//     }
//     else {
//         word += ch; // add character to word
//     }
// }
// // Print out data
// console.log(data);

// ======== Part 3: Transforming Data ========
// let word = '';
// let row = [];
// let data = [];

// for (let i = 0; i < CSV_STR.length; i++) {
//     let ch = CSV_STR[i];

//     if (ch != "," && ch != "\n") {
//         word += ch; // add character to word
//     }

//     else {
//         row.push(word); // add to row
//         console.log(CSV_STR.endsWith(word))
//         word = ''; // clear word

//         // Check if new line, or at the end of the string.
//         if (ch == "\n" || CSV_STR.endsWith(word)) {
//             // add row array to data array
//             data.push(row);
//             // clear row
//             row = [];
//         }
//     }

    
// }
// // Go through the first row inside data to find headings.
// let firstRow = data[0];
// let headings = []; // first row, but in lower case
// let objectsData = [];
// // Loop through each word inside the first row and add the lower case version of it to headings array.
// firstRow.forEach((word) => headings.push(word.toLowerCase()));

// // Start looping through data at index 1 since we don't want the first line (headings)
// for (let i = 1; i < data.length; i++) {
//     let row = data[i];

//     // Make object that looks like: { id: "42", name: "Bruce", occupation: "Knight", age: "41" }

//     let obj = {}; // Make blank object

//     // Iterate through the amount of columns
//     for (let i = 0; i < headings.length; i++) {
//         obj[headings[i]] = row[i]; // add key:value to object
//     }

//     objectsData.push(obj);
// }

// // Print objects Array
// console.log(objectsData);



