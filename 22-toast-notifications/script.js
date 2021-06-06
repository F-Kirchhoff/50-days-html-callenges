const btn = document.querySelector(".toast-btn");
const toastContainer =document.querySelector(".toast-container")

let counter = 1;




const sleep = (time) => {
  return new Promise(resolve => setTimeout(resolve,time));
}

const createToast = (msg) => {
  const toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = msg;
  return toast
}

const removeToast = async() => {
  const latestToast = toastContainer.querySelector(".toast:not(.exit-right)");
  latestToast.classList.add("exit-right");
  await sleep(500);
  latestToast.remove();  
}



const spawnToast = async() => {
  toastContainer.append(createToast((`Toast ${counter}`)));
  counter++;
  await sleep(4000);
  removeToast();
}

btn.addEventListener("click",spawnToast);
