var nameInput = document.getElementById("name");
var ageInput = document.getElementById("age");
var emailInput = document.getElementById("email");

var nameError = document.getElementById("nameError");
var ageError = document.getElementById("ageError");
var emailError = document.getElementById("emailError");

var tableBody = document.querySelector("#userTable tbody");

function resetErrors() {
    nameError.textContent = "";
    ageError.textContent = "";
    emailError.textContent = "";
}

function validate() {
    var valid = true;
    resetErrors();

    if (nameInput.value.trim() === "") {
        nameError.textContent = "Name is required";
        valid = false;
    }

    if (ageInput.value.trim() === "") {
        ageError.textContent = "Age is required";
        valid = false;
    } else if (!/^\d+$/.test(ageInput.value.trim())) {
        ageError.textContent = "Age must be a number";
        valid = false;
    }

    if (emailInput.value.trim() === "") {
        emailError.textContent = "Email is required";
        valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim())) {
        emailError.textContent = "Invalid email";
        valid = false;
    }

    return valid;
}

function addUser() {
    if (!validate()) return;

    var row = document.createElement("tr");

    var nameCell = document.createElement("td");
    nameCell.textContent = nameInput.value.trim();

    var ageCell = document.createElement("td");
    ageCell.textContent = ageInput.value.trim();

    var emailCell = document.createElement("td");
    emailCell.textContent = emailInput.value.trim();

    row.appendChild(nameCell);
    row.appendChild(ageCell);
    row.appendChild(emailCell);

    tableBody.appendChild(row);

    nameInput.value = "";
    ageInput.value = "";
    emailInput.value = "";
}
