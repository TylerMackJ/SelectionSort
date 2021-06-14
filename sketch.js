let numbers = [];
let count = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < count; i++) {
    numbers[i] = random(height);
  }
  background(color(75, 74, 103));

  colorMode(HSB);

  for(let i = 0; i < count; i++) {
    drawRectangle(i);
  }
}

function draw() {
  step();
}

let i = 0;
let j = 0;
let min = 0;

function step() {
  if (i == count - 1) {
    let temp = numbers[j];
    numbers[j] = numbers[min];
    numbers[min] = temp;

    drawRectangle(j);
    drawRectangle(min);

    j++;
    i = j;
    min = j;
  }
  i++;

  deselectRectangle((i - 1) != j ? i - 1 : count - 1);
  selectRectangle(i);
  selectRectangle(min)

  if (numbers[min] > numbers[i]) {
    deselectRectangle(min);
    min = i;
  }

}

function drawRectangle(i) {
  colorMode(RGB);
  let c = color(75, 74, 103);
  fill(c);
  stroke(c);
  rect(i * (width / count) - 1, 0, (width / count) + 2, height);

  colorMode(HSB);
  c = color(360 * (numbers[i] / height), 50, 80);
  fill(c);
  stroke(c);
  rect(i * (width / count), height - numbers[i], (width / count) + 1, numbers[i]);
}

function selectRectangle(i) {
  let c = color(0, 0, 0)
  fill(c);
  stroke(c);
  rect(i * (width / count), height - numbers[i], (width / count) + 1, numbers[i]);
}

function deselectRectangle(i) {
  let c = color(360 * (numbers[i] / height), 50, 80);
  fill(c);
  stroke(c);
  rect(i * (width / count), height - numbers[i], (width / count) + 1, numbers[i]);
}
