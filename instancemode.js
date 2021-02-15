const w = 400,
const h = 400;
setupWindow(w, h);

const p5 = require("p5");

new p5((p) => {
  const heart = [];
  let a = 0;
  p.setup = () => {
    p.createCanvas(w, h);
    while (true) {
      const r = p.height / 40;
      const x = r * 16 * p.pow(p.sin(a), 3);
      const y =
        -r *
        (13 * p.cos(a) - 5 * p.cos(2 * a) - 2 * p.cos(3 * a) - p.cos(4 * a));
      heart.push(p.createVector(x, y));
      // So that it stops
      if (a > p.TWO_PI) {
        break;
      }

      a += 0.1;
    }
    p.background(0);
    p.translate(p.width / 2, p.height / 2);

    p.stroke(255);
    p.strokeWeight(2);
    p.fill(150, 0, 100);
    p.beginShape();
    for (let v of heart) {
      p.vertex(v.x, v.y);
    }
    p.endShape();
    saveAsPNG(p, "filename");
  };
});

async function saveAsPNG(p5Inst, filename = "sketch", exit = true) {
  const fs = require("fs");
  const buffer = p5Inst._renderer.drawingContext.canvas.toBuffer();
  await fs.promises.writeFile(filename + ".png", buffer);
  if (exit) process.exit(0);
}

function setupWindow(w = 100, h = 100) {
  // Import required stuff
  const { createCanvas } = require("canvas");
  const { JSDOM } = require("jsdom");
  const { performance } = require("perf_hooks");

  // All the global properties will be available to p5
  global.window = global;

  // Use JSDOM to simulate DOM methods
  const dom = new JSDOM();
  global.document = dom.window.document;

  const nodeCanvas = createCanvas(w, h);

  // p5 will use the methods on nodeCanvas context (overriding JSDOM's getContext function)
  dom.window.HTMLCanvasElement.prototype.getContext = (type) => {
    return nodeCanvas.getContext(type);
  };

  // p5 uses window.performance
  global.performance = performance;

  // window.screen is used to determine displayWidth and displayHeight
  // in this case it will be undefined
  global.screen = {};

  // p5 uses events "load" and "error"
  // Using JSDOM equivalent
  global.addEventListener = dom.window.addEventListener.bind(dom.window);
  global.removeEventListener = dom.window.removeEventListener.bind(dom.window);

  // Navigator.userAgent is used by p5 to polyfill methods in older browsers (safari)
  global.navigator = { userAgent: "node" };

  // when we declare a function in node, it doesn't pollute global scope
  // So implicitly write code so that p5 can access these functions on global/window.
  // UNCOMMENT NEXT TWO LINES WHEN USING GLOBAL MODE
  // global.setup = setup
  // global.draw = draw
}
