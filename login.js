//program to change duck text on hover
const duck = document.getElementById("duck");
let duckText = document.getElementById("text")

const original = duckText.textContent;

let duckClick = 0;
duck.addEventListener("click",function(){
  duckClick++
  if (duckClick%2==0){
  duckText.textContent = "Concat the clue fragments to find the password !"
  }else{
    duckText.textContent = original;
  }
})

const button = document.getElementById("signInBut");

let  password = document.getElementById("password");

let ticket = document.getElementById("ticket");

password.addEventListener("input",function(){
  var tik = ticket.value;
  var pass = password.value;
  if (pass.toLowerCase()=="hueydewielouie"&&tik=="604760"){
    button.classList.remove("hide");
  }
 
 
  
})
ticket.addEventListener("input",function(){
   var tik = ticket.value;
  var pass = password.value;
  if (pass.toLowerCase()=="hueydewielouie"&&tik=="604760"){
    button.classList.remove("hide");
  }
  })
