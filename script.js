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

const cardDatabase = {
  "F01": {
    id: "F01",
    name: "기초 방화벽-프로토타입",
    traits: ["방화벽", "수비특화"],
    attack: 0,
    attackEffect: "없음",
    defense: 300,
    defenseEffect: "공격력에 의한 피해를 입지 않는다."
  }
  "001": {
    id: "001",
    name: "네트워크 추적자",
    traits: ["공격특화", "자원소모"],
    attack: 200,
    attackEffect: "상대의 방화벽 효과 무시",
    defense: 100,
    defenseEffect: "피격 시 50% 확률로 반격"
  }
};
}