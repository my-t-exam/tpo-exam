const questions = [
  {
    id: 1,
    question: "HTML là gì?",
    options: [
      "Ngôn ngữ lập trình",
      "Ngôn ngữ đánh dấu",
      "Database",
      "Framework"
    ],
    answer: 1
  },
  {
    id: 2,
    question: "CSS dùng để làm gì?",
    options: [
      "Thiết kế giao diện",
      "Lưu dữ liệu",
      "Tạo server",
      "Excel"
    ],
    answer: 0
  }
];

let timeLeft = 600;

const timerEl =
  document.getElementById("timer");

const questionContainer =
  document.getElementById("question-container");

const resultEl =
  document.getElementById("result");

function renderQuestions() {

  questions.forEach((q, index) => {

    const div =
      document.createElement("div");

    div.className = "question";

    let optionsHTML = "";

    q.options.forEach((opt, i) => {

      optionsHTML += `
        <div class="option">
          <label>
            <input
              type="radio"
              name="q${q.id}"
              value="${i}"
            >
            ${opt}
          </label>
        </div>
      `;

    });

    div.innerHTML = `
      <h3>
        Câu ${index + 1}: ${q.question}
      </h3>

      ${optionsHTML}
    `;

    questionContainer.appendChild(div);

  });

}

renderQuestions();

const timer = setInterval(() => {

  timeLeft--;

  const minutes =
    Math.floor(timeLeft / 60);

  const seconds =
    timeLeft % 60;

  timerEl.innerText =
    `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  if (timeLeft <= 0) {

    clearInterval(timer);

    submitExam();

  }

}, 1000);

document
  .getElementById("submitBtn")
  .addEventListener("click", submitExam);

function submitExam() {

  let score = 0;

  questions.forEach(q => {

    const selected =
      document.querySelector(
        `input[name="q${q.id}"]:checked`
      );

    if (
      selected &&
      Number(selected.value) === q.answer
    ) {
      score++;
    }

  });

  resultEl.innerHTML =
    `Điểm của bạn: ${score}/${questions.length}`;

}