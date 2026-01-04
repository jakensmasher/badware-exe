// Binary background animation
const binary = document.getElementById("binary");

setInterval(() => {
  let line = "";
  for (let i = 0; i < 120; i++) {
    line += Math.random() > 0.5 ? "1" : "0";
  }
  binary.textContent += line + "\n";
  binary.textContent = binary.textContent.slice(-8000);
}, 50);

// Progress bar logic
let progress = 0;

const fill = document.getElementById("fill");
const percent = document.getElementById("percent");
const face = document.getElementById("face");
const status = document.getElementById("status");
const screen = document.querySelector(".screen");

const loading = setInterval(() => {
  progress += Math.random() * 3;

  fill.style.width = progress + "%";
  percent.textContent = Math.floor(progress) + "%";

  if (progress >= 70) {
    document.body.style.color = "#ff3333";
    screen.classList.add("glitch");
    status.textContent = "SYSTEM CORRUPTING";
  }

  if (progress >= 100) {
    clearInterval(loading);
    fill.style.width = "100%";
    percent.textContent = "SYSTEM COMPROMISED";
    status.textContent = "BADWARE DEPLOYED";
    face.textContent = "C>:";
  }
}, 120);
