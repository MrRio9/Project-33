const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var Snow1,Snow2,Snow3,Snow4,Snow5
var Character1
var Person
var Ground
var engine
var world

function preload(){
  Snow1= loadImage("snow1.jpg")
  Snow2= loadImage("snow2.jpg")
  Snow3= loadImage("snow3.jpg")
  Snow4= loadImage("snow4.webp")
  Snow5= loadImage("snow5.webp")
  Character1= loadImage("PersonInWinter.png")
}


function setup() {
  engine = Engine.create();
  world = engine.world;

  createCanvas(800,400);
  var optionsp= {isStatic:false,restitution:0.8,friction:1}
  Person = Bodies.rectangle(400, 200, 50, 50,optionsp)
  World.add(world, Person)
  var options= {isStatic:true}
  Ground= Bodies.rectangle(400,390,800,10,options)
  World.add(world, Ground);
  
}

function draw() {
  Engine.update(engine);
  background(Snow1);
  rectMode(CENTER);
  imageMode(CENTER);
  push();
  translate(Ground.position.x,Ground.position.y)
  rect(0,0,800,10)
  pop();
  push();
  translate(Person.position.x,Person.position.y)
  image(Character1,0,0,200,200)
  pop();
  drawSprites();

}

function keyPressed(){
  if(keyCode== 32){
    Person.velocityY=-2
   }
}