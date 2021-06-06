const jokeEl = $("#joke")[0];
const jokeBtn = $("button")[0];


jokeBtn.onclick = getJoke;



// Variant 1: .then notation for async function

// function getJoke() {
//     const config = {
//         headers: {
//             "Accept":"application/json"
//         }
//     };

//     fetch("https://icanhazdadjoke.com/", config)
//         .then(res => res.json())
//         .then(data => {jokeEl.innerText = data.joke})

// }

// Variant 2: await notation

async function getJoke() {
    const config = {
        headers: {
            "Accept":"application/json"
        }
    };

    const res =  await fetch("https://icanhazdadjoke.com/", config);
    const data = await res.json();
    jokeEl.innerText = data.joke;

}