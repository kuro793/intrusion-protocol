const startupInput = document.getElementById("startupInput");
const startupError = document.getElementById("startupError");
const startupScreen = document.getElementById("startup");
const mainScreen = document.getElementById("main");
const mainInput = document.getElementById("mainInput");
const logEl = document.getElementById("log");

startupInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const input = startupInput.value.trim();
    startupInput.value = "";

    if (input.startsWith("connect")) {
      const parts = input.split(" ");
      if (parts.length === 2 && parts[0] === "connect") {
        if (parts[1] === "46605") {
          transitionToMain();
        } else {
          showStartupError("포트 연결 실패: 존재하지 않는 포트입니다.");
        }
      } else {
        showStartupError("허가되지 않은 명령어 형식입니다.");
      }
    } else {
      showStartupError("허가되지 않은 명령어입니다.");
    }
  }
});

function showStartupError(message) {
  startupError.textContent = "Error: " + message;
  startupError.classList.remove("hidden");
}

function transitionToMain() {
  startupScreen.classList.add("hidden");
  mainScreen.classList.remove("hidden");
  log("> 시스템에 접속됨. 연결 완료.");
  mainInput.focus();
}

mainInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const command = mainInput.value.trim();
    mainInput.value = "";
    log("> " + command);
    // 나중에 명령어 처리 추가
  }
});

function log(text) {
  const div = document.createElement("div");
  div.textContent = text;
  logEl.appendChild(div);
  logEl.scrollTop = logEl.scrollHeight;
}