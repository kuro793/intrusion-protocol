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
const mainInput = document.getElementById("mainInput");
const startupScreen = document.getElementById("startup");
const mainScreen = document.getElementById("main");

startupInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const command = startupInput.value.trim();
    startupInput.value = "";
    if (command === "connect 46605") {
      logToMain("> connect 46605");
      transitionToMain();
    } else {
      logToStartup("Error: Invalid Command");
    }
  }
});

function transitionToMain() {
  startupScreen.classList.add("hidden");
  mainScreen.classList.remove("hidden");
  mainInput.focus();
}

// 로그 출력 함수들
function logToStartup(msg) {
  const pre = startupScreen.querySelector("pre");
  pre.textContent += "\n" + msg;
}

function logToMain(msg) {
  const log = document.getElementById("log");
  const line = document.createElement("div");
  line.textContent = msg;
  log.appendChild(line);
  log.scrollTop = log.scrollHeight;
}