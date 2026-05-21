const quizDiv = document.getElementById("quiz");
const resultDiv = document.getElementById("result");
const submitBtn = document.getElementById("submitBtn");

// render câu hỏi
function renderQuiz() {
  questions.forEach((q, index) => {
    const div = document.createElement("div");
    div.className = "question";

    let html = `<h3>${index + 1}. ${q.question}</h3>`;

    for (let key in q.options) {
      html += `
        <label class="option">
          <input type="radio" name="q${index}" value="${key}">
          ${key}. ${q.options[key]}
        </label>
      `;
    }

    div.innerHTML = html;
    quizDiv.appendChild(div);
  });
}

// chấm điểm
function submitQuiz() {
  let score = 0;

  questions.forEach((q, i) => {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    if (selected && selected.value === q.answer) {
      score++;
    }
  });

  resultDiv.innerHTML = `✅ Bạn đúng: ${score} / ${questions.length}`;
}

submitBtn.addEventListener("click", submitQuiz);

renderQuiz();