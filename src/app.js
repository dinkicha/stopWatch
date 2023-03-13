window.addEventListener("load", () => {
let loader = document.getElementsByClassName("loading-container")[0];
let container = document.getElementsByClassName("container")[0];
setTimeout(() => {
    loader.style.display = "none";
    container.style.display = "block";
}, 5000);
});

window.onload = () => {
    let hours = 00;
    let minutes = 00;
    let seconds = 00; 
    let tens = 00; 
    let appendTens = document.getElementById("tens")
    let appendSeconds = document.getElementById("seconds")
    let appendMinutes= document.getElementById("minutes")
    let appendHours= document.getElementById("hours")
    let buttonStart = document.getElementById('startButton');
    let buttonStop = document.getElementById('stopButton');
    let buttonReset = document.getElementById('resetButton');
    let Interval ;
  
    buttonStart.onclick = function() {
      
      clearInterval(Interval);
       Interval = setInterval(startTimer, 10);
    }
    
      buttonStop.onclick = function() {
         clearInterval(Interval);
    }
    
  
    buttonReset.onclick = function() {
       clearInterval(Interval);
    tens = "00";
    seconds = "00";
    minutes = "00";
    hours = "00";
      appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
        appendMinutes.innerHTML = minutes;
        appendHours.innerHTML = hours;

    }
    
     
    
    function startTimer () {
      tens++; 
      
      if(tens <= 9){
        appendTens.innerHTML = "0" + tens;
      }
      
      if (tens > 9){
        appendTens.innerHTML = tens;
        
      } 
      
      if (tens > 99) {
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
      }
      
      if (seconds > 9){
        appendSeconds.innerHTML = seconds;
      }

      if (seconds == 60) {
        seconds = 0;
        minutes++;
        appendMinutes.innerHTML = "0" + minutes;
        appendSeconds.innerHTML = "0" + 0;
        appendTens.innerHTML = "0" + 0;
      }

      if (minutes == 60) {
        seconds = 0;
        minutes = 0;
        hours++;
        appendHours.innerHTML = "0" + hours;
        appendMinutes.innerHTML = "0" + 0;
        appendSeconds.innerHTML = "0" + 0;
        appendTens.innerHTML = "0" + 0;
      }
    
    }
}
