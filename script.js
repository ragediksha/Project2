/*LOGIN VALIDATION */

let form = document.querySelector("form");

if(form){
form.addEventListener("submit", function(event){

let email = document.querySelector("input[type='email']");
let password = document.querySelector("input[type='password']");

if(email && password){

if(email.value === "" || password.value === ""){
alert("Please enter email and password");
event.preventDefault();
}
else{
alert("Login Successful! Welcome to Kuchipudi");
}

}

});
}


/* ================= JOIN FORM SUCCESS MESSAGE ================= */

function showMessage(event){
event.preventDefault();

let msg = document.getElementById("successMessage");

if(msg){
msg.style.display = "block";
}
}


/* MUDRA PRACTICE TRACKER  */

let asamyuta = Number(localStorage.getItem("asamyuta")) || 0;
let samyuta = Number(localStorage.getItem("samyuta")) || 0;

function addAsamyuta(){

if(asamyuta < 28){
asamyuta++;
localStorage.setItem("asamyuta", asamyuta);
updateDisplay();
}
else{
alert("You have completed all 28 Asamyuta Mudras!");
}

}

function resetAsamyuta(){
asamyuta = 0;
localStorage.setItem("asamyuta", asamyuta);
updateDisplay();
}

function addSamyuta(){

if(samyuta < 24){
samyuta++;
localStorage.setItem("samyuta", samyuta);
updateDisplay();
}
else{
alert("You have completed all 24 Samyuta Mudras!");
}

}

function resetSamyuta(){
samyuta = 0;
localStorage.setItem("samyuta", samyuta);
updateDisplay();
}

function updateDisplay(){

let aCount = document.getElementById("asamyutaCount");
let sCount = document.getElementById("samyutaCount");

if(aCount && sCount){

aCount.innerText = asamyuta;
sCount.innerText = samyuta;

let aProgress = (asamyuta/28)*100;
let sProgress = (samyuta/24)*100;

document.getElementById("asamyutaBar").style.width = aProgress + "%";
document.getElementById("samyutaBar").style.width = sProgress + "%";

}

}

/* Load saved values when page opens */

window.onload = updateDisplay;


/* ================= DARK MODE TOGGLE ================= */

const toggleBtn = document.getElementById("themeToggle");

if(toggleBtn){

const body = document.body;

/* Load saved theme */

if(localStorage.getItem("theme") === "dark"){
body.classList.add("dark-mode");
toggleBtn.textContent = "☀️";
}

/* Toggle theme */

toggleBtn.addEventListener("click", function(){

body.classList.toggle("dark-mode");

if(body.classList.contains("dark-mode")){
localStorage.setItem("theme", "dark");
toggleBtn.textContent = "☀️";
}
else{
localStorage.setItem("theme", "light");
toggleBtn.textContent = "🌙";
}

});

}

function showMessage(event){

event.preventDefault();   // stops page reload

let message = document.getElementById("successMessage");

if(message){
message.style.display = "block";
}

}


