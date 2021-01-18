const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload() {
  boy = loadImage("images(2).png");
}

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;

  arrow = new Arrow(450,200,80,80);

  slingShot = new SlingShot(arrow.body, {x: 450, y: 200});

}

function draw() {
  background("white");

  image(boy, 500, 200, 250, 300);
  
  arrow.display();

  slingShot.display();

  Engine.update(engine);
}

function mouseDragged() {
  Matter.Body.setPosition(arrow.body, {x: mouseX, y: mouseY});

}

function mouseReleased() {
  slingShot.fly();
}

function keyPressed() {
  if(keyCode === 32) {
    slingShot.attach(arrow.body);
  }
}