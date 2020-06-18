//Global Variables
 var monkey,banana,score,ground,back,obstacle,obstaclegroup;


function preload(){
  bananaimage=loadImage("Banana.png");
  monkeyimage=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  Back=loadImage("jungle.jpg");
  Obstacle=loadImage("stone.png");
}


function setup() {
  createCanvas(800,400);
    back=createSprite(400,200,800,400);
  back.addImage(Back);
  back.scale=2.0;
  back.velocityX=-7;
  banana=createSprite(200,200,10,30);
  banana.addImage(bananaimage);
  banana.scale=0.1;
  monkey=createSprite(200,200,40,50);
  monkey.addAnimation("mOnkey",monkeyimage);
  monkey.scale=0.12;
  
  score=0;
  bananagroup=new Group();
  
  ground=createSprite(400,400,1400,5);
   obstacle=createSprite(400,390,20,20);
  obstacle.addImage(Obstacle);
 obstacle.scale=0.2;
  obstacle.velocityX=-7;
  obstaclegroup=new Group();
  

}


function draw(){
 background("255");
  monkey.collide(ground);
  ground.velocityX=-5;
  banana.velocityX=-7;
  if(ground.x<0){
    ground.x=400}
  if(keyDown("space")&&monkey.y>=338.8){
    monkey.velocityY=-14;
    
  }
  monkey.velocityY=monkey.velocityY+0.8;
  if(World.frameCount%80=== 0){
    var banana2=createSprite(200,200,10,30);
  banana2.addImage(bananaimage);
  banana2.scale=0.1;
    banana2.y=random(150,200);
    banana2.x=random(395,400);
    banana2.lifetime=80;
    banana2.velocityX=-7;
    
    bananagroup.add(banana2);
  }
 if(bananagroup.isTouching(monkey)){
   bananagroup.destroyEach();
   score=score+1;
   switch (score){
case 5: monkey.scale=0.15;
    break;
   case 10: monkey.scale=0.17;
    break;
    case 15: monkey.scale=0.19;
    break;
    case 20: monkey.scale=0.21;
    break;
  
  default : break ;
    
}
 }
  if(back.x<0){
    back.x=400;
  }
       if(World.frameCount%80=== 0){
    var obstacle2=createSprite(400,400,10,30);
 obstacle2.addImage(Obstacle);
  obstacle2.scale=0.2;
    
   obstacle2 .x=random(390,400);
    obstacle2.lifetime=80;
    obstacle2.velocityX=-7;

    obstaclegroup.add(obstacle2);

  }
         if(obstaclegroup.isTouching(monkey)){
  monkey.scale=0.12;
}

    
    drawSprites();
  textSize(12);
  fill("black");
  text("Survival Time "+score,400,50);
 
}