let tasks =
JSON.parse(localStorage.getItem("tasks")) || [];


function save(){

localStorage.setItem(
"tasks",
JSON.stringify(tasks)
);

}



function addTask(){


let text =
prompt("Enter task");


if(!text)return;


tasks.push({

text:text,
done:false,
priority:"High"

});


save();

display();

}




function display(list=tasks){


let box =
document.getElementById("tasks");


box.innerHTML="";


tasks.forEach((t,i)=>{


box.innerHTML += `

<div class="task">


<div onclick="complete(${i})"
class="${t.done?'done':''}">

<h3>${t.text}</h3>

<span class="tag">
${t.priority}
</span>

</div>


<button class="delete"
onclick="removeTask(${i})">

✕

</button>


</div>

`;


});


update();


}





function complete(i){

tasks[i].done =
!tasks[i].done;


save();

display();

}



function removeTask(i){

tasks.splice(i,1);

save();

display();

}




function update(){


let total=tasks.length;


let done =
tasks.filter(x=>x.done).length;


let pending =
total-done;


let p =
total?
Math.round(done/total*100):0;



document.getElementById("total")
.innerHTML=total;


document.getElementById("done")
.innerHTML=done;


document.getElementById("pending")
.innerHTML=pending;


document.getElementById("percent")
.innerHTML=p+"%";


document.querySelector(".circle")
.style.background=
`conic-gradient(#8b5cf6 ${p*3.6}deg,#ffffff20 ${p*3.6}deg)`;


}




function searchTask(){


let value =
search.value.toLowerCase();


display(
tasks.filter(
x=>x.text.toLowerCase()
.includes(value)
)
);


}



display();