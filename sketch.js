var ship; var sea;
var moving; var flowing;

function preload(){
 ship_moving=loadAnimation("ship-1.png","ship-2.png");
 sea_flowing=loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
 
 sea=createSprite(200,250,400,20);
 sea.addImage("flowing",sea_flowing);
 sea.scale=0.4
 ship=createSprite(50,200,20,50);
 ship.addAnimation("moving",ship_moving);
 ship.scale=0.3;
 ship.x=200;
}

function draw() {
  background(1);
  drawSprites();
}
