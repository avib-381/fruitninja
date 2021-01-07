var sword, fruit, monster;
var PLAY = 1
var END  = 0
var gameState = 1
var swordImage
var score = 0




function preload(){
  
  
  swordImage = loadImage ("sword.png")
  fruitImage1 = loadImage ("fruit1.png")
  fruitImage2 = loadImage ("fruit2.png")
  fruitImage3 = loadImage ("fruit3.png")
  fruitImage4 = loadImage ("fruit4.png")
  monsterAnimation = loadAnimation ("alien1.png", "alien2.png")
  gameOverImage = loadImage ("gameover.png")
  
 
}

function setup(){
  createCanvas (600, 600)
  
  
   
  sword = createSprite (300, 200, 50, 50)
  sword.addImage (swordImage)
  sword.scale = 0.7
  
  fruitGroup = new Group ()
  enemyGroup = new Group ()
  
}

function draw(){
  background ("grey")
  
  fill ("black")
  text ("Score =" + score, 500, 50)
  
  
  if (gameState == PLAY){
    sword.x = mouseX
  sword.y = mouseY
    
    fruits()
  enemy()
    
    if (fruitGroup.isTouching (sword)){
      fruitGroup.destroyEach ()
      score = score + 1
    }
    
    if (enemyGroup.isTouching (sword)){
      gameState = END
    }
  }
 
if (gameState == END){
  fruitGroup.destroyEach ()
  fruitGroup.setVelocityXEach (0)
  
  enemyGroup.destroyEach ()
  enemyGroup.setVelocityXEach (0)
  
  sword.addImage (gameOverImage)
  sword.x = 200
  sword.y = 200
  
  score = 0
}
  
  
  
  drawSprites()
}

function fruits (){
 
 if(World.frameCount%80===0){
   fruit=createSprite(400, 200, 20, 20)
   fruit.scale=0.2
   
   r=Math.round(random(1,4))
   if (r == 1){
     fruit.addImage (fruitImage1)
   } else if (r == 2){
     fruit.addImage (fruitImage2)
 } else if ( r==3 ){
   fruit.addImage (fruitImage3)
} else{
  fruit.addImage (fruitImage4)
}
   
   fruit.y = Math.round(random(50,340))
   
   fruit.velocityX= -7
   fruit.setLifetime = 100
   
   fruitGroup.add (fruit) 
 }
}

function enemy (){
  if (World.frameCount%200===0){
    monster=createSprite (400,200,20,20)
    monster.addAnimation ("moving", monsterAnimation)
    monster.y=Math.round(random(100,300))
    monster.velocityX= -8
    monster.setLifetime = 50
    
    enemyGroup.add (monster)
    
  }
}





















