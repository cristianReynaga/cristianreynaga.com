var mySound = new buzz.sound("rhodes_loop.wav");

function setup() {
  createCanvas(windowWidth, windowHeight);
  smooth();
<<<<<<< HEAD
  //mySound.play().fadeIn().loop();
=======
  	//mySound.play().fadeIn().loop();
>>>>>>> b4cdd2f0d0b651725fe64b688568f74e9a6a74ab

}

function draw() {
  //background(100);
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  //ellipse(mouseX, mouseY, 80, 80);

  fill(1, 5);
  noStroke();
  rect(random(0,windowWidth), windowHeight*.5, 50, 50);
  print("dd");
}
function mousePressed(){
}