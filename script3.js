let myGrades = [75, 80, 90, 100, 75];
console.log(myGrades.length); // Outputs: 5
console.log(myGrades[0]);
console.log(myGrades[myGrades.length - 1])
// iterates through 
for (let i = 0; i < myGrades.length; i++){
    console.log(myGrades[i]);
}

function traverse(arr){
    for (let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}

function separator(inputChar, length){
   console.log(inputChar.repeat(length));
}

console.log("Current myGrades");
traverse(myGrades);

myGrades.push(62);
console.log("myGrades values after adding an item");
traverse(myGrades);
separator("*", 50);

myGrades.pop
traverse(myGrades);