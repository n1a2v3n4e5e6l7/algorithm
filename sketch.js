var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200,300, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(700, 300,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityX = -5;
  fixedRect.velocityX = +5;


}

function draw() {
  background(0,0,0);  
  bounceOff(fixedRect,movingRect);
 if(istouching(fixedRect,movingRect)){
   movingRect.shapeColor="red";
   fixedRect.shapeColor="blue";
 }
   drawSprites();
}
