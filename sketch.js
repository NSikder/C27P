
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = Bodies.rectangle(800, 700, 1600, 1 , {friction:1.0, isStatic:true} );
	World.add(world, ground);

	roof = new Box(400,150,400,30);

	//Create the Bodies Here.

	bob1 = new Paper(350,400);
	bob1_r = new Rope(bob1.body,roof.body,-bob1.radius*2,0)

	bob2 = new Paper(450,400);
	bob2_r = new Rope(bob2.body,roof.body,bob2.radius*2,0)

	bob3 = new Paper(400,400);
	bob3_r = new Rope(bob3.body,roof.body,0,0)

	bob4 = new Paper(300,400);
	bob4_r = new Rope(bob4.body,roof.body,-bob4.radius*4,0)

	bob5 = new Paper(500,400);
	bob5_r = new Rope(bob5.body,roof.body,bob5.radius*4,0)
	Engine.run(engine);
}


function draw() {
	rectMode(CENTER);
	background(150,150,150);

	roof.display();
	bob1_r.display();
	bob1.display();
	bob2_r.display();
	bob2.display();
	bob3_r.display();
	bob3.display();
	bob4_r.display();
	bob4.display();
	bob5_r.display();
	bob5.display();


	if (keyWentDown("UP_ARROW")){
		flick();
	  }

	drawSprites();
}

function flick(){
	Matter.Body.applyForce(bob4.body,bob4.body.position,{x:-100,y:-100});
}