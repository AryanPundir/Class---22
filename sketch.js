const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myEngine, myWorld;
var ground;
var ball

function setup() {
  createCanvas(800,400);
  myEngine=Engine.create();   //MyEngine.world
  myWorld=myEngine.world;

 ground=Bodies.rectangle(400,380,800,20,{isStatic:true});

 var opt={restitution:1}

 ball=Bodies.circle(200,100,20,opt)

 World.add(myWorld,ground);
 World.add(myWorld,ball);
console.log(ball);

}

function draw() {
  background(0);
  Engine.update(myEngine);

   rectMode(CENTER);
   rect(ground.position.x,ground.position.y,800,20);  
ellipseMode(RADIUS);
   ellipse(ball.position.x,ball.position.y,20,20);


  
}