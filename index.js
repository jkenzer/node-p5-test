const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { createCanvas } = require("canvas");
const fs = require("fs");

global.window = new JSDOM(`<!DOCTYPE html><div id="sketch"></div>`, {
  pretendToBeVisual: true,
}).window;
global.window.screen.width = 1280;
global.window.screen.height = 800;
global.window.screen.availTop = 23;
global.window.screen.availLeft = 0;
global.window.screen.availWidth = 1280;
global.window.screen.availHeight = 777;
global.document = global.window.document;
global.screen = global.window.screen;
global.navigator = global.window.navigator;

let myCanvas;

// function setup() {
//   myCanvas = myp5.createCanvas(100, 100);
//   myCanvas.parent("sketch");
//   myp5.background(153);
//   myp5.line(0, 0, 50, 50);
// }

// function draw() {
//   myp5.background(220);
//   myp5.noLoop();
// }
const p5 = require("p5");
let myp5 = new p5();
// setup();
myCanvas = myp5.createCanvas(100, 100);
myCanvas.parent("sketch");
myp5.background(153);
myp5.line(0, 0, 50, 50);
myp5.noLoop();
// draw();
// console.log(myp5);

const width = 4880;
const height = 1500;
const canvas = createCanvas(width, height);
const ctx = canvas.getContext("2d");

// Make my own random walk design
// anyhting can go here
// ctx.fillStyle = "white";
// ctx.fillRect(0, 0, width, height);

// let x = width / 2;
// let y = height / 2;
// const stepSize = 4;
// // randomSeed(parseInt(number.value()));
// for (let i = 0; i < 1000000; i++) {
//   ctx.fillStyle = "black";
//   ctx.fillRect(x, y, stepSize, stepSize);
//   const r = Math.floor(Math.random() * 4);
//   switch (r) {
//     case 0:
//       x = x + stepSize;
//       break;
//     case 1:
//       x = x - stepSize;
//       break;
//     case 2:
//       y = y + stepSize;
//       break;
//     case 3:
//       y = y - stepSize;
//       break;
//   }
// }

console.log(ctx);
// ctx.drawImage(myCanvas, 0, 0);
// const buffer = ctx.toBuffer("image/png");
// fs.writeFileSync("test2.png", buffer);
