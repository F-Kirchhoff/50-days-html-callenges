const emptyGlass = document.querySelector(".emptyGlass");
const emptyGlassLabel = document.querySelector(".emptyGlass h1");
const fullGlass = document.querySelector(".fullGlass");
const fullGlassLabel = document.querySelector(".fullGlass h1")
const smallcups = document.querySelectorAll(".smallcup");
let progress = 0;

// updateBigCup();

smallcups.forEach((cup,idx) => {
  
  cup.addEventListener("click", () => {
    let index = idx;
    if(isLastFullCup(cup)) {
      index--;
    }
    
    updateSmallCups(index);
    progress = 100/8*(index+1);
    updateBigCup();
    
  });
});

function updateBigCup(){
  emptyGlass.style.height = (100-progress) + "%";
  emptyGlassLabel.innerText = 0.02*(100-progress) + "L";
  
  fullGlass.style.height = progress+"%";
  if (progress === 0) {
    fullGlassLabel.style.display = "none";
  } else {
    fullGlassLabel.style.display = "block";
  }
  fullGlassLabel.innerText = progress+"%";
}

function updateSmallCups(idx) {
  smallcups.forEach(cup => {
    cup.classList.remove("filled");
  })
  Array.from(smallcups).splice(0,idx+1).forEach(cup => {
    cup.classList.add("filled");
  });

}

function isLastFullCup(cup) {
  return cup.classList.contains("filled") && (!cup.nextElementSibling || !cup.nextElementSibling.classList.contains("filled")); 
}