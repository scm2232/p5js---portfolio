function setup() {
  createCanvas(400, 600);
}

function draw() {
  background("#B2B2B2");
  //옷
  fill("#003300");
  ellipse(200, 490, 400, 100);
  noStroke();
  rect(0, 490, 400, 110);
  stroke(0);
  strokeWeight(5);
  fill("#004000");
  rect(89, 548, 70, 20);
  strokeWeight(3);
  line(331, 555, 331, 600);
  line(69, 555, 69, 600);
  //얼굴과 목
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
  //모자
  fill("#003300");
  arc(200, 230, 170, 150, PI, TWO_PI);
  ellipse(200, 230, 180, 30);
  rect(179, 187, 42, 25);
  strokeWeight(5);
  line(185, 193, 215, 193);
  line(185, 204, 215, 204);
  strokeWeight(1);
  //눈, 눈썹
  fill(255);
  ellipse(160, 276, 40, 15);
  fill(0);
  circle(162, 276, 14);
  fill(255);
  circle(164, 277, 7);
  fill(255);
  ellipse(240, 276, 40, 15);
  fill(0);
  circle(238, 276, 14);
  fill(255);
  circle(236, 277, 7);
  stroke("#202020");
  strokeWeight(5);
  line(141, 260, 175, 260);
  line(259, 260, 225, 260);
  //코
  strokeWeight(3);
  stroke(0);
  line(201, 321, 218, 343);
  line(218, 343, 202, 349);
  //입
  fill("#FF6666");
  arc(200, 375, 76, 56, 0, PI);
  line(162, 375, 238, 375);
}