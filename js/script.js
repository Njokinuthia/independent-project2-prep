
// // give user their answer
let submit = document.getElementById("submit");
submit.addEventListener("click", (event) => {
  event.preventDefault();
  calculateDay();    
}) 

// calculate day 
let calculateDay = () => {
// object of akan names
  let akanNames = [
    {day:"sunday", male : "Kwasi" , female: "Akosua"},
    {day:"monday", male : "Kwadwo" , female: "Adwoa"}, 
    {day:"tuesday", male : "Kwabena" , female: "Abenaa"}, 
    {day:"wednesday", male : "Kwaku" , female: "Akua"}, 
    {day:"thursday", male : "Yaw" , female: "Yaa"}, 
    {day:"friday", male : "Kofi" , female: "Afua"}, 
    {day:"Saturday", male : "Kwame" , female: "Ama"}, 
  ];
// get user input
  let birthDay = document.getElementById("dob").value;
  let gender = document.getElementById("gender").value;

  let date = new Date(birthDay);
  let dayOfBirth = date.getDay();

// determine name
  let akanName;
  if(gender === "male"){
    akanName = akanNames[dayOfBirth].male;   
  }
  else{
    akanName = akanNames[dayOfBirth].female;
  }

// output answer
  console.log(akanName);
  document.getElementById("response").innerText = `Your akan name is ${akanName}`;  

}

  
  



