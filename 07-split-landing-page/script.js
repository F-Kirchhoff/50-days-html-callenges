const left = $(".left")[0];
const right = $(".right")[0];
const container = $(".container");

left.addEventListener("mouseover", () => {
    container.addClass("hover-left");
});
left.addEventListener("mouseout", () => {
    container.removeClass("hover-left");
});
right.addEventListener("mouseover", () => {
    container.addClass("hover-right");
});
right.addEventListener("mouseout", () => {
    container.removeClass("hover-right");
});
