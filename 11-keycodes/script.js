const keyDisplay = $("#Key .display")[0];
const keycodeDisplay = $("#KeyCode .display")[0];
const codeDisplay = $("#Code .display")[0];

window.addEventListener("keydown", (e) => {
    keyDisplay.innerText = e.key;
    keycodeDisplay.innerText = e.keyCode;
    codeDisplay.innerText = e.code;
    $("#Key")[0].style.display="block";
    $("#KeyCode")[0].style.display="block";
    $("#Code")[0].style.display="block";
    $("#starter")[0].style.display="none";
})