const quizDiv = document.getElementById("quiz");
const resultDiv = document.getElementById("result");
const submitBtn = document.getElementById("submitBtn");

console.log("app.js loaded");
console.log("questions:", questions);

function renderQuiz() {
  quizDiv.innerHTML = "";

  questions.forEach((q, i) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <h3>${i + 1}. ${q.question}</h3>
      ${Object.keys(q.options).map(key => `
        <label>
          <input type="radio" name="q${i}" value="${key}">
          ${key}. ${q.options[key]}
        </label><br>
      `).join("")}
      <hr>
    `;
    quizDiv.appendChild(div);
  });
}

function submitQuiz() {
  let score = 0;

  questions.forEach((q, i) => {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    if (selected && selected.value === q.answer) {
      score++;
    }
  });

  resultDiv.innerHTML = `Bạn đúng: ${score}/${questions.length}`;
}

submitBtn.onclick = submitQuiz;

renderQuiz();