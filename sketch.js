const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball
var btm2
var btm1

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 var option ={
  restitution:0.95
 }
  ball=Bodies.circle(200,10,10,option)
 World.add(world,ball) 
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
  btm1=createImg("right.png")
  btm1.position(220,30)
  btm1.size(50,50)
  btm1.mouseClicked(h_force)

  btm2=createImg("up.png")
  btm2.position(120,30)
  btm2.size(50,50)
  btm2.mouseClicked(v_force)
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  ellipse(ball.position.x,ball.position.y,10,)
  Engine.update(engine);
}
function h_force(){
Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})

}
function v_force(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
  
  }
