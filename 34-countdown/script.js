const countStart = 40;

const numspan = document.querySelector( ".nums" ).children[0];
const countdownContainer = document.querySelector( ".countdown" );
const restartBtn = document.getElementById( "restart" );


countDown(countStart, numspan);

restartBtn.addEventListener( "click", () => {
  countdownContainer.classList.remove( "finished" );
  countDown(countStart, numspan);
})


function countDown(idx, span) {
  if ( idx < 0 ) {
    countdownContainer.classList.add( "finished" );
    return
  }
  span.classList.remove( "in" );
  span.innerText = idx;
  setTimeout(() => {
    setTimeout(() => countDown( idx - 1, span ), 999 );
    span.classList.add( "in" );
  }, 1);
  
}