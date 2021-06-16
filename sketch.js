const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1 , ground1 , box2;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    ground1 = new Ground(600 , height ,1200 , 30);
    box1 = new Box(700,320,70,70);
    box2 = new Box(920 ,320 ,70 ,70);
    log1 = new Log(810 , 260 , 300 , PI/2 );
    box3 = new Box(700,250,70,70);
    box4 = new Box(920 ,250 ,70 ,70);
    pig1 = new Pig(810 , 350 , 50 , 50);
    pig2 = new Pig(810 , 220 , 50 , 50);
    bird1 = new Bird(200 , 200 , 50 , 50);
    log2 = new Log(810 , 150 , 300 , PI/2);
    box5 = new Box(810 , 100 , 70 , 70);
    log3 = new Log(770 , 120 , 150 , PI/7);
    log4 = new Log(850 , 120 , 150 , -PI/7);

}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    log1.display();
    ground1.display();
    box2.display();
    box3.display();
    box4.display();
    pig1.display();
    pig2.display();
    bird1.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
}