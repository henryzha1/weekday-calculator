import './css/styles.css';
import Weekday from './weekday.js';

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  if(document.querySelector("p")) {
    document.querySelector("p").remove();
  }

  const month = document.getElementById("month").value;
  const day = document.getElementById("day").value.trim();
  const year = document.getElementById("year").value.trim();
  const weekday = new Weekday(month, day, year);
  weekday.assignInfo();
  let p = document.createElement("p");
  if(!weekday.isValid()) {
    p.innerText = "NOT A VALID DATE";
  } else {
    weekday.calculateDay();
    p.innerText = weekday.finalDay;
  }
  document.querySelector("body").append(p);
});
