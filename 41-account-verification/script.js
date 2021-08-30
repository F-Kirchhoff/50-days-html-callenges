const digits = document.querySelectorAll(".digit-input");
const container = document.querySelector(".container");

const SECRET = "123456";

digits.forEach( (digit,idx) => {
  digit.addEventListener( "keydown", e => {
    e.preventDefault();
    container.classList = "container";

    if (e.keyCode >= 49 && e.keyCode <= 58) {
      // Input digit
      digit.value = e.key;

      if (idx < 5) {
        digits[idx + 1].focus();
      } else if (idx === 5) {
        digit.blur();
      }
      
      if ( isInputComplete() ) {

        const isCorrect = checkInput();
        if (isCorrect) {
          handleSuccess();
        }
        else {
          handleError();
        }
      }
        
    } else if (e.keyCode === 8 ) {
      // backspace

      digit.value = null;

      if (0 < idx) {
        digits[idx - 1].focus();
      }

    }

    if (digit.value) {
      digit.classList.add("filled");
    } else {
      digit.classList.remove("filled");
    }

  })
})


const checkInput = () => {
  let _count = 0
  digits.forEach( (digit,idx) => {
    if( digit.value === SECRET[idx]) {
      _count++;
    }
  })

  return _count === 6;
}

const handleSuccess = () => {
  container.classList.add("success");
}

const handleError = () => {
  container.classList.add("error");
}

const isInputComplete = (idx = 0) => {
  return idx === 6 ? true : digits[idx].value ? isInputComplete(idx + 1) : false;
}
