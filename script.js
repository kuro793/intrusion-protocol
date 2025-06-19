const logEl = document.getElementById("log");

function log(text) {
  const line = document.createElement("div");
  line.textContent = text;
  logEl.appendChild(line);
  logEl.scrollTop = logEl.scrollHeight;
}

window.onload = () => {
  document.getElementById("main").classList.add("hidden");
  document.getElementById("startup").classList.remove("hidden");
}

function logToMain(text) {
  const logDiv = document.getElementById("log");
  const line = document.createElement("div");
  line.textContent = text;
  logDiv.appendChild(line);
}

function transitionToMain() {
  document.getElementById("startup").classList.add("hidden");
  document.getElementById("main").classList.remove("hidden");
}

function handleCommand(cmd) {
  if (cmd === "help") {
    log("Available commands: draw, use [card], status, end");
  } else if (cmd === "draw") {
    log("You drew a card: 🖥️ Terminal");
  } else {
    log("Unknown command: " + cmd);
  }
}

function handleStartupCommand(cmd) {
  if (cmd === "connect 46605") {
    transitionToMainScreen();
  } else {
    log("Error: Invalid Command: " + cmd);
  }
}

const startupInput = document.getElementById("startupInput");
const errorMessage = document.getElementById("errorMessage");

startupInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const command = startupInput.value.trim();
    startupInput.value = "";
    if (command === "connect 46605") {
      errorMessage.classList.add("hidden");
      logToMain("> connect 46605");
      transitionToMain();
    } else {
      showError("Error: Invalid Command");
    }
  } else {
    // 입력 도중 오류 메시지 숨김
    errorMessage.classList.add("hidden");
  }
});

function showError(message) {
  errorMessage.textContent = message;
  errorMessage.classList.remove("hidden");
}