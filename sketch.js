+ const IMAGE_WIDTH = ;
+ const IMAGE_WIDTH = ;
Const

function setup() {
createCanvas ( , );
}

function draw() {

}
function draw() {
  drawTarget(width*0.25, height*0.4, 200, 4);
  drawTarget(width*0.5, height*0.5, 300, 10);
  drawTarget(width*0.75, height*0.3, 120, 6);
}
function draw () {
  strokeWeight(3);
  beginShape(POINTS);
  vertex(30, 20);
  vertex(85, 20);
  vertex(85, 75);
  vertex(30, 75);
  endShape()
