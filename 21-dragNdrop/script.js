
const fill = document.querySelector(".fill");
const boxes = document.querySelectorAll(".box");

fill.addEventListener("dragstart",dragStart);
fill.addEventListener("dragend", dragEnd);


for(const box of boxes) {
    box.addEventListener("dragover",dragOver);
    box.addEventListener("dragenter",dragEnter);
    box.addEventListener("dragleave",dragLeave);
    box.addEventListener("drop",dragDrop);
}



function dragStart (){
    this.classList.add("hold");
    setTimeout(() => {this.className = "invisible"},0)
}

function dragEnd (){
    this.className="fill";
}

function dragOver (e){
    e.preventDefault();
}

function dragEnter (e){
    e.preventDefault();
    // fill.classList.add("hovering");
    this.classList.add("hoveredOver");
}

function dragLeave (){
    // fill.classList.remove("hovering");
    this.classList.remove("hoveredOver");

}

function dragDrop (){
    this.className="box";
    this.append(fill);
}