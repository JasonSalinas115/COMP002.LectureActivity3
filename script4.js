let myCar ={
    wheels: 4,
    transmission: "Automatic",
    truckContent: ["Donut Tire", "Jumper Cables", "Water Bottles"]
};

// accessing properties of an object
console.log(`myCar has ${myCar.wheels} wheels`);
console.log(`myCar has ${myCar.transmission} transmission`);

myCar.transmission = "Manuel/Conventional";
console.log(`myCar has a/an ${myCar.transmission} transmission`);