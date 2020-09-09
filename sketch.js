
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var object1,object2,object3;
var ground;
var world;
var paperBall
function preload()

{
	
}

function setup() {
	createCanvas(1600, 700);
	var options = {
		isStatic:true
	}
	object1=createSprite(1000, 570, 20,200,options);
	object2=createSprite(1200, 570, 20,200,options);
	object3=createSprite(1100, 660, 200,20,options);

    paperBall=new Paper(300,660,20,20);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paperBall.display();
  keyPressed();
  drawSprites();
 
}



function keyPressed(){
	if(keyCode===UP_ARROW){
  Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:85,y:85});
}
}