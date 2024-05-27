var a=0; //horizontal position
var b=0; //vertical position
var r = 2; //smooth rate
var x; //
var y;
var c = 0;
var f = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
 x = width/2;
 y = height/2;
}


function draw() {
  background(255,0,255, 1);
/*

if (a < mouseX){
  a=a+r;
}
  if (a > mouseX){
  a=a-r;
}
  if (b < mouseY){
  b=b+r;
}
  if (a=b > mouseY){
  b=b-r;
}
  
*/
x = pmouseX;
y = pmouseY;
  
c=(c +.005); 
  d = 20*cos(c);
  e = 20*sin(c+.5);
f=(f +.004); 
  g = 15*cos(f);
  h = 15*sin(f+.5);
  //console.log(d);
  
  
  for (var i = 0; i < 10*width; i += 25) {
stroke(255, 255, 0, 255, 100);
    noFill();
    circle(x+d, y+e, i);
    
    strokeWeight(.085);
    stroke(0, 255, 255, 255, 100);
    noFill();
    circle(width-x+f, height-y+g, i);
  } 
  }


function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}