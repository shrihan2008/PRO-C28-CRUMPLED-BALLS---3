
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ball,ball1 
var bin,bin1,bin2
var ground
var launch
var launch1

function preload() {
   launch=loadImage("bin.png")
  
}

  function setup() 
  {
    createCanvas(700, 700);
      
    engine = Engine.create();
    world = engine.world;

    //Create the Bodies Here.

    Engine.run(engine);
    ball= new Ball(300,400,50);
    
bin=new Dustbin(575,629,10,110);
bin1=new Dustbin(625,680,100,10)
bin2=new Dustbin(680,630,10,110);  
ground=new Ground(0,700,10000,40);
launch1=createSprite(630,625)
launch1.addImage(launch)
launch.resize(100,100)
shot=new Launch(ball.body,{x:200, y:50})

  
  }



  function draw() 
  {
    rectMode(CENTER);
    background("white"); 
    ball.display()
    ground.display()
    bin.display()
    bin1.display()
    bin2.display()
    shot.display()
    //keyPressed();    
    drawSprites();
  
  }
  function keyPressed()
  {
    if(keyCode===UP_ARROW  ){
      
    Matter.Body.applyForce(ball.body,ball.body.position,{x:350,y:-85});
  }
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  shot.fly();
}




