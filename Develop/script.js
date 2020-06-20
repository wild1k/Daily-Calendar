
//grabs the time and formats it 
var time = moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
// grabs the id and links it to the variable
var currentDay = document.getElementById('currentDay')
//puts the date and time on the page
currentDay.innerHTML= time



