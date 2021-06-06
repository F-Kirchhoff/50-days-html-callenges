
authorData = [
  {
    name: "Jon Doe",
    profileImg: "https://randomuser.me/api/portraits/men/45.jpg"
  },
  {
    name: "Jane Johnson",
    profileImg: "https://randomuser.me/api/portraits/women/45.jpg"
  }
]

cardData = [
  {
    img: "https://source.unsplash.com/random/300x200",
    title: "lorem ipsum dolor sit amet.",
    excerpt: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, facere!",
    author: authorData[0],
    date: "Oct. 8, 2020"
  },
  {
    img: "https://source.unsplash.com/random/300x200",
    title: "SpaceX lands on Mars",
    excerpt: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, facere!",
    author: authorData[1],
    date: "Oct. 15, 2024"
  },
  {
    img: "https://source.unsplash.com/random/300x200",
    title: "Another Text",
    excerpt: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, facere!",
    author: authorData[1],
    date: "May. 15, 2020"
  },
  {
    img: "https://source.unsplash.com/random/300x200",
    title: "Super important thing",
    excerpt: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, facere!",
    author: authorData[0],
    date: "Oct. 15, 2020"
  }
]



const cardProto = document.querySelector(".card")
for (i=0; i<cardData.length-1; i++) {
  document.body.appendChild(cardProto.cloneNode(true))
}

cards.forEach(loadContent)





function fetchData(idx) {
  return new Promise((resolve,reject) => {
    setTimeout(() => resolve(cardData[idx]),1000 + Math.random()*1000)
  })
}


const cards= document.querySelectorAll(".card")

async function loadContent(card,idx) {

  const data = await fetchData(idx)

  const headerImg = card.querySelector(".card-header img")
  const title = card.querySelector(".card-content .card-title")
  const excerpt = card.querySelector(".card-content .card-excerpt")
  const authorImg = card.querySelector(".author img")
  const authorName = card.querySelector(".author-info strong")
  const date = card.querySelector(".author-info small")

  headerImg.src = data.img
  headerImg.classList.remove("animated-bg")

  title.innerText = data.title
  title.classList.remove("animated-bg")
  
  excerpt.innerText = data.excerpt
  
  authorImg.src = data.author.profileImg
  authorImg.classList.remove("animated-bg")

  authorName.innerText = data.author.name
  authorName.classList.remove("animated-bg")

  date.innerText = data.date
  date.classList.remove("animated-bg")

}
