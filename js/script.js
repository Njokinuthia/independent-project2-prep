
// // give user their answer
let submit = document.getElementById("submit");
submit.addEventListener("click", (event) => {
  event.preventDefault();
  calculateDay();  
}) 

// calculate day 
let calculateDay = () => {
  let birthDay = document.getElementById("dob").value;
  let gender = document.getElementById("gender").value;

  let date = new Date(birthDay);
  let dayOfBirth = date.getDay();
  
}

  
  



