var name, phone, mobile, email;

while (true) {
    name = prompt("Enter your name:");

    var nameRegex = /^[A-Za-z\s]+$/;
    if (nameRegex.test(name)) {
        break;
    } else {
        alert("Name must contain letters only.");
    }
}

while (true) {
    phone = prompt("Enter your phone number (8 digits):");

    var phoneRegex = /^\d{8}$/;
    if (phoneRegex.test(phone)) {
        break;
    } else {
        alert("Phone number must be exactly 8 digits.");
    }
}

while (true) {
    mobile = prompt("Enter your mobile number (11 digits, starts with 010, 011, or 012):");

    var mobileRegex = /^(010|011|012)\d{8}$/;
    if (mobileRegex.test(mobile)) {
        break;
    } else {
        alert("Mobile must be 11 digits and start with 010, 011, or 012.");
    }
}

while (true) {
    email = prompt("Enter your email (example: abc@123.com):");

    var emailRegex = /^[a-zA-Z0-9._]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;
    if (emailRegex.test(email)) {
        break;
    } else {
        alert("Email format is incorrect (abc@123.com).");
    }
}

document.write("<h2>Welcome " + name + " </h2>");
document.write("<p><strong>Phone:</strong> " + phone + "</p>");
document.write("<p><strong>Mobile:</strong> " + mobile + "</p>");
document.write("<p><strong>Email:</strong> " + email + "</p>");
