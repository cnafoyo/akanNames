 function getFormValues(){
  var day ="";
  var month = "";
  var year = "";
  var gender = "";
}
  function getDayOfWeek(day,month,year){

  var CC = parseInt(year.substring(0, 2));
  var YY = parseInt(year.substring(2, 4));
  var MM = parseInt(month);
  var DD = parseInt(day);

  return (((CC/4)-2*CC-1) + ((5*YY/4)) + ((26*(MM+1)/10)) + DD) % 7;

 }
