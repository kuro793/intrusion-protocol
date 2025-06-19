const logEl = document.getElementById("log");
const inputEl = document.getElementById("commandInput");

inputEl.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const command = inputEl.value.trim();
    inputEl.value = "";
    log("> " + command);
    handleCommand(command);
  }
});

function log(text) {
  const line = document.createElement("div");
  line.textContent = text;
  logEl.appendChild(line);
  logEl.scrollTop = logEl.scrollHeight;
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