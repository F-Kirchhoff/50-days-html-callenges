const loadText = $(".loading-text")[0];
const bg = $(".bg")[0];

let load = 0;


let int = setInterval(blurring, 30);

function blurring() {
    load++;
    loadText.innerText = load + "%";
    loadText.style.opacity = scale(load,0,100,1,0);
    bg.style.filter = `blur( ${scale(load,0,100,30,0)}px)`;

    if (load > 99) {
        clearInterval(int);
        loadText.classList.add("removed");
    }
}


function scale (num, in_min,in_max,out_min,out_max) {
    return ((num-in_min)*(out_max-out_min)/(in_max-in_min)+out_min)
}