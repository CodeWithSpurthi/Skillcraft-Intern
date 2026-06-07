const menu =
document.querySelector(".menu");


const nav =
document.querySelector("nav");



menu.onclick=function(){

if(nav.style.display==="flex")
{

nav.style.display="none";

}

else
{

nav.style.display="flex";

}

}




function joinNow(){

alert(
"🎉 Welcome to SkillForge Academy!"
);

}





function startLearning(){

document
.getElementById("courses")
.scrollIntoView(
{
behavior:"smooth"
}
);

}





function exploreCourses(){

document
.getElementById("courses")
.scrollIntoView(
{
behavior:"smooth"
}
);

}





function course(name){

alert(
"You selected "+name+
" course 🚀"
);

}





function contactMsg(){

alert(
"Message sent successfully!"
);

}
function project(name){

alert(
"Opening "+name+" 🚀"
);

}



function sendMessage(){

alert(
"Thanks! Your message has been sent."
);

}