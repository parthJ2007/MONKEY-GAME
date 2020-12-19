  // Line number 2 - 7 creates a global variable for the code.
  var monkey , monkey_running
  var banana ,bananaImage, obstacle, obstacleImage
  var FoodGroup, obstacleGroup
  var score
  var survivalTime = 0;
  var score = 0;

  // Line number 10 - 18 has functions by which animations and soundeffects are loaded to the code.
  function preload(){
    // Line number 12 loads animations to monkey_running. 
    monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")

    //Line number 15 and 16 loads animations to bananaImage and obstacleImage. 
    bananaImage = loadImage("banana.png");
    obstacleImage = loadImage("obstacle.png");

  }

  // Line number 21 - 37 has functions by which sprites and groups are created.
  function setup() 
  {
    //Line number 23 and 24 ceates new groups name bananaGroup and obstacleGroup respectively.
   bananaGroup = new Group ();
   obstacleGroup = new Group ();

    //Line number 28 - 30 tells about the position, size, the animation of the monkey and it also tells about the size of the animation which is set to the monkey.
    monkey = createSprite(80, 325, 20, 20);
    monkey.addAnimation("moving", monkey_running);
    monkey.scale = 0.1;

    //Line number 33 - 35 tells about the position, size, velocity(speed) and it also gives the position to the ground in the centre of the Canvas.
  ground = createSprite(450, 360, 900, 10);
  ground.velocityX = -4;
  ground.x = ground.width/2;

  }

  //Line number 40 - 81 contains the functions of the code which always repeat themselves and they are also the main functions of the code.
  function draw() 
  {
    // Line number 43 gives a colour to the background. 
  background(220);

    //Line number 46 shows the the y position of the monkey in the console panel repeatedly.
    console.log(monkey.y)

    //Line number 49 makes the monkey collide with the ground.
    monkey.collide(ground);

  //Line number 52 and 53 calls function spawnBananas and spawnObstacles respectively.
   spawnBananas(); 
   spwanObstacle();   

  //Line number 56 - 59 has a function that if the x position of the ground gets less than or equal to to zero(0), then the ground will again come to the centre.
    if(ground.x <= 0)
  {
        ground.x = ground.width/2
  }

    //Line number 62 - 66 has a function that if space key is pressed and the y position of the mokey is greater then equal to 324, then monkey will go upwards with a velocity(speed) of -15.Then the monkey will come back to the ground with a velocity of 0.8.
    if(keyDown("Space") && monkey.y >= 324)
  {
        monkey.velocityY = -15;
  }
    monkey.velocityY = monkey.velocityY + 0.8

  //Line number 69 has a function called "drawSprits", by which all the sprites(objects) are displayed.
  drawSprites();  

  //Line number 72 - 75 has functions by which a text SurvivalTime and value SurvivalTime are displayed, the value SurvivalTime is equal to a rounded number which is frameCount/frameRate.
    fill("#000000");
    textSize(20);
    survivalTime = Math.ceil(frameCount/frameRate())
    text("SurvivalTime : " + survivalTime, 100, 50);

    //Line number 78 - 81 has functions by which a text Score and value score are displayed. 
    fill("#000000");
    textSize(20);
    text("Score : " + score, 150, 75);
  }

  //Line number 84 - 105 has functions to create banana in the game.
  function spawnBananas() 
  {

  //Line number 88 - 93 has a function that if frameCount % 80 === 0, then banana will be created and the banana will randomly spawn in the y position , it also tells about the animation which is set to the banana, the size of the animation and the velocity of the banana.
    if (frameCount % 80 === 0) {
       banana = createSprite(450,100,40,10);
      banana.y = Math.round(random(120,200));
      banana.addImage(bananaImage);
      banana.scale = 0.12;
      banana.velocityX = -2;

  //Line number 96 has a function by which a lifetime is set to the banana, so the game does not slow down.
      banana.lifetime = 350;

  //Line number 99 and 100 have a function by which the monkey will, be displayed in front of the banana, if it comes in the front.
      banana.depth = monkey.depth;
      monkey.depth = monkey.depth + 1;

  //Line number 103 has a function by which banana is added to the bananaGroup.  
     bananaGroup.add(banana);
      }
  }
  //Line number 107 - 127 has functions to create obstacles in the game.
  function spwanObstacle() 
  {

    //Line number 111 - 115 has a function that if frameCount % 300 === 0, then obstacle will be created, it tells about the animation which is set to the obstacle, the size of the animation and the velocity of the obstacle.
    if (frameCount % 300 === 0) {
       obstacle = createSprite(425,325,40,10);
      obstacle.addImage(obstacleImage);
      obstacle.scale = 0.16 ;
      obstacle.velocityX = -5;

  //Line number 118 has a function by which a lifetime is set to the obstacle, so the game does not slow down.
      obstacle.lifetime = 350;

  //Line number 121 and 122 have a function by which the monkey will, be displayed in front of the obstacle, if it comes in the front.
      obstacle.depth = monkey.depth;
      monkey.depth = monkey.depth + 1;

  //Line number 124 has a function by which obstacle is added to the bananaGroup.  
     obstacleGroup.add(obstacle);
      }
  }
  //END OF THE CODE.