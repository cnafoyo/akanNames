 function getFormValues(){
  var day ="";
  var month = "";
  var year = "";
  var gender = "";


var dayElement = document.getElementById("day");
var monthElement = document.getElementById("month");
var yearElement = document.getElementById("year");

day = dayElement.options[dayElement.selectedIndex].value;

month = monthElement.options[monthElement.selectedIndex].value;

year = yearElement.options[yearElement.selectedIndex].value;

 gender = document.querySelector('input[name=gender]:checked').value;

 if(gender === ""){
		 alert("You must select gender");
	 }else if(parseInt(day)<=0 || parseInt(day) > 31){
		 alert("check if you entered right value for day");
	 }else if(parseInt(month)<=0 || parseInt(month) > 12){
		 alert("Check if you eneterd right value for month");
	 }else{
		 showAkanName(day,month,year,gender);
	 }
}
function showAkanName(day,month,year,gender){

	 var dayOfWeek = Math.trunc(getDayOfWeek(day,month,year));

	 var male = [
	 {"day":"Sunday","name":"Kwasi"},
	 {"day":"Monday","name":"Kwadwo"},
	 {"day":"Tuesday","name":"Kwabena"},
	 {"day":"Wednesday","name":"Kwaku"},
	 {"day":"Thursday","name":"Yaw"},
	 {"day":"Friday","name":"Kofi"},
	 {"day":"Saturday","name":"Kwame"}
	 ]

	 var female = [
	 {"day":"Sunday","name":"Akosua"},
	 {"day":"Monday","name":"Adwoa"},
	 {"day":"Tuesday","name":"Abenaa"},
	 {"day":"Wednesday","name":"Akua"},
	 {"day":"Thursday","name":"Yaa"},
	 {"day":"Friday","name":"Afua"},
	 {"day":"Saturday","name":"Ama"}
	 ]

}
  function getDayOfWeek(day,month,year){

  var CC = parseInt(year.substring(0, 2));
  var YY = parseInt(year.substring(2, 4));
  var MM = parseInt(month);
  var DD = parseInt(day);

  return (((CC/4)-2*CC-1) + ((5*YY/4)) + ((26*(MM+1)/10)) + DD) % 7;

 }
