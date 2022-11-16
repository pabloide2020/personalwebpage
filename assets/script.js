const questionBox = document.getElementsByClassName("faq-question");

for (let question of questionBox) {
  console.log(question);
  question.addEventListener("click", () => {
    question.classList.toggle("question-active");
  });
}