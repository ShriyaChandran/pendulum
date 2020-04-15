const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var bob;
var string;

function setup(){
    var canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;
    bob = new Bob(250,400,20,20);
    support = new HangFrom (400,400,8000,40);
    string = new Chain(bob.body,support.body);
}

function draw(){
    background(250)   ;
    Engine.update(engine);
    bob.display();
    support.display();
    string.display();
}
function keyPressed(){
    if(keyCode===32){
        bob.body.position.x = mouseX;
        bob.body.position.y = mouseY;
    }
}