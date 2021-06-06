const progressbar = $("#progress")[0];
const prev = $("#prev")[0];
const next = $("#next")[0];
const circles = $(".circle").toArray();

console.log(progressbar)
var stage = 1;

next.addEventListener("click", () => {
    if (stage < circles.length) {
        stage++;

        update();
    }
});

prev.addEventListener("click", () => {
    if (stage > 1) {
        stage--;
        update();

    }
});


function update() {
    circles.forEach( (circle,index) => {
        if (index < stage ) {
            circle.classList.add("active");
        } else {
            circle.classList.remove("active");
        }

        progressbar.style.width = (stage-1) / (circles.length-1) * 100 + "%";

        if (stage === 1) {
            prev.disabled = true;
        } else if (stage === circles.length) {
            next.disabled = true;
        } else {
            prev.disabled = false;
            next.disabled = false;
        }
    });
}