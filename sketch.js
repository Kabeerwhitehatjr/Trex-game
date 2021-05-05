var ground1, ground2, ground3;

function preload(){

}

function setup() {
  createCanvas(800, 400);

  ground1 = createSprite (400,200,20,20);
  ground2 = createSprite (400,200,20,20);
  ground3 = createSprite (400,200,20,20); 
  
}

function draw() {
  background("grey");

  drawSprites();
}