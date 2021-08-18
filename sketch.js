const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
var rad = 35;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);
	ellipseMode(CENTER);
	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}
	var bob_options={
		restitution:0.5
	};
	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	bob1 = Bodies.circle(260,400,rad,bob_options);
	World.add(world,bob1);
	bob2 = Bodies.circle(290,400,rad,bob_options);
	World.add(world,bob2);
	bob3 = Bodies.circle(320,400,rad,bob_options);
	World.add(world,bob3);
	bob4 = Bodies.circle(350,400,rad,bob_options);
	World.add(world,bob4);
	bob5 = Bodies.circle(380,400,rad,bob_options);
	World.add(world,bob5);

	rope1 = Matter.Constraint.create({
		pointA:{x:290,y:100},
		bodyB:bob1,
		pointB:{x:0,y:0},
		length:300,
		stiffness:0.1
	  });
	  World.add(world,rope1);
	  rope2 = Matter.Constraint.create({
		pointA:{x:342.5,y:100},
		bodyB:bob2,
		pointB:{x:0,y:0},
		length:300,
		stiffness:0.1
	  });
	  World.add(world,rope2);
	  rope3 = Matter.Constraint.create({
		pointA:{x:405,y:100},
		bodyB:bob3,
		pointB:{x:0,y:0},
		length:300,
		stiffness:0.1
	  });
	  World.add(world,rope3);
	  rope4 = Matter.Constraint.create({
		pointA:{x:457.5,y:100},
		bodyB:bob4,
		pointB:{x:0,y:0},
		length:300,
		stiffness:0.1
	  });
	  World.add(world,rope4);
	  rope5 = Matter.Constraint.create({
		pointA:{x:510,y:100},
		bodyB:bob5,
		pointB:{x:0,y:0},
		length:300,
		stiffness:0.1
	  });
	  World.add(world,rope5);


	  

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  ellipseMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);
  
  //call display() to show ropes here

  
  //create ellipse shape for multiple bobs here
  ellipse(bob1.position.x,bob1.position.y,rad);
  ellipse(bob2.position.x,bob2.position.y,rad);
  ellipse(bob3.position.x,bob3.position.y,rad);
  ellipse(bob4.position.x,bob4.position.y,rad);
  ellipse(bob5.position.x,bob5.position.y,rad);

  push();
  strokeWeight(2);
  stroke(255);
  line(rope1.pointA.x,rope1.pointA.y,bob1.position.x,bob1.position.y);
  line(rope2.pointA.x,rope2.pointA.y,bob2.position.x,bob2.position.y);
  line(rope3.pointA.x,rope3.pointA.y,bob3.position.x,bob3.position.y);
  line(rope4.pointA.x,rope4.pointA.y,bob4.position.x,bob4.position.y);
  line(rope5.pointA.x,rope5.pointA.y,bob5.position.x,bob5.position.y);
  pop();
 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed(){
	if(keyCode==RIGHT_ARROW)
    {
      Matter.Body.applyForce(bob5,{x:0,y:0},{x:0.3,y:0});
    }
}