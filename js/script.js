//store birth details in variables to use later

// calculate day 

var calculateDay = (date , month, year)=>{

  var date = getElementById('date').value;
  var month = getElementById('month').value;
  var year = getElementById('year').value;

  centuryDigits = parseInt(year.toString().slice(0,2));
  yearDigits =  parseInt(year.toString().slice(2,4))

  var dayOfWeek = ( ( (centuryDigits/4) -2*centuryDigits-1) + ((5*yearDigits/4) ) + ((26*(month+1)/10)) + day ) % 7;
  return dayOfWeek;
}

