const buttons = document.querySelectorAll("button");


buttons.forEach(button =>  {
    button.addEventListener("click", () => {
        const sound = new Audio("sounds/"+button.innerText+".mp3");
        sound.play(); 
    });
});
