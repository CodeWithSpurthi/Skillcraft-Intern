let h=0;
let m=0;
let s=0;

let timer;
let running=false;


function start(){

if(!running){

running=true;

timer=setInterval(run,1000);

}

}



function pause(){

running=false;

clearInterval(timer);

}



function reset(){

pause();

h=0;
m=0;
s=0;


display.innerHTML="00 : 00 : 00";


document.getElementById("laps").innerHTML="";


}



function run(){


s++;


if(s==60){

s=0;
m++;

}


if(m==60){

m=0;
h++;

}


display.innerHTML=

(h<10?"0"+h:h)+" : "+
(m<10?"0"+m:m)+" : "+
(s<10?"0"+s:s);


}



function lap(){


if(running){


let li=document.createElement("li");


li.innerHTML="Lap - "+display.innerHTML;


document.getElementById("laps")
.appendChild(li);


}

}



function clearLaps(){

document.getElementById("laps").innerHTML="";

}