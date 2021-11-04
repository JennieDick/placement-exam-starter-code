// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Jennie Dick" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle
let total = 0

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// Ginger Bread Counter
let gbCountButton = document.querySelector("#qty-gb");
let gbCount = localStorage.getItem("qtygb");
    if (gbCount) {
        gbCountButton.textContent = gbCount;
    };
document.getElementById('add-gb').addEventListener('click', function() {
    let gbCount = parseInt(gbCountButton.textContent);
    gbCount = gbCount + 1;
    gbCountButton.textContent = (gbCount);
    localStorage.setItem("qtygb", gbCount);
    console.log('Ginger bread + button was clicked!')
});
document.getElementById("minus-gb").addEventListener("click", function() {
    let gbCount = parseInt(gbCountButton.textContent);
    gbCount = gbCount - 1;
    gbCountButton.textContent = (gbCount);
    localStorage.setItem("qtygb", gbCount);
    console.log("Ginger bread - button was clicked!");
});

//Chocolate Chip Counter
let chocolateCountButton = document.querySelector("#qty-cc");
let ccCount = localStorage.getItem("qtycc");
    if (ccCount) {
        chocolateCountButton.textContent = ccCount;
    };
document.getElementById("add-cc").addEventListener("click", function() {
    let ccCount = parseInt(chocolateCountButton.textContent);
    ccCount = ccCount + 1;
    chocolateCountButton.textContent = (ccCount);
    localStorage.setItem("qtycc", ccCount);
});
document.getElementById("minus-cc").addEventListener("click", function() {
    let ccCount = parseInt(chocolateCountButton.textContent);
    ccCount = ccCount - 1;
    chocolateCountButton.textContent = (ccCount);
    localStorage.setItem("qtycc", ccCount);
});

//Sugar Sprinkle Counter
let sugarCountButton = document.querySelector("#qty-sugar");
let sugarCount = localStorage.getItem("qtysugar");
    if (sugarCount) {
        sugarCountButton.textContent = sugarCount;
    };
document.getElementById("add-sugar").addEventListener("click", function(){
    let sugarCount = parseInt(sugarCountButton.textContent);
    sugarCount = sugarCount + 1;
    sugarCountButton.textContent = (sugarCount);
    localStorage.setItem("qtysugar", sugarCount);
});
document.getElementById("minus-sugar").addEventListener("click", function() {
    let sugarCount = parseInt(sugarCountButton.textContent);
    sugarCount = sugarCount - 1;
    sugarCountButton.textContent = (sugarCount);
    localStorage.setItem("qtysugar", sugarCount);
});

//Total Cookies

let totalCookies = document.querySelector("#qty-total");

let cookieTally = [
    {name: "gb", count: gbCount},
    {name: "cc", count: ccCount},
    {name: "sugar", count: sugarCount}
];
let sum = []

for (let i = 0; i < cookieTally.length; i++){
    sum = sum + cookieTally[i].count;
};
totalCookies.textContent = (gbCount+ccCount+sugarCount);