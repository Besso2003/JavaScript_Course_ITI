do {
    var numPersons = prompt("Please Enter Number of Persons");
} while (isNaN(numPersons) || numPersons == ""); 

// Dynamically create a table
var table = document.createElement("table");

table.border = "1";

// Insert a row at the top of the table (dah el table header)
var tableHeader = table.insertRow();

// Insert two cells for the column headers
var nameCol = tableHeader.insertCell();
var ageCol = tableHeader.insertCell();

nameCol.innerHTML = "Name";
ageCol.innerHTML = "Age";

// Set width of the Name column
nameCol.style.width = "200px";

// ----------- Loop to get user data -----------
for (var i = 0; i < numPersons; i++) {

    do {
        var userName = prompt("Please Enter User " + (i + 1) + " Name");
    } while (!/^[A-Za-z]{4,9}$/.test(userName)); 

    do {
        var age = prompt("Please Enter User " + (i + 1) + " Age");
    } while (isNaN(age) || age == "" || Number(age) <= 10 || Number(age) >= 60);

    // Create a new row in the table
    var row = table.insertRow();

    // Insert cells for Name and Age in the current row
    var nameCell = row.insertCell();
    var ageCell = row.insertCell();

    // Set the content of each cell
    nameCell.innerHTML = userName;
    ageCell.innerHTML = age;

    // Set width
    nameCell.style.width = "200px";
}

// Append table to the body
document.body.appendChild(table);
