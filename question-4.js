//program to change duck text on hover
const duck = document.getElementById("duck");
let duckText = document.getElementById("text")

const original = duckText.textContent;

let duckClick = 1;
duck.addEventListener("click",function(){
  duckClick++
  if (duckClick%2==0){
  duckText.textContent = "just do it."
  }else{
    duckText.textContent = original;
  }
})


//program to check and change based on inputed answer
let ans = document.getElementById("answer")

let button = document.getElementById("rightButton")

let text= document.getElementById("text");

let textbox = document.getElementById("duckText");

ans.addEventListener("input",function(){
  let answer = ans.value
  if (answer==7){
    button.classList.remove("hide");
    text.textContent="Hard work pays off !";
 textbox.classList.add("correctDuckText");
    ans.classList.add("unclickable");
    duck.classList.add("unclickable");
  }
 
})
