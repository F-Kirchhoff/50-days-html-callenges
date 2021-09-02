
import dynamicGradient from "./dynamicGradient";

const quizInterface = document.getElementById('quiz');
const content = document.querySelector('.content');
const body = document.body;


firstNodeColors = ['#1F3938','#5E9872','#81CDE9'];
secondNodeColors = ['#0CAADC','#1F3938','#1A5D79'];


dynamicGradient(firstNodeColors,secondNodeColors,8000,body)



const QUIZDATA = {
  questions: [
    {
      question: 'Which language runs in a web browser?',
      answers: [
        'Java','C','Python','JavaScript'
      ],
      solution: 'JavaScript',
    },
    {
      question: 'What does CSS stand for?',
      answers: [
        'Central Style Sheet','Cascading Style Sheet','Cascading Simple Sheet','Cars SUVs Sailboats'
      ],
      solution: 'Cascading Style Sheet',
    },
    {
      question: 'What does HTML stand for?',
      answers: [
        'Hypertext Markup Language','Hypertext Markdown language','Hyperloop Machine Language','Helicopters Terminals Machines Linguini'
      ],
      solution: 'Hypertext Markup Language',
    },
    {
      question: 'What year was Javascript launched?',
      answers: [
        '1996','1995','1994','none of the above'
      ],
      solution: '1995',
    },
  ],
  score: 0,
}


let stage = 0


quizInterface.addEventListener('submit', e => {
  e.preventDefault();

  const answer = e.target.question.value;

  if (answer === QUIZDATA.questions[stage].solution) { QUIZDATA.score = QUIZDATA.score + 1}
  console.log(QUIZDATA.score)

  stage++

  if (stage >= QUIZDATA.questions.length) {
    content.innerHTML = `
    <h2>Your Score: ${QUIZDATA.score}/${QUIZDATA.questions.length} correct!</h2>
    `
  } else {
    updateContent(stage)
  }
})



function updateContent (stage) {

  if (stage >= QUIZDATA.questions.length || stage < 0) {
    console.log("Error, stage counter out of bound");
    return
  } 

  const question = QUIZDATA.questions[stage]

  
  const questiontext =`
  <h2>${question.question}</h2>
  `
  
  const answertexts = question.answers.map((answer,idx) => `
  <div>
  <input type="radio" name="question" value="${answer}" id="ans${answer}" />
  <label for="ans${answer}">${answer}</label>
  </div>`
  )
  
  content.innerHTML = questiontext+ answertexts.join("")
  
}

updateContent(0)



















// background animation

