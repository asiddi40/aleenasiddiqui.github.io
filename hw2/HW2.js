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
    
}
