const Engine = Matter.Engine
const Bodies = Matter.Bodies
const World = Matter.World
var myWorld,myEngine
var ball

function setup() {
  createCanvas(800,400);
  myEngine = Engine.create()
 myWorld = myEngine.world
 var groundOptions = { isStatic: true }
 ground = Bodies.rectangle(400,380,800,10,groundOptions)
 World.add(myWorld,ground)
ball = Bodies.circle(400,200,25,ballOptions)
console.log(ball.restitution)
World.add(myWorld,ball)
var ballOptions = { restitution:6}
}

function draw() {
  background(255,255,255);  
rect(ground.position.x,ground.position.y,800,400)
Engine.update(myEngine)
ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,25,25)

}