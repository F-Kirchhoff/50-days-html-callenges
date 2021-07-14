const content = document.querySelector(".content");
const tabBtns = document.querySelectorAll(".tab");

const contentDB = {
  "home": `<img src="src/photo-1626126359831-8f6eb1841c30.webp" alt=""/>`,
  "work": `<img src="src/photo-1626187766775-48eed3cf5c31.webp" alt=""/>`,
  "blog": `<img src="src/photo-1626204836070-f4cb18ae370f.webp" alt=""/>`,
  "aboutUs": `<img src="src/photo-1626244297263-e3020f5b658f.webp" alt=""/>`,
}

const updateContent = () => {
  const contentID = document.querySelector(".tab.active").id;
  content.innerHTML = contentDB[contentID];
}

tabBtns.forEach( btn => btn.addEventListener( "click", () => {
  document.querySelector(".tab.active").classList.remove("active");
  btn.classList.add("active");
  updateContent();
}))


updateContent();

