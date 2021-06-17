
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;



function preload()
{
	bg = loadImage("park.png") 
	boy = loadImage("boy.png")
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stoneObj=new stone(265,485,30); 
	launcherObject = new Launcher(stoneObj.body,{x:265, y:495});
	Engine.run(engine);
	blue1=new blue(100,100,30);
	red1=new red(400,200,30)
	red2=new red(700,100,30)
	green = new Green(700,300,30)
	green2 = new Green(240,150,30)
	blue2=new blue(500,100,30);
	
  
}


function draw() {
  rectMode(CENTER);
  background(bg);
  textSize(25);
  text("Press Space to get a second Chance to Play!!",280 ,370);
  textSize(25);
  text("if all balloons are destroyed then you win",320 ,390);
  image(boy ,10,300,500,500);


  stoneObj.display();
  launcherObject.display();

 blue1.display()
 red1.display()
 green.display()
 green2.display()
 blue2.display()
 red2.display()
 
 detectollision(stoneObj,red1);
  detectollision(stoneObj,red2);
  detectollision(stoneObj,blue1);
  detectollision(stoneObj,blue2);
  detectollision(stoneObj,green);
  detectollision(stoneObj,green2);


  drawSprites();
 
}
function mouseDragged(){
	Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY})
	}
	
  
  //create mouseReleased function here
  function mouseReleased(){
	launcherObject.fly()
	}
  
  //create keyPressed function here
  function keyPressed(){
	if(keyCode===32){
	  Matter.Body.setPosition(stoneObj.body,{x:235, y:420});
	launcherObject.attach(stoneObj.body);
	}
  }
  function detectollision(lstone,lblue){

	blueBodyPosition=lblue.body.position
	stoneBodyPosition=lstone.body.position
	
	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, blueBodyPosition.x, blueBodyPosition.y)
		if(distance<=lblue.r+lstone.r)
	  {
		  Matter.Body.setStatic(lblue.body,false);
	  }
  
	}
	
