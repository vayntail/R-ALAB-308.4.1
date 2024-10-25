// ========== Part 1: Refactoring Old Code ========== 
// ========== Part 2: Expanding Functionality (added on top of part one)========== 
let csvStr = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
let word = '';
let data = [];
let row = [];

// Loop through characters in string
for (let i = 0; i < csvStr.length; i++) {
    let ch = csvStr[i];
    
    // If end of word, add to row and reset
    if (ch == "," || ch == "\n") {
        row.push(word);
        word = "";
    } 
    // Else, add character to word
    else {
        word += ch;
    }

    // If new line, add row to data and reset word + row
    if (ch == "\n"){
        data.push(row);
        word = "";
        row = [];
    }
}

// Print out the final result
console.log(data);