//store birth details in variables to use later
var date = getElementById.value;('date')
var month = getElementById.value;('month')
var year = getElementById.value;('year')

// function - birth details validation 
var validateBirthDetails = (date , month, year)=>{
  if (date <= 0 || d > 31){
    alert('Please enter a valid date')
  }
  else{
    alert('ok')
  }

  if (month <= 0 || month > 12){
    alert('Please enter a valid month')
  }
  else{
    alert('ok')
  }

  if (year == NaN){
    alert('Please enter a valid year')
  }
  else{
    alert('ok')
  }
}
