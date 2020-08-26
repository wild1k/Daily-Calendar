
//grabs the time and formats it 
var time = moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
// grabs the id and links it to the variable
var currentDay = document.getElementById('currentDay')
//puts the date and time on the page
currentDay.innerHTML= time


var userInput = [];


function dailyEvents() {
  const timeArray = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]
  let html = "";

  timeArray.forEach((time, i) => {
    const hr = i + 9;
    const nw = moment().hour();
    const color = (hr === nw) ? "present" :
      (hr > nw) ? "future" :
        "past";

    html += `<div class="row">
        <div class="col-md-1 hour d-flex justify-content-center align-items-center">${time}</div> 
        <input class='user-event-input col-md-10 event-input-block ${color}' value="${localStorage.getItem(`${hr}`) || ""}" id="${time}Row"> 
        <div class="col-md-1 saveBtn" data-hour=${hr}><i class="fas fa-save pl-4 pt-4 " aria-hidden="true"></i></div> 
    </div>`

  });

  $("#calendarContain").append(html);


}
dailyEvents();


