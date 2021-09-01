
const btns = document.querySelectorAll('.btn');
const submitBtn = document.getElementById('send');
const overlay = document.querySelector('.overlay');

const state = {
  feedback: null,
  display: 'form',
};


btns.forEach(btn => {
  
  btn.addEventListener( 'click', e => {

    const feedback = btn.id;
    state.feedback = feedback;
    
    updateBtns(state);

  })
})

submitBtn.addEventListener('click', _ => {

  if (!state.feedback) return

  showAlert(state);

})


function updateBtns(state) {

  btns.forEach(btn => {

    if (btn.id === state.feedback) {
      btn.classList.add('selected');
    } else {
      btn.classList.remove('selected');
    }

  })

}

function showAlert(state) {

  const acceptFeedbackBtn = document.getElementById('acceptFeedbackBtn');
  const feedbacktext = document.getElementById('feedbacktext');

  console.log(acceptFeedbackBtn)
  acceptFeedbackBtn.addEventListener('click', _ => {
    overlay.classList.remove('show');
  })

  feedbacktext.innerHTML = `Thanks for your feedback! You are ${state.feedback} with our service.`

  overlay.classList.add('show')

}