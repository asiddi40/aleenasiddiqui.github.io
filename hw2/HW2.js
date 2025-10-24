 /* 
 Name: Aleena Siddiqui 
 Date created: 9/19/2025
 Date last edited: 9/26/2025
 Version: 1.0
 Description: Homework 2 JS 
 */ 

//dynamic date js code// 
const d = new Date(); 
let text = d.toLocaleDateString(); 
document.getElementById("Today").innerHTML = text; 

//range slider js code// 
let slider = document.getElementById("range") 
let output = document.getElementById("range-slider") 
output.innerHTML = slider.value; 

slider.oninput = function () {output.innerHTML = this.value;};

// dob validation js code
function validatedob() {
dob=document.getElementById("dob");
 let date = new Date(dob.value);
 let maxDate = new Date().setFullYear(new Date()-120);

 if (date > new Date()) {
    document.getElementById("dob-error").innerHTML = 
    "Date cannot be in the future."
    dob.value="";
    return false;
 } else if(date < new Date(maxDate)) {
    document.getElementId("dob-error").innerHTML = 
    "Date cannot be more than 120 years ago."
    dob.value="";
    return false;
 } else {
   document.getElementId("dob-error").innerHTML =
   "";
  return true;
 }
}

// ssn validation js code
function validatessn() {
   const ssn = document.getElementId("ssn").value;

 // regex for ssn pattern
   const ssnR = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;

 if(!ssnR.test(ssn)) {
   document.getElementId("ssn-error").innerHTML =
   "Please enter a valid Social Security Number.";
  return false;
 } else {
   document.getElementId("ssn-error").innerHTML =
    "";
  return true;
 }
}

// address validation js code
function validateaddress1() {
   var ad1 = document.getElementId("address1").value;
 console.log(ad1);
 console.log(ad1.length);

 if (ad1.length < 2) {
    document.getElementId("address1-error".innerHTML =
    "Please enter Address Line.";
  return false;
 } else {
    document.getElementId("address1-error").innerHTML =
    "";
  return true;
 }
}
