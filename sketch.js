var fixedRect, movingRect;

function setup() {
  createCanvas(1200,600);
  fixedRect = createSprite(600, 300, 100, 50);
  movingRect = createSprite(200, 300, 80, 20);
  fixedRect.shapeColor = "blue";
  movingRect.shapeColor = "blue";
  fixedRect.velocityX = -5;
  movingRect.velocityX = 8;
}

function draw() {
  background(0);  
  bounceOff(fixedRect, movingRect);
  drawSprites();
}

function bounceOff(object1, object2){
  if(object2.x - object1.x < object2.width/2 + object1.width/2 &&
    object1.x - object2.x < object2.width/2 + object1.width/2 &&
    object2.y - object1.y < object2.height/2 + object1.height/2 &&
    object1.y - object2.y < object2.height/2 + object1.height/2){
      object1.velocityX = object1.velocityX * -1;
      object2.velocityX = object2.velocityX * -1;
 }
  
}