var d;
var d2;
var dload;
var a;
var aload;
var p;
var pload;
var b1;
var b2;
var vp=3;
var vd=1;
 var l;
 var lload;
 var f;
var fr;
var fload ;
function preload(){
pload=loadImage('cara da lança.png');
dload=loadImage('dragao.png');
lload=loadImage('spear2.png')
aload=loadImage('a.jpg');
fload=loadImage('fogo.jpg');
}

function setup() {
 createCanvas(1600,800);
 p = createSprite(100,350);
 p.addImage(pload);
 p.scale=0.1;
 d=createSprite(1200,350);

 d.addImage(dload);
 d.scale=0.777;
b1=createSprite(800,200,1600,10);
b2=createSprite(800,500,1600,10);
b1.visible=false;
b2.visible=false;
f=createSprite(1100,350);
f.scale=0.5;
d2=createSprite(1200,400);
d2.visible=false;
f.addImage(fload);
l=createSprite(-1111111111111111111111111111111111111,350,50,50);
l.addImage(lload);
}

function draw() {
 background('white');
 drawSprites();

 if(keyDown('s')){
  p.velocityY=3;
  }
 
if(keyDown('w')){
  p.velocityY=-3;
  }
  p.collide(b1);
  p.collide(b2);
  
  f.velocityX=-4;

 
  if(f.x < 0){
    f.x = 1100
}
if(keyDown('space')){
 l.x=100
  l.velocityX=4;
 

  }
if (l.isTouching(d)){
  vd=0;
ganhar()

}
 
  
}
function ganhar(){
if (vd==0){
text('Parabéns! Você descobriu a escrita',800,100,);

a=createSprite(800,400,800,400);
a.addImage(aload);
a.scale=4.6;
}

}
