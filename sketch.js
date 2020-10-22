const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, ground, canvas;

function setup() {
  var canvas = createCanvas(800,400);
  engine = Engine.create()
  world = engine.world;

  var ground_options ={
    isStatic:true
  }
  var ball_options ={
    restitution: 1.0
  }

  ground = Bodies.rectangle(200, 390, 200, 20, ground_options); 

  World.add(world, ground)
  ball = Bodies.circle(200, 100, 20, ball_options);
  World.add(world, ball)

  console.log(ground.type);
}

function draw() {
  background(255,255,255);  
Engine.update(engine);
  rectMode(CENTER)
  rect(ground.position.x, ground.position.y, 50, 50);

  ellipseMode(RADIUS)
  ellipse(ball.position.x, ball.position.y, 50, 50);
}