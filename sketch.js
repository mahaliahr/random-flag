let flag;

let dimension;

function setup() {
  createCanvas(1280, 853);

  // disable the animation loop
  //noLoop();

  dimension = 100;
  frameRate(3);

  // start loading the next flag
  nextFlag();
}

function draw() {
  background(0);

  if (!flag) {
    return;
  }
 
  const name = flag.name;
  const colorList = flag.colors;
  const minDim = min(width, height);

  for (let i = 0; i < width; i = i + dimension) {
    for (let j = 0; j < height; j = j + dimension) {
      const color = random(colorList);
      noStroke();
      fill(color);
      drawSquare(i, j);
    }
    
  }
  textAlign(RIGHT);
  textSize(minDim * 0.1);
  textStyle(BOLD);
  textFont("Helvetica");
  fill('#fff');
  text(name.toUpperCase(), width / 2, height / 2.06, width / 2, height / 1);
}

function drawSquare(x, y) {
  rect(x, y, dimension, dimension);
}

function mousePressed(event) {
  if (event.button === 0) {
    nextFlag();
  }
}

async function nextFlag() {
  const resp = await fetch("/flag");
  flag = await resp.json();
  redraw();
}
