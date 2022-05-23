var bg,bgImg;
var player, shooterImg, shooter_flying, enemy_1;
var enemy;


function preload(){
  
  //shooterImg = loadImage("assets/Idle.png")
  shooter_flying = loadImage("assets/Flying.png")

  enemy_1= loadImage("assets/Enemies (1).png")

  energy= loadAnimation("assets/Energy_1.png", "assets/Energy_2.png", "assets/Energy_3.png", "assets/Energy_4.png");

  bgImg = loadImage("Background_Image.jpeg")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  energy.frameDelay = 5;

  //adding the background image
  bg = createSprite(800,350,windowWidth,windowHeight)
  bg.scale = 0.9
  bg.addImage(bgImg)

  

//creating the player sprite
   player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
   player.addImage(shooter_flying)
   player.scale = 0.3
   player.debug = false
   player.setCollider("rectangle",0,0,300,300)


   opponentGroup = new Group()
   bulletGroup = new Group()
   energyballGroup = new Group()


}

function draw() {
  background(0); 

  

  //moving the player up and down and making the game mobile compatible using touches
//if(keyDown("UP_ARROW")||touches.length>0){
  //player.y = player.y-30
  //player.addImage(shooter_flying)
//}
if(keyDown("LEFT_ARROW")||touches.length>0){
 player.x = player.x-30
 player.addImage(shooter_flying)
}
if(keyDown("RIGHT_ARROW")||touches.length>0){
  player.x = player.x+30
  player.addImage(shooter_flying)
 }


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("DOWN_ARROW")){
 
 // player.addImage(shooterImg)
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("DOWN_ARROW")){
 // player.addImage(shooterImg)
}


if(keyWentDown("space")){
  bullet = createSprite(displayWidth-1150,player.y-30,20,10)
  bullet.velocityY = 20
  
  bulletGroup.add(bullet)
  //opponent.depth = bullet.depth
  //opponent.depth = opponent.depth+2
  //opponent.addImage(enemy_1)
  bullet = bullet-1
  //explosionSound.play();
}

//player goes back to original standing image once we stop pressing the space bar
//else if(keyWentUp("space")){
  //opponent.addImage(enemy_1)
//}


enemy();
opponentshooter();

drawSprites();

}

function enemy(){
  if(frameCount%140===0){

    //energyball = createSprite(300, 300, 100, 200);
    //energyball.addAnimation("fuel", energy);

    //giving random x and y positions for zombie to appear
    energyball = createSprite(random(0,1920),random(0,1080),40,40);
    energyball.addAnimation("fuel", energy);

    //energyball.addImage(zombieImg)
    energyball.scale = 0.75
    energyball.velocityY = 3
    //energyball.debug= true
    energyball.setCollider("rectangle",0,0,400,400)
   
    energyball.lifetime = 400
    energyballGroup.add(energyball)
  }

}



   function opponentshooter(){
    if(frameCount%100===0){
  
      //energyball = createSprite(300, 300, 100, 200);
      //energyball.addAnimation("fuel", energy);
  
      //giving random x and y positions for zombie to appear
      opponent = createSprite(random(0,1920),random(0,1080),50,50);
      opponent.addImage(enemy_1)
      //opponent = createSprite(250, 250, 50, 50)
    
  
      //energyball.addImage(zombieImg)
      opponent.scale = 0.75
      opponent.velocityY = 3
      //energyball.debug= true
      opponent.setCollider("rectangle",0,0,400,400)
     
      opponent.lifetime = 400
      opponentGroup.add(opponent)
    }
  
  }


