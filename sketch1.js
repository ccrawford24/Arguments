//design algorithm for collision detection
var fixedRect, movingRect, otherRect, anotherRect

function setup() {
  createCanvas(1200,800);

  movingRect = createSprite(400, 400, 70, 60);
  fixedRect =  createSprite(600, 400, 70, 80);
  otherRect = createSprite(800, 200, 50, 50)
  anotherRect = createSprite(100, 200, 50, 50)

  fixedRect.debug = true
  movingRect.debug = true

  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";

  //object velocities
  otherRect.velocityX = 3;
  anotherRect.velocityX = -3;
}

function draw() {
  background(0);  

  //make the rectangle move with the cursor
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if(isTouching(otherRect,movingRect)){
    otherRect.shapeColor = "red";
    movingRect.shapeColor = "red"; 
}  
else {
    otherRect.shapeColor = "green";
    movingRect.shapeColor = "green";
}

 bounceOff(otherRect,anotherRect);

  drawSprites();
}




