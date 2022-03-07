// TEST JS FILE LINK
// let body = document.getElementById("body");
//  body.style.backgroundColor ="red";

// NAVIGATE BETWEEN PAGES
// go to home page
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
//   pageThree.classList.remove("d-none")
// })
// let form = document.getElementById("form");
// form.addEventListener("click", (event) => {
//   event.preventDefault();
//   pageOne.classList.add("d-none")
//   pageTwo.classList.remove("d-none")
//   pageThree.classList.remove("d-none")
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
// let answerPage = document.getElementById("answerPage");
// answerpage.addEventListener("click", (event) => {
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
  // get and validate day input
  var dateValue = document.getElementById("date").value;
  if (dateValue <=0 || dateValue > 31){
    alert("Invalid Date - pick date from 1 to 31") 
   }
  else {
  var date = parseInt(dateValue);
  }
  // get and validate month input
  var monthValue = document.getElementById("month").value;
  if (monthValue <=0 || monthValue > 12){
    alert("Invalid Month - pick month from 1 to 12") 
   }
  else {
  var month = parseInt(monthValue);
  }
  // get and validate year input
  var yearValue = document.getElementById("year").value;
  if (yearValue <=0 || yearValue > 2022){
    alert("Invalid year - pick year from 0000 to 2022") 
   }
  else {
  var year = parseInt(yearValue);
  }

  // getting bits of the century
  var centuryDigits = parseInt(year.toString().slice(0, 2));
  var yearDigits = parseInt(year.toString().slice(2, 4));
  // using formula
  var dayOfWeek = (((centuryDigits / 4) - 2 * centuryDigits - 1) + ((5 * yearDigits / 4)) + ((26 * (month + 1) / 10)) + date) % 7;
  var dateIndex = parseInt(dayOfWeek.toString().slice(0, 1));
  console.log(dateIndex);
  determineGenderName(dateIndex);
}

// Determine gender and name
var determineGenderName = (dateIndex) => {
  var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
  var femaleNames = ["Akosua", "Adwoa", "Abenna", "Akua", "yaa", "Afua", "Ama"]

  // get and validate gender input
  var genderValue = document.getElementById("gender").value;
  // TODO:FIX THE UNDEFINED
  if (genderValue === undefined){  
    alert("Please select a gender") 
   }
  else {
  var gender = genderValue;
  }  

  if (gender === "male") {
    answer = maleNames[dateIndex];   
    console.log(maleNames[dateIndex])        
  }
  else{  
    answer = femaleNames[dateIndex]; 
    console.log(femaleNames[dateIndex])      
  }
  // trial code - for answers 
 document.getElementById("response").innerText=`Your Akan name is ${answer}!`;
}


  // trial validation:

  // var dateValue = document.getElementById("date").value;
  // if (dateValue <=0 || dateValue > 31){
  //   alert("Invalid Date - pick date from 1 to 31") 
  //  }
  // else {
  // var date = parseInt(dateValue);
  // }









