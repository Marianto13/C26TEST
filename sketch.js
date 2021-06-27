
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
Render = Matter.Render;
function preload()
{
	dotImg = loadImage('pngaaa.com-1866382.png');
	binImg = loadImage('bin.png');
	bgimg = loadImage('bg.jpeg');
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
	o4=Bodies.rectangle(50,600,500,10,optionwall);
	//bin=Bodies.rectangle(504,670,300,100,optionwall);
	//var ball = Bodies.circle(90, 280, 20);
	//ball=Bodies.circle(55,90,20,options);
	ball = new Ball(150, 300, 10);
	bin = new Bin(504, 670, 30);
	 /* ball = Bodies.circle(55, 90, 20, {
		render: {
		  sprite: {
			texture: "pngaaa.com-1866382.png",
	
		  }
		}, options
	  });
	 */
	World.add(engine.world, [o1, o2, o3,ball,o4]);

	Engine.run(engine);
	//Render.run(render);

}


function draw() {
  rectMode(CENTER);
  background(bgimg);
  fill("red")
  rect(o1.position.x,o1.position.y,100,20);
  rect(o2.position.x,o2.position.y,10,90);
  rect(o3.position.x,o3.position.y,10,90);

  //rect(bin.position.x,bin.position.y,90);
 // rect(504,670,90);
 

  fill("brown");
  rect(o4.position.x,o4.position.y,500,20);
  
 

  //imageMode(CENTER);
  //image(binImg, 504, 670, 100,50);
  ball.show();
  bin.show();
  //ellipseMode(CENTER);
   //ellipse(ball.position.x,ball.position.y,20,20);
 // drawSprites();
  
  //engine.update();
 
}
function keyPressed() {
	if (keyCode===UP_ARROW) {
		console.log("UP_ARROW"+UP_ARROW);
		//ball.setVelocity( ball, {x: 10, y: -10});
		//let pushVec = {x: 70, y: 90};[]
		let pushVec = Matter.Vector.create({x: 0, y: 0.07});
        let posVec = Matter.Vector.create(ball.body.position.x, ball.body.position.y)
		//Body.applyForce( ball, {x: ball.position.x, y: ball.position.y}, {x: 70, y: 90});
		Body.applyForce( ball.body, {x: ball.body.position.x, y: ball.body.position.y}, {x: 0.01, y: 0.01});
		//Body.applyForce(ball.body, posVec, pushVec);
		ball.show();
		bin.show();
		
 
	}
	
}


