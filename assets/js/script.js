var startBtn = document.getElementById('start-btn')
var homepageEl = doucment.getElementById('homepage-card')
var questionEl = document.getElementById('question-card')
var scorecardEl = document.getElementById('score-card')
var highScoreEl = document.getElementById('high-score-card')




var questions = [
  {
    question: "What player caught the immaculate reception?" 
    choices: ["Rockly Bleier", "Jerome Bettis", "Frano Harris", "Lynn Swann"]
    answer: "Franco Harris"
  }
  {
    question: "What player returned an interception for a touchdown in the Steelers Super Bowl victory over the Cardinals?" 
    choices: ["Greg Lloyd", "James Harrison", "Rod Woodson", "Troy Polomalu"]
    answer: "James Harrision"
  }
  {
    question: "What college did Terry Bradshaw attend?" 
    choices: ["Louisiana Tech", "The Ohio State University", "SMU", "Texas Tech"]
    answer: "Louisiana Tech"
  }
  {
    question: "Who did the Steelers beat in their first regular season game?" 
    choices: ["Baltimore Colts", "Green Bay Packers", "Dallas Cowboys", "Cleveland Browns"]
    answer: "Cleveland Browns"
  }
  {
    question: "How many Super Bowl wins do the Steelers have?" 
    choices: ["4", "5", "6", "7"]
    answer: "6"
  }
  {
    question: "How many Super Bowls have the Steelers been to?" 
    choices: ["5", "6", "7", "8"]
    answer: "8"
  }
  {
    question: "What team have the Steelers beat twice in the Super Bowl?" 
    choices: ["New York Giants", "Green Bay Packers", "Dallas Cowboys", "Los Angeles Rams"]
    answer: "Dallas Cowboys"
  }
  {
    question: "What year did the Steelers win their first Super Bowl?" 
    choices: ["1974", "1975", "1978", "1979"]
    answer: "1975"
  }
]


function startQuiz() {
  console.log('started')

  nextQuestion();
}

function nextQuestion() {

}

function scoreCard() {

}

function highScore() {
  
}


startBtn.addEventListener('click', startQuiz)