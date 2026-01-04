// --- Binary background animation ---

const binary = document.getElementById("binary");

// Function to generate full-screen binary
function generateBinary() {
  const charWidth = 8;   // approx width of one character
  const charHeight = 16; // approx height of one line

  const columns = Math.ceil(window.innerWidth / charWidth);
  const rows = Math.ceil(window.innerHeight / charHeight);

  let output = "";

  for (let r = 0; r < rows; r++) {
    let line = "";
    for (let c = 0; c < columns; c++) {
      line += Math.random() > 0.5 ? "1" : "0";
    }
    output += line + "\n";
  }

  binary.textContent = output;
}

// Run binary animation repeatedly
setInterval(generateBinary, 80);
window.addEventListener("resize", generateBinary);

// --- Progress bar logic ---

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
