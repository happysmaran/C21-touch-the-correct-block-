var fixedRect, movingRect;
var box1, box2, box3, box4, box5, box6;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  box1=createSprite(150, 150, 50, 50);
  box1.shapeColor="green";
  box2=createSprite(300, 150, 50, 50);
  box2.shapeColor="green";
  box3=createSprite(450, 150, 50, 50);
  box3.shapeColor="green";
  box4=createSprite(600, 150, 50, 50);
  box4.shapeColor="green";
  box5=createSprite(750, 150, 50, 50);
  box5.shapeColor="green";
  box6=createSprite(900, 150, 50, 50);
  box6.shapeColor="green";

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  isTouching(movingRect, box1);

  drawSprites();
}

