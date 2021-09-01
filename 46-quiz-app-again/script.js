
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


function dynamicGradient (firstNodeArr,secondNodeArr,duration,target) {

  const RESOLUTION = 140;
  const firstNodeRGB = firstNodeArr.map ( hexToRGB );
  const secondNodeRGB = secondNodeArr.map ( hexToRGB );

  const inc = firstNodeArr.length / RESOLUTION;
  const timeStep = Math.floor(duration / RESOLUTION)
  const ColorNum = firstNodeArr.length

  function nextColor(firstNodeRGB,secondNodeRGB,count = 0) {

    const firstNodeC1 = firstNodeRGB[Math.floor(count)%ColorNum];
    const firstNodeC2 = firstNodeRGB[Math.floor(count+1)%ColorNum];
    const secondNodeC1 = secondNodeRGB[Math.floor(count)%ColorNum];
    const secondNodeC2 = secondNodeRGB[Math.floor(count + 1)%ColorNum];

    const firstNode = interpolateColor(firstNodeC1,firstNodeC2, count%1);
    const secondNode = interpolateColor(secondNodeC1,secondNodeC2, count%1)


    target.style.backgroundImage = `
      linear-gradient(135deg, 
        rgb(${firstNode[0]},${firstNode[1]},${firstNode[2]}),
        rgb(${secondNode[0]},${secondNode[1]},${secondNode[2]})
      )`

    setTimeout( _ => nextColor(firstNodeRGB,secondNodeRGB,(count+inc)%(firstNodeArr.length)), timeStep)
  }
  console.log({firstNodeRGB,secondNodeRGB})
  nextColor(firstNodeRGB,secondNodeRGB);

}

function hexToRGB(h) {
  let r = 0, g = 0, b = 0;

  // 3 digits
  if (h.length == 4) {
    r = "0x" + h[1] + h[1];
    g = "0x" + h[2] + h[2];
    b = "0x" + h[3] + h[3];

  // 6 digits
  } else if (h.length == 7) {
    r = "0x" + h[1] + h[2];
    g = "0x" + h[3] + h[4];
    b = "0x" + h[5] + h[6];
  }
  
  return [parseInt(r),parseInt(g),parseInt(b)];
}

function interpolateColor(color1,color2,per) {
  return [
    linScale(color1[0],color2[0],per),
    linScale(color1[1],color2[1],per),
    linScale(color1[2],color2[2],per),
  ]
}

function linScale(min,max,per) {
  return min * (1-per) + max * per
}