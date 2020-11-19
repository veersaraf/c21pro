var sun, plan1, plan2;
var sunImg, mars, marsImg;
var scale1 = 1;

function preload()
{

  sunImg = loadImage("sun.png");
  marsImg = loadImage("mars.png")
}
function setup() {

  mars = createSprite(100, 100, 50, 50);
  mars.addImage(marsImg);
  mars.scale = 0.25;
  mars.setCollider("circle", 0, 0 , 110);
  
  mars.debug = true;
  sun = createSprite(250 , 250 , 100 , 100);
  sun.addImage(sunImg);
  sun.debug = true;
  
  sun.setCollider("circle", 0, 0, 120 );
}

function draw() {
  
  sun.scale = scale1;
  
  if(frameCount%60===0)
  {
    scale1 += 0.1;
  }

  if(sun.isTouching(mars))
  {
    mars.visible =false;
  }

  createCanvas(500,500);


  background(0);
  drawSprites();
}