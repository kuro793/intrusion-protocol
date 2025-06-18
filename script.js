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