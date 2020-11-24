const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var obj_box1;


function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    /*var ball_options ={
        restitution: 1.0
    }

    ball = Bodies.circle(200,100,20, ball_options);
    World.add(world,ball);*/

    obj_box1 = new Box(200,300,50,50);
    obj_box2 = new Box(200,100,50,50);

    ground = new Ground(200,390,400,20);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);

    obj_box1.display();
    obj_box2.display();
    ground.display();
}