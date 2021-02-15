// Credit to @dipamsen
// https://github.com/CodingTrain/node-p5-test/issues/1

const w = 4880,
  h = 1500;
const { saveAsPNG, setupWindow } = require("./functions");
setupWindow(w, h);
global.setup = setup;
const p5 = require("p5");

let x;
let y;

// let whistle;
let number = process.argv[2] || 123456;

function setup() {
  createCanvas(w, h);
  // whistle = createGraphics(4880, 1500);
  pixelDensity(1);
  background(255);
  x = width / 2;
  y = height / 2;
  const stepSize = 4;
  randomSeed(number);
  for (let i = 0; i < 1000000; i++) {
    //canvas.stroke(0);
    //canvas.point(x, y);
    noStroke();
    fill(0);
    rectMode(CENTER);
    rect(x, y, stepSize, stepSize);
    strokeWeight(stepSize);
    const r = int(random(4));

    switch (r) {
      case 0:
        x = x + stepSize;
        break;
      case 1:
        x = x - stepSize;
        break;
      case 2:
        y = y + stepSize;
        break;
      case 3:
        y = y - stepSize;
        break;
    }
  }
  saveAsPNG(global, "walk");
  remove();
}
