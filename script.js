const questionData = [
  {
    id: 1,
    question: "The Centre for Cellular and Molecular Biology is situated at?",
    options: ["Patna", "Jaipur", "New Delhi", "Hyderabad"],
    answer: "Hyderabad",
  },
  {
    id: 2,
    question: "Where is the Railway Staff College located?",
    options: ["Pune", "Delhi", "Vadodara", "Allahabad"],
    answer: "Vadodara",
  },
  {
    id: 3,
    question: "The famous Dilwara Temples are situated in?",
    options: ["Uttar Pradesh", "Rajasthan", "Maharashtra", "Madhya Pradesh"],
    answer: "Rajasthan",
  },
  {
    id: 4,
    question: "Wadia Institute of Himalayan Geology is located at?",
    options: ["Delhi", "Shimla", "Dehradun", "Kulu"],
    answer: "Dehradun",
  },
  {
    id: 5,
    question: "Bijapur is known for its?",
    options: ["severe drought condition", "heavy rainfall", "Gol Gumbaz", "statue of Gomateswara"],
    answer: "Gol Gumbaz",
  },
];
let questionIndex = 0;
let rightAnswers = 0;
let wrongAnswers = 0;

// console.log(question)
let main = document.querySelector(".main");
let strtBtn = document.querySelector(".strt-btn");
let nextBtn = document.querySelector(".nxt-btn");
let subBtn = document.querySelector(".sub-btn");
strtBtn.addEventListener("click", (e) => {
  
  let question = questionData[questionIndex];
  let dynamicQuestion = document.querySelector(".dynamic-question");
  dynamicQuestion.innerHTML = `
  <div class="question">${question.question}</div>
          <div class="options">
            <select class="option">
            <option>Select Option</option>
              ${question.options.map((item) => {
                return `<option value="${item}">${item}</option>`;
              })}
            </select>
          </div>
  `;
  document.querySelector(".option").addEventListener("change", () => {
    let rightAnswer = question.answer;
    let selectedAnswer = document.querySelector(".option").value;
    // console.log(rightAnswer, selectedAnswer);
    document.querySelector(".status").style.visibility = "";
    if (rightAnswer == selectedAnswer) {
      document.querySelector(
        ".status"
      ).innerHTML = `<h3 class="status-heading">Status : Right Answer</h3>`;
      document.querySelector(".status-heading").style.backgroundColor = "green";
      rightAnswers++;
    } else {
      document.querySelector(
        ".status"
      ).innerHTML = `<h3 class="status-heading">Status : Wrong Answer</h3>`;
      wrongAnswers++;
    }
  });
  document.querySelector(".status").style.visibility = "hidden";
  strtBtn.style.display = "none"
  nextBtn.style.display = "block"
});


nextBtn.addEventListener("click", (e) => {
  questionIndex++;
  let question = questionData[questionIndex];
  let dynamicQuestion = document.querySelector(".dynamic-question");
  dynamicQuestion.innerHTML = `
  <div class="question">${question.question}</div>
          <div class="options">
            <select class="option">
            <option>Select Option</option>
              ${question.options.map((item) => {
                return `<option value="${item}">${item}</option>`;
              })}
            </select>
          </div>
  `;
  document.querySelector(".option").addEventListener("change", () => {
    let rightAnswer = question.answer;
    let selectedAnswer = document.querySelector(".option").value;
    // console.log(rightAnswer, selectedAnswer);
    document.querySelector(".status").style.visibility = "";
    if (rightAnswer == selectedAnswer) {
      document.querySelector(
        ".status"
      ).innerHTML = `<h3 class="status-heading">Status : Right Answer</h3>`;
      document.querySelector(".status-heading").style.backgroundColor = "green";
      rightAnswers++;
    } else {
      document.querySelector(
        ".status"
      ).innerHTML = `<h3 class="status-heading">Status : Wrong Answer</h3>`;
      wrongAnswers++;
    }
  });

  if (questionIndex == questionData.length -1) {
    nextBtn.style.display = "none"
    subBtn.style.display = "block"
  }
  document.querySelector(".status").style.visibility = "hidden";
  console.log(rightAnswers, wrongAnswers);
 
});

subBtn.addEventListener("click", ()=>{
  let percentage = (rightAnswers/(questionData.length))*100
  let result;
  if(percentage > 33){
    result = "Pass"
  }else{
    result = "Fail"
  }
  let dynamicQuestion = document.querySelector(".dynamic-question");
  dynamicQuestion.innerHTML = `<div class="result-box">
  <div class="score">Score : ${percentage.toFixed(2)}%</div>
  <div class="details">
  <h3>Totle Questions : ${questionData.length}</h3>
    <h3>Totle Right Questions : ${rightAnswers}</h3>
    <h3>Totle Wrong Questions : ${wrongAnswers}</h3>
  </div>
  <div class="final-result">Final Result : ${result}</div>
</div>`
  subBtn.style.display = "none"
  document.querySelector(".status").style.visibility = "hidden";
})
