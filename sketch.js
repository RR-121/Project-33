const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var world, engine, bgImg, boy, boyImg, ground, recording;

var snowfall = [];
var maxSnowfall = 50;

function preload() {
  bgImg = loadImage("Images/snow1.jpg");
  boyImg = loadImage("Images/Boy.png");
  recording = loadSound("Snowing.wav");
}

function setup() {
  createCanvas(1000, 600);

  engine = Engine.create();
  world = engine.world;

  boy = createSprite(680, 390, 10, 10);
  boy.addImage("boy", boyImg);
  boy.scale = 0.25;

  for (var i = 0; i <= maxSnowfall; i++) {
    snowfall.push(new Snow(random(0, 1000), random(0, 600)));
  }

  userStartAudio();
  recording.play();
  console.log("CLICK ANYWHERE ON THE ANIMATION FOR A SURPRISE! MAKE SURE YOU HAVE YOUR VOLUME UP!!!")
}

function draw() {
  background(bgImg);
  Engine.update(engine);

  drawSprites();

  for (var i = 0; i <= maxSnowfall; i++) {
    if (i < 25) {
      snowfall[i].display("1");
      snowfall[i].updatePos();
    }
    else {
      snowfall[i].display("2");
      snowfall[i].updatePos();
    }
  }

}
