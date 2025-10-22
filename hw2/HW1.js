 /* 
 Name: Aleena Siddiqui 
 Date created: 9/19/2025
 Date last edited: 9/26/2025
 Version: 1.0
 Description: Homework 1 JS 
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