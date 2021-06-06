import KEY from "./env";

const API_URL = "https://api.github.com/graphql";
const API_KEY = KEY;

const textInput = document.getElementById("gitsearch");
const avatar = document.getElementById("avatar");
const bioEl = document.getElementById("bio");
const usernameEl = document.getElementById("username");
const pofileLinkEl = document.getElementById("profile");
const followerEl = document.getElementById("followers");
const followingEl = document.getElementById("following");
const result = document.getElementById("result");
const reposEl = Array.from(document.querySelectorAll(".repo"));
const createUserQuery = (username) => 
  `query {
    user(login: "${username}") {
      bio
      url
      avatarUrl
      name
      followers {
        totalCount
      }
      following {
        totalCount
      }
      repositories (last: 3) {
        nodes {
          name
          url
        }
      }    
    }
  }`


const getUserData = async(query) => {

  res = await fetch(API_URL,{
    method: "POST",
    headers:{"Authorization": `bearer ${API_KEY}`},
    body: JSON.stringify({query: query})
  })
  data = await res.json();
  return data.data.user;
}

const displayUserData = (username,data) => {
  const {bio,
    avatarUrl,
    url: profileUrl,
    name,
    followers: {totalCount: followers}, 
    following: {totalCount: following},
    repositories: {nodes: repos} 
  } = data;

  avatar.src = avatarUrl;
  pofileLinkEl.href = profileUrl;
  usernameEl.innerText = name!= null ? name : username;
  bioEl.innerText = bio;
  followerEl.innerText = `followers: ${followers}`;
  followingEl.innerText = `following: ${following}`;
  
  reposEl.forEach(repoEl => repoEl.style.display = "none");
  repos.map((repo,idx) => {
    reposEl[idx].innerText = repo.name;
    reposEl[idx].href = repo.url;
    reposEl[idx].style.display = "block";
  });

  result.style.display = "flex";
}

textInput.addEventListener("submit", async(e) => {
  e.preventDefault();
  const username = e.target.querySelector("input").value;
  const query = createUserQuery(username);
  const data = await getUserData(query);
  if (data) {
    displayUserData(username,data);
  } else {
    console.log("user not found.")
    result.style.display = "none";
  }
  e.target.querySelector("input").value = "";
});


