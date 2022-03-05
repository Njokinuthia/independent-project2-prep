// button.addEventListener("click",()=> {
//   h3.classList.add("bbb")
// })

//
var submit = () => {
  calculateDay();
  determineGenderName();  
}


// calculate day 

var calculateDay = () => {

  var date = document.getElementById("date").value;
  var month = document.getElementById("month").value;
  var year = document.getElementById("year").value;

  var centuryDigits = parseInt(year.toString().slice(0, 2));
  var yearDigits = parseInt(year.toString().slice(2, 4));


  var dayOfWeek = (((centuryDigits / 4) - 2 * centuryDigits - 1) + ((5 * yearDigits / 4)) + ((26 * (month + 1) / 10)) + date) % 7;
  var dateIndex = parseInt(dayOfWeek.toString().slice(0, 1));
}


// Determine gender and name

var determineGenderName = () => {
  var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
  var femaleNames = ["Akosua", "Adwoa", "Abenna", "Akua", "yaa", "Afua", "Ama"]

  var gender = document.getElementByType("radio").checked;
// TODO:FIX ARRAY INDEX
  if (gender === male) {
    console.log("Akan Name: " + maleNames[dateIndex]);  
  }
  else {
    // TODO:WHATS WRONG WITH PLACE HOLDER
    femaleNames(`Akan Name: ${femaleNames[dateIndex]}`);
  }
}













