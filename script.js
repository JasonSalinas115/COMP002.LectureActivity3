let name = "Jason"; // this variable is available in the entire program

if(name == "Jason") {
    name == "Salinas"; // name is still accessible here
    let helloStatement = "Hello there!"; // this bariable is only available inside
    console.log(helloStatement);
    // after the if block completes, the helloStatement variable is no longer accesible 

    // the line below will threw an error because helloStatement no loner exist
}
// console.log(helloStatement)
console.log(name);

