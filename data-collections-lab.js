// ========== Part 1: Refactoring Old Code ========== 
let csvStr = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
let word = '';
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

    // If new line, print out the row and reset word + row
    if (ch == "\n"){
        console.log(row.toString());
        word = "";
        row = [];
    }
}


