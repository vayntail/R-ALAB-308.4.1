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
// Changed to use split for simpler
// data = [];
// CSV_STR.split('\n').forEach((string) => {
//     data.push(string.split(','));
// })
// console.log(data);



// ======== Part 3: Transforming Data ========
data = [];
headings = [];

/* CSV_STR.split('\n') looks like this:
[
    ID,Name,Occupation,Age
    42,Bruce,Knight,41
    57,Bob,Fry Cook,19
    63,Blaine,Quiz Master,58
    98,Bill,Doctor’s Assistant,26
]
*/
CSV_STR.split('\n').forEach((string) => {
    // If first line, add to headers
    if (string == CSV_STR.split('\n')[0]){
        headings = (string.toLowerCase().split(","))
    }
    else {
        obj = {};
        // for each column in headings
        for (i=0; i < headings.length; i++) {
            string.split(",").forEach((item) => {
                // add key:value to object
                obj[headings[i]] = string.split(",")[i];
            })
        }
        data.push(obj); // push object to data
    }
})
console.log(data); // print out array



// ======== Part 4: Transforming Data ========