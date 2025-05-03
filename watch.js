let [seconds,minuites,hours]=[0,0,0];
let display=document.getElementById("displayTime");
let timer=null;



function stopwatch(){
    seconds++
    if(seconds == 60){
        seconds=0;
        minuites++;
        if(minuites== 60){
            minuites=0;
            hours++;
        }
    }
    let h= hours<10? "0"+hours : hours;
    let m= minuites<10? "0"+minuites : minuites;
    let s= seconds<10? "0"+seconds : seconds;

display.innerHTML= h + ":"+ m + ":" + s;
}


function watchstart(){
if(timer !==null){
    clearInterval (timer);
}
timer=setInterval(stopwatch,1000) 
}

function watchstop(){
    clearInterval (timer);
}
function watchreset(){
    clearInterval (timer);
    seconds = 0;
    minuites = 0;
    hours = 0;
    display.innerHTML = "00:00:00";
}