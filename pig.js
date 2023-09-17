const mycanvas = document.getElementById("mycanvas");
const ctx = mycanvas.getContext("2d");

const audio = new Audio("audofile.wav");

document.addEventListener("keydown", function (info) {
  if (info.code == "Space") {
    audio.currentTime = 0;
    audio.play();
  }
});

const x = mycanvas.width / 2;
const y = mycanvas.height / 2;

mycanvas.addEventListener("mousemove", function (info) {
  p = info.offsetX / mycanvas.width;
  q = info.offsetY / mycanvas.height;
  console.log("curser is moved " + p + " " + q);
});

let p = 0;
let q = 0;
const maxEye = 50;
const startX = 250;
const startY = 250;

function drawFace(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, 200, 0, 2 * Math.PI);
  ctx.fillStyle = "#F25BBD";
  ctx.fill();
  ctx.stroke();
}

function nose() {
  const x = startX + maxEye * p;
  const y = startY + maxEye * q;
  ctx.beginPath();
  ctx.arc(250, 250, 60, 0, 2 * Math.PI);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(x, y, 30, 0, 2 * Math.PI);
  ctx.fillStyle = "white";
  ctx.fill();
  ctx.stroke();
}

function animation() {
  ctx.clearRect(0, 0, mycanvas.width, mycanvas.height);

  drawFace(x, y);
  nose();

  ctx.fillStyle = "red";
  ctx.font = "30px Arial";
  ctx.fillText("I can watch you", 150, 490);
  requestAnimationFrame(animation);
}

animation();
