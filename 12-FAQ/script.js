const buttons = $(".faq .faq-toggle").toArray();

buttons.forEach((button) => {
    button.onclick = () => {
        button.parentNode.classList.toggle("active");
    }
});
