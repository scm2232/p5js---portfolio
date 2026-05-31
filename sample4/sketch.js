function setup() {
  createCanvas(600, 400);

  frameRate(30);

  colorMode(RGB);
}

function draw() {

  // 배경 색상 변화
  let bgR = 240 + sin(frameCount * 0.01) * 15;
  let bgG = 240 + cos(frameCount * 0.01) * 15;
  let bgB = 255;

  background(bgR, bgG, bgB);

  // 시간 변수
  let t = millis() * 0.001;

  stroke(0);

  // 직사각형 색상 변화
  let c1 = color(255, 255, 255);
  let c2 = color(220, 230, 255);

  let rectColor = lerpColor(c1, c2, (sin(t) + 1) / 2);

  fill(rectColor);

  // 흔들리는 효과
  let offsetY = sin(frameCount * 0.03) * 5;

  quad(
    100, 100 + offsetY,
    100, 300 + offsetY,
    500, 300 + offsetY,
    500, 100 + offsetY
  );

  strokeWeight(2);

  for (let i = 0; i <= 180; i += 20) {

    // 선 움직임
    let lineMove = sin(frameCount * 0.03 + i) * 10;

    line(
      100,
      100 + i,
      120 + i + lineMove,
      300
    );

    line(
      500,
      100 + i,
      480 - i - lineMove,
      300
    );
  }

  noFill();

  // 삼각형 크기 변화
  let scaleValue = 1 + sin(frameCount * 0.03) * 0.03;

  push();

  translate(300, 200 + offsetY);
  scale(scaleValue);

  triangle(-200, -100, 200, -100, 0, 100);

  triangle(-200, -100, 200, -100, -195, -52);
  triangle(-200, -100, 200, -100, 195, -52);

  triangle(-200, -100, 200, -100, -185, -18);
  triangle(-200, -100, 200, -100, 185, -18);

  triangle(-200, -100, 200, -100, -167, 16);
  triangle(-200, -100, 200, -100, 167, 16);

  triangle(-200, -100, 200, -100, -144, 45);
  triangle(-200, -100, 200, -100, 144, 45);

  triangle(-200, -100, 200, -100, -112, 70);
  triangle(-200, -100, 200, -100, 112, 70);

  triangle(-200, -100, 200, -100, -62, 89);
  triangle(-200, -100, 200, -100, 62, 89);

  pop();


  noStroke();

  for (let x = 0; x <= 550; x += 100) {

    // 색 변화
    let squareColor = lerpColor(
      color(0),
      color(80, 80, 150),
      (sin(frameCount * 0.05 + x) + 1) / 2
    );

    fill(squareColor);

    // 크기 변화
    let sizeChange = 50 + sin(frameCount * 0.04 + x) * 5;

    square(x, 0, sizeChange);
    square(x + 50, 50, sizeChange);

    square(x, 300, sizeChange);
    square(x + 50, 350, sizeChange);
  }

  for (let y = 100; y <= 250; y += 100) {

    let squareColor2 = lerpColor(
      color(0),
      color(120, 50, 150),
      (cos(frameCount * 0.04 + y) + 1) / 2
    );

    fill(squareColor2);

    let sizeChange2 = 50 + cos(frameCount * 0.03 + y) * 5;

    square(0, y, sizeChange2);
    square(50, y + 50, sizeChange2);

    square(500, y, sizeChange2);
    square(550, y + 50, sizeChange2);
  }

  // 왼쪽 아래 이모지
  let emojiSize1 = 45 + sin(frameCount * 0.08) * 5;

  let emojiColor1 = lerpColor(
    color('#FFFF33'),
    color('#FFA500'),
    (sin(t * 2) + 1) / 2
  );

  fill(emojiColor1);
  stroke(emojiColor1);

  let emojiMove1 = sin(frameCount * 0.05) * 10;

  circle(25, 375 - emojiMove1, emojiSize1);

  // 오른쪽 위 이모지
  let emojiSize2 = 45 + cos(frameCount * 0.08) * 5;

  let emojiColor2 = lerpColor(
    color('#FFFF33'),
    color('#FFD700'),
    (cos(t * 2) + 1) / 2
  );

  fill(emojiColor2);
  stroke(emojiColor2);

  let emojiMove2 = cos(frameCount * 0.05) * 10;

  circle(575, 25 + emojiMove2, emojiSize2);

  // 입
  fill(255, 0, 0);

  arc(25, 380 - emojiMove1, 30, 20, 0, PI);
  arc(575, 30 + emojiMove2, 30, 20, 0, PI);

  // 눈
  noFill();
  stroke(0);

  arc(15, 370 - emojiMove1, 10, 10, PI, TWO_PI);
  arc(35, 370 - emojiMove1, 10, 10, PI, TWO_PI);

  arc(565, 20 + emojiMove2, 10, 10, PI, TWO_PI);
  arc(585, 20 + emojiMove2, 10, 10, PI, TWO_PI);


  if (frameCount % 20 == 0) {

    fill(
      random(255),
      random(255),
      random(255),
      150
    );

    noStroke();

    circle(
      random(width),
      random(height),
      random(5, 15)
    );
  }
}


function keyPressed() {

  if (key === 's' || key === 'S') {

    saveGif('abstract_animation', 5);

  }
}