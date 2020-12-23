
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var divider1,divider2,divider3,divider4,divider5,divider6,divider7;
var plinkos = [];
var particles = [];

function preload()
{
	
}

function setup() {
	createCanvas(630, 750);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,720,800,20);
	divider1 = new Divider(400,705,800,10);
	divider2 = new Divider(4,600,10,200);
	divider3 = new Divider(125,600,10,200);
	divider4 = new Divider(250,600,10,200);
	divider5 = new Divider(375,600,10,200);
	divider6 = new Divider(500,600,10,200);
  divider7 = new Divider(625,600,10,200);
  
 for(var j = 40; j <=width; j=j+50){
  plinkos.push(new Plinko(j,75,20));
 }

 for(var k = 15; k <=width-10; k=k+50){
  plinkos.push(new Plinko(k,150,20));
 }

 for(var l = 40; l <=width; l=l+50){
  plinkos.push(new Plinko(l,225,20));
 }

 for(var m = 15; m <=width-10;m=m+50){
  plinkos.push(new Plinko(m,300,20));
 }

 for(var n = 40; n <=width; n=n+50){
  plinkos.push(new Plinko(n,375,20));
 }

 /*for(var o = 40; o <=width; o=o+50){
  particles.push(new Particle(o,375,10));
 }*/

 particle1 = new Particle(300,50,10);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(92,196,76);
  
  ground.display();
  divider1.display();
  divider2.display();
  divider3.display();
  divider4.display();
  divider5.display();
  divider6.display();
  divider7.display();

  for(var j=0;j<plinkos.length;j++){
    plinkos[j].display();
  }

  for(var k=0;k<plinkos.length;k++){
    plinkos[k].display();
  }

  for(var l=0;l<plinkos.length;l++){
    plinkos[l].display();
  }

  for(var m=0;m<plinkos.length;m++){
    plinkos[m].display();
  }

  for(var n=0;n<plinkos.length;n++){
    plinkos[n].display();
  }

 /* for(var o=0;o<particles.length;o++){
    particles[o].display();
  }*/
particle1.display();

  drawSprites();
 
}



