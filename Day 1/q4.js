var name;
var birthYear;
var currentYear = new Date().getFullYear();

// Get valid name
do {
    name = prompt("Please enter your name:");
} while (name === null || name.trim() === "" || !isNaN(name));

console.log("Name:", name);

// Get valid birth year
while (true) {
    birthYear = prompt("Enter your birth year:");

    // Check: not null, not empty, numeric, and less than 2010
    if (birthYear !== null && birthYear.trim() !== "" && !isNaN(birthYear) && Number(birthYear) < 2010) {
        birthYear = Number(birthYear);
        break;
    }

    alert("Please enter a valid numeric birth year less than 2010.");
}

// Calculate age
var age = currentYear - birthYear;

// Display result
document.write("Name: " + name + "<br>");
document.write("Birth year: " + birthYear + "<br>");
document.write("Age: " + age);
