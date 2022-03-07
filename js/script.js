// TEST JS FILE LINK
// let body = document.getElementById("body");
//  body.style.backgroundColor ="red";

// // NAVIGATE BETWEEN PAGES
// // go to home page
// let home = document.getElementById("home");
// home.addEventListener("click", (event) => {
//   event.preventDefault();
//   pageOne.classList.remove("d-none")
//   pageTwo.classList.add("d-none")
//   pageThree.classList.add("d-none")
// })

// // go to forms page
// let getStarted = document.getElementById("getStarted");
// getStarted.addEventListener("click", (event) => {
//   event.preventDefault();
//   pageOne.classList.add("d-none")
//   pageTwo.classList.remove("d-none")
//   pageThree.classList.add("d-none")
// })
// let form = document.getElementById("form");
// form.addEventListener("click", (event) => {
//   event.preventDefault();
//   pageOne.classList.add("d-none")
//   pageTwo.classList.remove("d-none")
//   pageThree.classList.add("d-none")
// })

// // go to info page
// let info = document.getElementById("info");
// info.addEventListener("click", (event) => {
//   event.preventDefault();
//   pageOne.classList.add("d-none")
//   pageTwo.classList.add("d-none")
//   pageThree.classList.remove("d-none")
// })
// to navigate when submitted
// let calculate = document.getElementById("calculate");
// calculate.addEventListener("click", (event) => {
//   event.preventDefault();
//   pageOne.classList.add("d-none")
//   pageTwo.classList.add("d-none")
//   pageThree.classList.remove("d-none")
// })


// // give user their answer
let submit = document.getElementById("submit");
submit.addEventListener("click", (event) => {
  event.preventDefault();
  calculateDay();  
})
 
// calculate day 
var calculateDay = () => {
  var date = parseInt(document.getElementById("date").value);
  var month = parseInt(document.getElementById("month").value);
  var year = document.getElementById("year").value;

  var centuryDigits = parseInt(year.toString().slice(0, 2));
  var yearDigits = parseInt(year.toString().slice(2, 4));

  var dayOfWeek = (((centuryDigits / 4) - 2 * centuryDigits - 1) + ((5 * yearDigits / 4)) + ((26 * (month + 1) / 10)) + date) % 7;
  var dateIndex = parseInt(dayOfWeek.toString().slice(0, 1));
  console.log(dateIndex);
  determineGenderName(dateIndex);
}

// Determine gender and name
var determineGenderName = (dateIndex) => {
  var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
  var femaleNames = ["Akosua", "Adwoa", "Abenna", "Akua", "yaa", "Afua", "Ama"]

  var gender = document.getElementById("gender").value;

  if (gender === "male") {
    answer = maleNames[dateIndex];   
    console.log(maleNames[dateIndex])        
  }
  else {  
    answer = femaleNames[dateIndex]; 
    console.log(femaleNames[dateIndex])      
  }
  // trial code - for answers 
 document.getElementById("response").innerText=answer;
}












