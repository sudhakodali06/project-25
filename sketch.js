
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var ball, ground, bin;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ball = new Paper(200,200,20);
ground = new Ground(width/2,650,width,20);
bin = new dustbin(1200,650);
	

	
	  Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball.display();
  ground.display();
  bin.display();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
  
	}
}


