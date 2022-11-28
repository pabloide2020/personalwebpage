const questionBox = document.getElementsByClassName("faq-question");

for (let question of questionBox) {
  console.log(question);
  question.addEventListener("click", () => {
    question.classList.toggle("question-active");
  });
}

window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    }
  }
}
