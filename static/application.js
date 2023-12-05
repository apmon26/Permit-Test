app.use("/static", express.static('./static/'));


const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optionContainer = document.querySelector(".option-container");


let questionCounter = 0;
let currentQuestion = 0; 
let avaibleQuestions = [];
let avaibleContainers = [];

// push the questions into avaibleQuestions Array
function setAvaibleQuestions(){
    const totalQuestion = quiz.length;
    for (let i = 0; i < totalQuestion; i++) {
        avaibleQuestions.push(quiz[i])
    }

}

function getNewQuestion(){
    questionNumber.innerHTML = "Question " + (questionCounter + 1) + "of" + quiz.length;

    // set question text
    // get random question

    const questionIndex = avaibleQuestions[Math.floor(Math.random() * avaibleQuestions.length)]; 
    currentQuestion = questionIndex;
    questionText.innerHTML = currentQuestion.q;

    const index1 = avaibleQuestions.indexOf(questionIndex);
      //console.log(index1)
      //console.log(questionIndex)
      avaibleQuestions.splice(index1, 1);
    

    const optionLen = currentQuestion.options.length;
    for(let i =0;  i< optionLen ;  i++){
        avaibleOptions.push(i)
    }

    for(let i=0; i<optionLen; i++) {
        const option = document.createElement('div');
        option.innerHTML = currentQuestion.options[i];
        option.id = i;
        option.className = "option";
        optionContainer.appendChild(option)
    }
    questionCounter++
}

function next(){
    if(questionCounter >= quiz.length) {
        console.log("Quiz Over");
    }
    else{
        getNewQuestion();
    }
}

window.onload = function(){
    setAvaibleQuestions();

    getNewQuestion();
}
