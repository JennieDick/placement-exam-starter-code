// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Jennie Dick" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle
let total = gb + cc + sugar

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// Ginger Bread Counter
let gbCountButton = document.querySelector("#qty-gb");
let gb = localStorage.getItem("qtygb");
    if (gb) {
        gbCountButton.textContent = gb;
    };
document.getElementById('add-gb').addEventListener('click', function() {
    let gb = parseInt(gbCountButton.textContent);
    gb = gb + 1;
    gbCountButton.textContent = (gb);
    localStorage.setItem("qtygb", gb);
    console.log('Ginger bread + button was clicked!')
});
document.getElementById("minus-gb").addEventListener("click", function() {
    let gb = parseInt(gbCountButton.textContent);
    gb = gb - 1;
    gbCountButton.textContent = (gb);
    localStorage.setItem("qtygb", gb);
    console.log("Ginger bread - button was clicked!");
});

//Chocolate Chip Counter
let chocolateCountButton = document.querySelector("#qty-cc");
let cc = localStorage.getItem("qtycc");
    if (cc) {
        chocolateCountButton.textContent = cc;
    };
document.getElementById("add-cc").addEventListener("click", function() {
    let cc = parseInt(chocolateCountButton.textContent);
    cc = cc + 1;
    chocolateCountButton.textContent = (cc);
    localStorage.setItem("qtycc", cc);
});
document.getElementById("minus-cc").addEventListener("click", function() {
    let cc = parseInt(chocolateCountButton.textContent);
    cc = cc - 1;
    chocolateCountButton.textContent = (cc);
    localStorage.setItem("qtycc", cc);
});

//Sugar Sprinkle Counter
let sugarCountButton = document.querySelector("#qty-sugar");
let sugar = localStorage.getItem("qtysugar");
    if (sugar) {
        sugarCountButton.textContent = sugar;
    };
document.getElementById("add-sugar").addEventListener("click", function(){
    let sugar = parseInt(sugarCountButton.textContent);
    sugar = sugar + 1;
    sugarCountButton.textContent = (sugar);
    localStorage.setItem("qtysugar", sugar);
});
document.getElementById("minus-sugar").addEventListener("click", function() {
    let sugar = parseInt(sugarCountButton.textContent);
    sugar = sugar - 1;
    sugarCountButton.textContent = (sugar);
    localStorage.setItem("qtysugar", sugar);
});

//Total Cookies

let total = document.querySelector("#qty-total");

let cookieTally = [
    {name: "gb", count: gb},
    {name: "cc", count: cc},
    {name: "sugar", count: sugar}
];
let sum = []

for (let i = 0; i < cookieTally.length; i++){
    sum = sum + cookieTally[i].count;
};
total.textContent = (gb+cc+sugar);
