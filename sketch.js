
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
Render = Matter.Render;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	var options={
		isStatic: false,
		restitution: 0.4,
		friction: 0.5,
		density: 1.2
	}
	var optionwall={isStatic: true}
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	o1=Bodies.rectangle(500,700,100,10,optionwall);
	o2=Bodies.rectangle(455,690,10,90,optionwall);
	o3=Bodies.rectangle(555,690,10,90,optionwall);
	o4=Bodies.rectangle(50,600,100,10,optionwall);
	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 800,
		  height: 400,
		  wireframes: false
		}
	  });
	//var ball = Bodies.circle(90, 280, 20);
	ball=Bodies.circle(55,90,20,options);

	 /* ball = Bodies.circle(55, 90, 20, {
		render: {
		  sprite: {
			texture: "pngaaa.com-1866382.png",
	
		  }
		}, options
	  });
	 */
	World.add(engine.world, [o1, o2, o3,o4, ball]);

	Engine.run(engine);
	Render.run(render);

}


function draw() {
  rectMode(CENTER);
  background(0);
  rect(o1.position.x,o1.position.y,100,20);
  rect(o2.position.x,o2.position.y,10,90);
  rect(o3.position.x,o3.position.y,10,90);
  rect(o4.position.x,o4.position.y,300,20);
  
  ellipseMode(CENTER);
   ellipse(ball.position.x,ball.position.y,20,20);
  drawSprites();
  
  //engine.update();
 
}
function keyPressed() {
	if (keyCode===UP_ARROW) {
		console.log("UP_ARROW"+UP_ARROW);
		//ball.setVelocity( ball, {x: 10, y: -10});
		Body.applyForce( ball, {x: ball.position.x, y: ball.position.y}, {x: 70, y: 90});

	}
	
}


