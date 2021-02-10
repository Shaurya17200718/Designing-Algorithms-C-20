var mrect , frect;
var wall ,ball;
function setup() {
  createCanvas(800,400);
 frect = createSprite(400, 200, 50, 50);
 frect.shapeColor = "green";
 mrect =createSprite(200 ,200 ,50,70);
 mrect.shapeColor = "green";

 wall = createSprite(600,100,10,100);
 ball = createSprite(100,100,20,20);
 ball.velocityX = 2;


}

function draw() {
  background(255,255,255);
  
  mrect.y = mouseY;
  mrect.x = mouseX;
  
 
  if(mrect.x-frect.x <=frect.width/2 + mrect.width/2  && frect.x-mrect.x <=frect.width/2 + mrect.width/2 && mrect.y -frect.y <=mrect.height/2 + frect.height/2 && frect.y -mrect.y <=mrect.height/2 + frect.height/2){
    frect.shapeColor="red";
    mrect.shapeColor="red";
  } else {
    frect.shapeColor="green";
    mrect.shapeColor="green";
  }

  if(wall.x-ball.x <= wall.width/2 + ball.width/2 && ball.x - wall.x <= wall.width/2 + ball.width/2){
    ball.velocityX = ball.velocityX * -1;
    wall.velocityX = wall.velocityX * -1;
  }

  if(wall.y-ball.y <= wall.height/2 + ball.height/2 && ball.y - wall.y <= wall.height/2 + ball.height/2){
    ball.velocityY = ball.velocityY * -1;
    wall.velocityY = wall.velocityY * -1;
  }

  console.log(mrect.y-frect.y);
  console.log(mrect.x-frect.x);
  drawSprites();
}