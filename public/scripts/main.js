var taskName = document.getElementById("taskName");
var timer = document.getElementById("timer");
var start = document.getElementById("start");
var stop = document.getElementById("stop");
var reset = document.getElementById("reset");
var save = document.getElementById("save");
var increment = document.getElementById("increment");
var decrement = document.getElementById("decrement");

start.addEventListener("click", startClock);
stop.addEventListener("click", stopClock);
reset.addEventListener("click", resetClock);
increment.addEventListener("click", incrementTime);
decrement.addEventListener("click", decrementTime);
