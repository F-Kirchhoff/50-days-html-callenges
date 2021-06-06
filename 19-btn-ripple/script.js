const btns = document.querySelectorAll(".btn");

btns.forEach(btn => {
  btn.addEventListener("click", (e) => {
    const btnTop = e.target.offsetTop
    const btnLeft = e.target.offsetLeft
    const x = e.clientX - btnLeft
    const y = e.clientY - btnTop

    console.log(x,y)

    const ripple = document.createElement("span")
    ripple.classList.add("circle")
    ripple.style.top = y + "px"
    ripple.style.left = x + "px"

    
    btn.append(ripple)
    setTimeout(() => ripple.remove(),1000)
  })
})