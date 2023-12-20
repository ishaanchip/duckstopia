let present = document.getElementById("present");
 
let count = document.getElementById("count");

let hint = document.getElementById("hint");

let prize = 
    document.getElementById("thePrize")
let body = document.getElementById("body")

present.addEventListener("click",function(){
  
  var intCount = parseInt(count.textContent);
 intCount--;
 if (intCount==2){ present.classList.add("presentShake");
  
  count.textContent = intCount;
  }else if(intCount ==1){
    present.classList.add("presentExpand");
    count.textContent = intCount;
  }
  else if(intCount==0){
    hint.textContent = "'Donald Duck !'";
    present.classList.add("presentSlide");
    prize.classList.remove("hide");
    body.classList.add("finalColor")
}
})
