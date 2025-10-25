/* 
  Name: Aleena Siddiqui 
  Date created: 9/19/2025
  Date last edited: 10/26/2025
  Version: 1.0
  Description: Homework 2 JS 
*/

// --- Dynamic Date JS Code ---
const d = new Date(); 
let text = d.toLocaleDateString(); 
document.getElementById("Today").innerHTML = text; 

// --- Range Slider JS Code ---
let slider = document.getElementById("range"); 
let output = document.getElementById("range-slider"); 
output.innerHTML = slider.value; 

slider.oninput = function () {
  output.innerHTML = this.value;
};

// --- DOB Validation JS Code ---
function validatedob() {
  let dob = document.getElementById("dob");
  let date = new Date(dob.value);
  let maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() - 120);

  if (date > new Date()) {
    document.getElementById("dob-error").innerHTML = 
      "Date cannot be in the future.";
    dob.value = "";
    return false;
  } else if (date < maxDate) {
    document.getElementById("dob-error").innerHTML = 
      "Date cannot be more than 120 years ago.";
    dob.value = "";
    return false;
  } else {
    document.getElementById("dob-error").innerHTML = "";
    return true;
  }
}

// --- SSN Validation JS Code ---
function validatessn() {
  const ssn = document.getElementById("ssn").value;
  const ssnR = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;

  if (!ssnR.test(ssn)) {
    document.getElementById("ssn-error").innerHTML =
      "Please enter a valid Social Security Number.";
    return false;
  } else {
    document.getElementById("ssn-error").innerHTML = "";
    return true;
  }
}

// --- Address Validation JS Code ---
function validateaddress1() {
  var ad1 = document.getElementById("address1").value;

  if (ad1.length < 2) {
    document.getElementById("address1-error").innerHTML =
      "Please enter Address Line.";
    return false;
  } else {
    document.getElementById("address1-error").innerHTML = "";
    return true;
  }
}

// --- Zip Code Validation Code ---
function validatezcode() { 
  const zipInput = document.getElementById("zcode");
  let zip = zipInput.value.replace(/[^\d-]/g, ""); // removes non-number and non-dash characters

  if (!zip) {
    document.getElementById("zcode-error").innerHTML =
      "Zip Code must be entered.";
    return false;
  } 

  if (zip.length > 5) {
    zip = zip.slice(0,5); // keeps only first 5 digits
  }

  zipInput.value = zip;
  document.getElementById("zcode-error").innerHTML = "";
  return true;
}

// --- Email Address Validation Code ---
function validateemail() {
  const email = document.getElementById("email").value;
  const emailR = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (email === "") {
    document.getElementById("email-error").innerHTML = 
      "Email must be entered.";
    return false;
  } else if (!email.match(emailR)) {
    document.getElementById("email-error").innerHTML = 
      "Please enter a valid Email Address.";
    return false;
  } else {
    document.getElementById("email-error").innerHTML = "";
    return true;
  }
}

// -- Phone Number Validation Code --
function validatephone() {
  const phoneInput = document.getElementById("phone");
  const phone = phoneInput.value.replace(/\D/g, ""); // removes all non-number characters

  if (phone.length == 0) {
    document.getElementById("phone-error").innerHTML = 
      "Phone Number must be entered.";
    return false;
  } 

  const formattedphone = phone.slice(0,3) + "-" + phone.slice(3,6) + "-" + phone.slice(6,10);
  phoneInput.value = formattedphone;
  document.getElementById("phone-error").innerHTML = "";
  return true;
}

// -- Username Validation Code --
function validateuname() {
  let uname = document.getElementById("uname").value;

  uname = uname.toLowerCase();
  document.getElementById("uname").value = uname;

  if (uname.length === 0) {
    document.getElementById("uname-error").innerHTML =
      "Username must be entered";
    return false;
  } 

  if (!isNaN(uname.charAt(0))) {
    document.getElementById("uname-error").innerHTML =
      "Username cannot start with a number";
    return false;
  }

  let regex = /^[a-zA-Z0-9_-]+$/;
  if (!regex.test(uname)) {
    document.getElementById("uname-error").innerHTML = 
      "User ID can only have letters, numbers, underscores, and dashes";
    return false;
  } else if (uname.length < 5) {
    document.getElementById("uname-error").innerHTML = 
      "User ID must be at least 5 characters";
    return false;
  } else if (uname.length > 30) {
    document.getElementById("uname-error").innerHTML = 
      "Username can't exceed 30 characters";
    return false;
  } else {
    document.getElementById("uname-error").innerHTML = "";
    return true;
  }
}

// -- Password Validation Code --
function validatepwrd() {
  const pwrd = document.getElementById("pwrd").value;
  const uname = document.getElementById("uname").value;

  const errorMessage = [];

  if (!pwrd.match(/[a-z]/)) {
    errorMessage.push("Enter at least one lowercase letter.");
  }

  if (!pwrd.match(/[A-Z]/)) {
    errorMessage.push("Enter at least one uppercase letter.");
  }

  if (!pwrd.match(/[0-9]/)) {
    errorMessage.push("Enter at least one number.");
  }

  if (!pwrd.match(/[!\@#\$%&*\-_\\.+\(\)]/)) {
    errorMessage.push("Enter at least one special character.");
  }

  if (pwrd === uname || pwrd.includes(uname)) {
    errorMessage.push("Password cannot contain username.");
  }

  const errorContainer = document.querySelector(".pwrd-message");
   errorContainer.innerHTML = errorMessage
  .map(message => `<span>${message}</span><br/>`)
  .join("");
}

// -- Confirm Password Validation --
function confirmpwrd() {
    pword1 = document.getElementById("pwrd").value;
    pword2 = document.getElementById("conpwrd").value;

    if (pword1 !== pword2) {
        document.getElementById("pwrd2-error").innerHTML = 
        "Passwords don't match.";
        return false;
    } else {
        document.getElementById("pwrd2-error").innerHTML = 
        "Passwords match.";
        return true;
    }
}

// -- Review Button Code --
function reviewInput() {
    var formcontent = document.getElementById("signup");
    var formoutput = "<table class='output'><th colspan = '3'> Review Your Information:</th>";
    for (let i = 0; i < formcontent.length; i++) {
        if (formcontent.elements[i].value !== "") {
            switch (formcontent.elements[i].type) {
                case "checkbox":
                    if (formcontent.elements[i].checked) {
                        formoutput += `<tr><td align='right'>${formcontent.elements[i].name}</td><td>&#x2713;</td></tr>`;
                    }
                    break;
                case "radio":
                    if (formcontent.elements[i].checked) {
                        formoutput += `<tr><td align='right'>${formcontent.elements[i].name}</td><td>${formcontent.elements[i].value}</td></tr>`;
                    }
                    break;
                default:
                    formoutput += `<tr><td align='right'>${formcontent.elements[i].name}</td><td>${formcontent.elements[i].value}</td></tr>`;
            }
        }
    }
    formoutput += "</table>";
    document.getElementById("showInput").innerHTML = formoutput;
}

// -- Remove Review Data --
function removeReview() {
    document.getElementById("showInput").innerHTML = "";
}
