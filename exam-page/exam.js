
var questionsArray = []

var indexx = 0

var showQuestion = document.getElementById("h22")

var choic1 = document.getElementById("cho1")
var choic2 = document.getElementById("cho2")
var choic3 = document.getElementById("cho3")
var choic4 = document.getElementById("cho4")

var numbOfQuestion = document.querySelector(".numb")
var next = document.querySelector(".next")
var previos = document.querySelector(".Previos")
var markBtn = document.querySelector(".mark2")
var markBox = document.querySelector(".marrk");

var inputes = document.querySelectorAll("input")
var resultBtn = document.querySelector(".Result")


///////////////////////////////////////////////////////////////////////
function Choice(A, B, C, D) {
  this.A = A
  this.B = B
  this.C = C
  this.D = D
}
var choice1 = new Choice("Red", "Green", "Blue", "Black");
var choice2 = new Choice('NewYork', 'Sharm-ElShaikh', "Paris", "Dubai");
var choice3 = new Choice("mouth", "stomach", "twelve", "esophagus");
var choice4 = new Choice("two", "three", "four", "five");
var choice5 = new Choice("Mansoura", "Cairo", "Riyadh", "Baghdad");

function QuestionExam(question, choice, correctAnswer) {
  this.question = question
  this.choice = choice
  this.correctAnswer = correctAnswer
}


function arrQuestion(question, choice, correctAnswer) {

  var arrQuestion = new QuestionExam(question, choice, correctAnswer);
  questionsArray.push(arrQuestion)
}

arrQuestion("What is your favorite color?", choice1, "Black")
arrQuestion("What is your favorite City?", choice2, "Dubai")
arrQuestion('Where does the digestion of carbohydrates begin?', choice3, "mouth")
arrQuestion('What is the colors of flag of Egypt?', choice4, "three")
arrQuestion('What is The Capital of Egypt?', choice5, "Cairo")

console.log("('Dear Constructor') The Correct Answer is (Black), (Dubai), (mouth), (three), (Cairo)");
// making a random array of questions
var questionsRandomArray = randomArrayShuffle(questionsArray);
var answers = new Array(questionsRandomArray.length)

// console.log(questionsRandomArray);
// initializing first Question
function randomArrayShuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

function addQuestion(indexx) {

  showQuestion.innerHTML = questionsRandomArray[indexx].question;
  choic1.innerHTML = questionsRandomArray[indexx].choice.A
  choic2.innerHTML = questionsRandomArray[indexx].choice.B
  choic3.innerHTML = questionsRandomArray[indexx].choice.C
  choic4.innerHTML = questionsRandomArray[indexx].choice.D

  inputes[0].value = questionsRandomArray[indexx].choice.A
  inputes[1].value = questionsRandomArray[indexx].choice.B
  inputes[2].value = questionsRandomArray[indexx].choice.C
  inputes[3].value = questionsRandomArray[indexx].choice.D

  for (var i = 0; i < inputes.length; i++) {

    if (inputes[i].value == answers[indexx]) {
      inputes[i].checked = true;
    } else {
      inputes[i].checked = false;

    }
  }
  numbOfQuestion.innerHTML = `"Question-N"( ${(++indexx)} )`;

} addQuestion(indexx)


//////////////////////////////////////////////////////////////////////////////////////

next.addEventListener("click", function () {
  if (indexx < 4) {
    addQuestion(++indexx)
  }
})

previos.addEventListener("click", function () {
  if (indexx > 0) {
    addQuestion(--indexx)
  }
})

var markArr = [];
markBtn.addEventListener("click", function () {
  if (indexx < 5) {
    var x = indexx + 1

    if (markArr.includes(x) === false) {
      markArr.push(x);
      markBox.innerHTML += `<h3 style="display: flex; justify-content: space-around;"  onclick='clickMark(${indexx})' id="s">  Q - ( ${markArr[markArr.indexOf(x)]} ) <i data-mark="${indexx}"  class="fas fa-trash-alt remove_mark"></i></h3>`

    };
  }
})

document.querySelector('.marrk').addEventListener('click', function (e) {
  if (e.target.classList.contains('remove_mark')) {
    e.target.closest('h3').remove();
    markArr.splice(markArr.indexOf(e.target.dataset.mark), 1)
  }
})

function storeAnswer(value) {
  answers[indexx] = value;
}


function clickMark(indexx) {
  addQuestion(+indexx)

}



var x = 0;
resultBtn.addEventListener('click', function () {

  if (confirm("Are You Sure To Exit From Exam ?!!!")) {
    for (var i = 0; i < answers.length; i++) {
      if (answers[i] == questionsRandomArray[i].correctAnswer) {
        x = x + 20;


      }

    }
    console.log(x);

    localStorage.setItem("myFinalResult", x)
    location.replace("../FinalResults/finalResult.html");

  }
})






var i = 0;
(function () {
  if (i == 0) {
    i = 1;
    var progress = document.getElementById("progress");
    var width = 1;
    var id = setInterval(frame, 1000);
    function frame() {
      if (width >= 100) {
        location.replace("../FinalResults/finalResult.html");
        clearInterval(id);
        i = 0;
        for (var i = 0; i < answers.length; i++) {
          if (answers[i] == questionsRandomArray[i].correctAnswer) {
            x = x + 20;
          }
        }
        localStorage.setItem("myFinalResult", x)
        location.replace("../FinalResults/finalResult.html");
      }
      else {
        width++;
        progress.style.width = width + "%";
        progress.textContent = width + "%";
      }
    }
  }
})();








