const date = new Date();
const weekday = ["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"];

const d = new Date();
let Day = weekday[d.getDay()];

let day = date.getDate();
let month = date.getMonth() + 1;


let currentDate = `${Day} ${day}/${month}/2271`;

document.querySelector("#Date").textContent = currentDate;