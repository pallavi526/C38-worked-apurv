
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	,paperObject;
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject = new ground(width/2,670,width,20);
	dustbinObj = new Dustbin(1200,650);
	paperObject = new Paper(200,250,20,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  camera.position.x=paperObject.body.position.x
  camera.position.y=paperObject.body.position.y

  groundObject.display();
  dustbinObj.display();
  paperObject.display();

  Engine.update(engine);
}

function keyPressed(){

	if(keyCode === UP_ARROW){
		
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:20,y:-80});

	}
}