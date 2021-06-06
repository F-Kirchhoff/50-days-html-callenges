const [mastodon,github,diaspora] = document.querySelectorAll(".counter");
const steps = 155;
const followers = {
  "mastodon": 12000,
  "github": 6000,
  "diaspora": 329
}

countUp(mastodon,followers["mastodon"]);
countUp(github,followers["github"]);
countUp(diaspora,followers["diaspora"]);

async function countUp(counter,final) {
  let current = 0;
  while (current <= final) {
    counter.innerText = current;
    await sleep(1);
    current+=Math.ceil(final/steps);
  }
  counter.innerText = final;
}


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}