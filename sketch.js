const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
function preload(){
  backgroundImg=loadImage("snow3.png")
}
function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  Engine.update(engine)
  background(backgroundImg);  
  drawSprites();
}