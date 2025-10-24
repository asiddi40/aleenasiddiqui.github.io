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

  // Regex for SSN pattern
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
  console.log(ad1);
  console.log(ad1.length);

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
   let zip = zipInput.value.replace(/[^\d-]/g, "") //removes non-number and non-dash characters

  if (!zip) {
    document.getElementById("zcode-error").innerHTML =
      "Zip Code must be entered.";
    return false;
  } 

  if (zip.length > 5) {
    zip = zip.slice(0,5); //removes all digits after first 5
  }

  zipInput.value = zip;
  document.getElementById("zcode-error").innerHTML =
    "";
  return true;
}

// --- Email Address Validation Code ---
function validateemail() {
  email = document.getElementById("email").value;
  var emailR = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // Regex pattern for a valid email

  if (email == "") {
    document.getElementById("email-error").innerHTML = 
      "Email must be entered.";
    return false;
  } else if (!email.match(emailR)) {
    document.getElementById("email-error").innerHTML = 
      "Please enter a valid Email Address.";
    return false;
  } else {
    docment.getElementById("email-error").innerHTML = 
      "";
    return true;
  }
}

// -- Phone Number Validation Code --
function validatephone() {
   const phoneInput = document.getElementById("phone");
   const phone = phoneInput.value.replace(/\D/g, ""); // removes all non-number characters

  if (phone.length !== 10) {
    document.getElementById("phone-error").innerHTML = 
      "Phone Number must be entered.";
    return false;
  } 

  const formattedphone = phone.slice(0,3) + "-" + phone.slice(3,6) + "-" + phone.slice(6)
  phoneInput.value = formattedphone;
  document.getElementById("phone-error").innerHTML =
    "";
  return true;
}

