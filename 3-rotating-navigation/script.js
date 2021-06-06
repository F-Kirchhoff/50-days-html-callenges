const navBtn = $('input[name=navBtn]');
const menu = $("#menu")[0];
const content = $(".content")[0];

navBtn.change(function(){
    if($(this).is(':checked')) {
        content.classList.add("rotated");
        menu.classList.add("translated");
    } else {
        content.classList.remove("rotated");
        menu.classList.remove("translated");
    }
});