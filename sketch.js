
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var object1,object2,object3;
var ground;
var world;
var paperBall;
function preload()

{
	
}

function setup() {
	createCanvas(1600, 700);
	var options = {
		isStatic:true
	}
	object1=new Dustbin(1000, 570, 20,200,options);
	object2=new Dustbin(1200, 570, 20,200,options);
	object3=new Dustbin(1100, 660, 200,20,options);

    var ball_options ={
        restitution: 1.0
    }
    ball=Bodies.circle(200,100,20,ball_options);
    World.add(world,ball);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 
  drawSprites();
  ellipse(ball.position.x,ball.position.y,20,20);

}



function keyPressed(){
	if(keyCode===UP_ARROW){
  Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:85,y:85});
}
}