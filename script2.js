let myString = "mississippi"
let inputChar = "s";



console.log(count);

function searchString(inputLetter, inputString) {
    let count = 0;
    inputString = inputString.toLowerCase();
    inputLetter = inputLetter.toLowerCase();
    
    for (let i = 0; i < inputString.length; i++){
        // console.log(myString[i]);
        if(inputString[i] == inputLetter) {
            count++;
        }
    }

    return count;
}

console.log(searchString(inputChar, myString));