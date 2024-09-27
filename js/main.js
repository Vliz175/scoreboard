const scoreOption = document.querySelector("#maxScore");
const displayScore = document.querySelectorAll(".score");
const btn1 = document.querySelector(".p1");
const btn2 = document.querySelector(".p2");
const resetBtn = document.querySelector("#reset");

function reset() {
  isGameOver = false;
  score1 = 0;
  score2 = 0;
  displayScore[0].textContent = score1;
  displayScore[1].textContent = score2;
  btn1.disabled = false;
  btn2.disabled = false;
}

let score1 = 0;
let score2 = 0;
let maxScore = 0;
let isGameOver = true;

btn1.disabled = true;
btn2.disabled = true;

btn1.addEventListener("click", function () {
  score1 += 1;
  displayScore[0].textContent = score1;
  if (score1 == maxScore || score2 == maxScore) {
    console.log(true);
    isGameOver = true;
  }

  if (isGameOver == true) {
    btn1.disabled = true;
    btn2.disabled = true;
  }
});

btn2.addEventListener("click", function () {
  score2 += 1;
  displayScore[1].textContent = score2;
  if (score1 == maxScore || score2 == maxScore) {
    console.log(true);
    isGameOver = true;
  }

  if (isGameOver == true) {
    btn1.disabled = true;
    btn2.disabled = true;
  }
});

scoreOption.addEventListener("change", function () {
  maxScore = this.value;
  reset();
  if (score1 == maxScore || score2 == maxScore) {
    btn1.disabled = true;
    btn2.disabled = true;
  }
});

resetBtn.addEventListener("click", () => {
  if (maxScore != 0) {
    reset();
  }
});
