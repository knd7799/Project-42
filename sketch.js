var hr;
var mn;
var sc;
function setup() {
  createCanvas(500,500);
  //createSprite(400, 200, 50, 50);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  translate(200,200);
  rotate(-90);
  
hr = hour();
mn = minute();
sc = second ();



strokeWeight(8);
noFill();
stroke(255,100,150);
secAngle = map(sc,0,60,0,360);
arc(0,0,300,300,0,secAngle);

push();
rotate(secAngle);
stroke(255,100,150);
line(0,0,100,0);
pop();

stroke("blue");
minAngle= map(mn,0,60,0,360);
arc(0,0,280,280,0,minAngle);

push();
rotate(minAngle);
stroke("blue");
line(0,0,75,0);
pop();

stroke(150,255,100);
hrAngle = map(hr % 12,0,12,0,360);
arc(0,0,260,260,0,hrAngle);

push();
rotate(hrAngle);
stroke(150,255,100);
line(0,0,50,0);
pop();

stroke(255);
point(0,0);



//fill (255);
//text(hr + ':'+mn + ':'+ sc , 100,100)
//drawSprites();
}

