const boxes = $(".box").toArray();

console.log(boxes);
console.log(boxes[0]);

window.addEventListener("scroll",checkBoxes);

checkBoxes();

function checkBoxes() {
    const triggerY = window.innerHeight / 5 * 4;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < triggerY) {
            box.classList.add("show");
        } else {
            box.classList.remove("show");
        }
    });
};