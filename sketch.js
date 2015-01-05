var mySound = new buzz.sound("rhodes_loop.wav");
var canvas;
function setup() {
 canvas= createCanvas(windowWidth, windowHeight);
  smooth();
  //mySound.play().fadeIn().loop();
  //mySound.play().fadeIn().loop();

}

function draw() {
  //background(100);
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  //ellipse(mouseX, mouseY, 80, 80);

  fill(1, 2);
  noStroke();
  rect(random(0,windowWidth), windowHeight*.5+random(-3,3), 50, 50);
}


function mousePressed(){
}