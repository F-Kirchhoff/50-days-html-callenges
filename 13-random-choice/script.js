const choiceDisplay = document.querySelector(".choices");
const input = document.querySelector(".userInput textarea");

input.focus();

input.addEventListener("keyup", (event) => {
    choices = event.target.value.split(",").filter(choice => choice.trim() !=="").map(choice => choice.trim());
    
    if (event.code === "Enter") {
        input.value = "";
        let choicelist = document.querySelectorAll(".choice");
        lotto(30);

    } else {
        choicesHTML = "";
        choices.forEach(choice => {
            choicesHTML += `<div class="choice">${choice}</div>\n`
        });
        choiceDisplay.innerHTML = choicesHTML;
    }
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function lotto(rounds) {
    
    for(i=0;i<rounds;i++) {
        choicelist = document.querySelectorAll(".choice:not(.winner)");

        let winnerDiv=document.querySelector(".winner")
        if(winnerDiv){winnerDiv.classList.remove("winner")};
        
        choicelist[Math.floor(Math.random()*choicelist.length)].classList.add("winner");
        await sleep(100);
    }
}