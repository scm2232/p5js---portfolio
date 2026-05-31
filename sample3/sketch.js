/*********************************************
  1. mouse:
		- 마우스 포인터를 눈동자가 따라감
		- 마우스를 클릭하면 입모양이 동그랗게 바뀜
	2. keyboard:
		- 숫자 키 1, 2, 3을 누르면 배경색을 바꿀 수 있음
		- 숫자 키 4, 5, 6, 7을 누르면 모자에 약장 계급을 이병부터 병장까지 바꿀 수 있음
***********************************************/

let bgColor = "#B2B2B2"; 
let rank = 2; 

function setup() {
  createCanvas(400, 600);
}

function draw() {
  background(bgColor);

  if (keyIsPressed) {
    if (key === '1') bgColor = "#B2B2B2";
    if (key === '2') bgColor = "#A0D1EF";
    if (key === '3') bgColor = "#FFD1DC";
    
    if (key === '4') rank = 1; 
    if (key === '5') rank = 2; 
    if (key === '6') rank = 3; 
    if (key === '7') rank = 4; 

  }

  fill("#003300");
  noStroke(); 
  ellipse(200, 490, 400, 100);
  rect(0, 490, 400, 110);
  
  stroke(0);
  strokeWeight(5);
  fill("#004000");
  rect(89, 548, 70, 20);
  strokeWeight(3);
  line(331, 555, 331, 600);
  line(69, 555, 69, 600);

  fill("#FFC0C0");
  stroke(0);
  strokeWeight(1);
  ellipse(200, 464, 175, 50);
  noStroke();
  quad(154, 412, 154, 470, 246, 470, 246, 412);
  
  stroke(0);
  strokeWeight(1);
  ellipse(200, 300, 200, 250);
  line(154, 412, 154, 442);
  line(246, 412, 246, 442);

  fill("#003300");
  arc(200, 230, 170, 150, PI, TWO_PI);
  ellipse(200, 230, 180, 30);
  
  fill("#003300");
  stroke(0);
  strokeWeight(1);
  rect(179, 187, 42, 25);
  
  strokeWeight(4); 
  stroke(0); 
  
  if (rank === 1) {
    line(185, 200, 215, 200);
  } else if (rank === 2) { 
    line(185, 195, 215, 195);
    line(185, 205, 215, 205);
  } else if (rank === 3) { 
    line(185, 192, 215, 192);
    line(185, 200, 215, 200);
    line(185, 208, 215, 208);
  } else if (rank === 4) { 
    line(185, 191, 215, 191);
    line(185, 197, 215, 197);
    line(185, 203, 215, 203);
    line(185, 209, 215, 209);
  }

  let mx = map(mouseX, 0, width, -5, 5); 
  let my = map(mouseY, 0, height, -3, 3);
  
  strokeWeight(1);
  fill(255);
  ellipse(160, 276, 40, 15);
  fill(0);
  circle(162 + mx, 276 + my, 14);
  fill(255);
  circle(164 + mx, 277 + my, 7);

  fill(255);
  ellipse(240, 276, 40, 15);
  fill(0);
  circle(238 + mx, 276 + my, 14);
  fill(255);
  circle(236 + mx, 277 + my, 7);

  stroke("#202020");
  strokeWeight(5);
  line(141, 260, 175, 260);
  line(259, 260, 225, 260);

  strokeWeight(3);
  stroke(0);
  line(201, 321, 218, 343);
  line(218, 343, 202, 349);

  fill("#FF6666");
  stroke(0);
  strokeWeight(1);
  if (mouseIsPressed) {
    ellipse(200, 375, 40, 40); 
  } else {
    arc(200, 375, 76, 56, 0, PI);
    line(162, 375, 238, 375);

  }
}