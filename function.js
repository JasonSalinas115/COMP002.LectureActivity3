// 3 ways to declare a function

// 1st method to create a function

const printhelloworld = function() {
    console.log("printhelloworld2() called!")
    console.log("Hello");
    console.log("World!");
}

printhelloworld();

// 2nd method to create a function 

function printhelloworld2() {
    console.log("Hello");
    console.log("World 2!");
}

printhelloworld2(); // Calls the printhellowrold2() function


// 3rd method to create a function (=> arrow function)

const printhelloworld3 = () => {
    console.log("printhelloworld3() called!");
}

printhelloworld3(); // Calls the printhellowrold3() function

/*******************************************/
// function with a parameter 

function printhelloworld4(name) {
    console.log("Hello, " + name );
} // scope note: the variable name no longer exist when the function completes 

printhelloworld4("Jason")
printhelloworld4("Jason Salinas")

// function with multiple parameters

function printhelloworld5(name1, name2, name3, name4, name5){
    console.log(`hello, ${name1}, ${name2}, ${name3}, ${name4}, and ${name5}`);
}

printhelloworld5("J", "ja", "jas", "jaso", "Jason")

// string output options (string-quotes, double-quotes, and backticks)

let someVariable = ""
console.log('hello ,' + someVariable);// string-quotes
console.log("hello, " + someVariable);// double quotes
console.log(`hello, ${someVariable}`);// backticks

//function calling a function

function printhelloworld6() {
    console.log("This is printhelloworld6()");
}

function printhelloworld7() {
    console.log("This is printhelloworld7()");
    printhelloworld6();// calling a function inside another function
}

printhelloworld7(); // prints both "printhelloworld7" & "printhelloworld6"

/***********************************************/

// rescursion 

const factorial = n => {
    if (n <= 1) {
        return 1; // the base case
    }

    return n *factorial(n-1); // recursive call
}

console.log(factorial(5));

/******************************************* */
// return vales

// function without a return value
function sum(num1, num2) {
    console.log(num1 + num2); // prints the sum of num1 + num2
}

// function with return value
function difference(num1, num2) {
    return num1 - num2; // returns the difference between num1 & num2 BUT it does
}

sum(2, 10); // since this function did not return a value, it cannot be manipulated


// since the difference function returns a value, it CAN
let addTenToDifference = difference(10, 5) + 10;
console.log(addTenToDifference);