var stage=0;
var counter;
var score;
var hp;
var titleg;
var maing;
var dieg;
var wing;
var img;
var font;
var fontr;
var fontl;
var ship;
var aim;
var dg = 0.0;
var dg1 = 1;
var dg2 = 0.0;
var par1;
var par2;
var par3;
var img3;
//.clear>>>>hide canvas,make it transparent
function preload(){
    img=loadImage('space.jpg');
    font=loadFont('Teko-Bold.ttf');
    fontr=loadFont('Teko-Regular.ttf');
    fontl=loadFont('Teko-Light.ttf');
    img2=loadImage('jj.jpg');
    img3= loadImage('die.jpg');
}
function setup(){
createCanvas(windowWidth,windowHeight,WEBGL);
titleg=createGraphics(windowWidth,windowHeight,WEBGL);
maing=createGraphics(windowWidth,windowHeight,WEBGL);
dieg=createGraphics(windowWidth,windowHeight,WEBGL);
wing=createGraphics(windowWidth,windowHeight,WEBGL);
titleg.background(0);

rectMode(CENTER);
noCursor();
aim = new Aim();
par1 = new Par();
par2 = new Par();
par3 = new Par();

}

function draw(){
background(0);
if(stage==0){
    title();
}
if(stage==1){
    stage1();
}
if(stage==2){
    win();
}
if(stage==3){
    die();
}
}

function title(){
    titleg.image(img,-windowWidth/2,-windowHeight/2,windowWidth,windowHeight);
    titleg.textFont(font);
    titleg.textSize(60);
    titleg.textAlign(CENTER,CENTER);
    titleg.text('RECKLESS: THE 2ND WORLD',0,0);
    titleg.textFont(fontr);
    titleg.textSize(20);
    titleg.text('press C to continue',0,50);
    image(titleg,-windowWidth/2,-windowHeight/2,windowWidth,windowHeight);
    
    
}
function stage1(){
    maing.background(34, 35, 48);
    //maing.image(img,-windowWidth/2,-windowHeight/2,windowWidth,windowHeight);
    push();
    translate(-windowWidth/2+mouseX,-windowHeight/2+mouseY);
    aim.display();
    pop();

    maing.rectMode(CENTER);
    maing.fill(0);
    maing.noStroke();
   maing.rect(0,-windowHeight/2,windowWidth,200);
   maing.rect(0,windowHeight/2,windowWidth,200);
   maing.rect(-windowWidth/2,0,100,windowHeight);
   maing.rect(windowWidth/2,0,100,windowHeight);
   maing.noFill();
   maing.stroke(8, 255, 189);
   maing.rect(0,0,windowWidth-30-100,windowHeight-200-30);

   maing.textFont(fontr);
   maing.fill(255);
   maing.textSize(30);
   maing.text('SCORE:',-windowWidth/2+50,-windowHeight/2+60);
   maing.textFont(fontr);
   maing.fill(255);
   maing.textSize(20);
   maing.text('HP: ',-windowWidth/2+100,-windowHeight/2+150)
   push();
  
   translate(windowWidth/2-100,windowHeight/2-150);
   scale(0.4);
   stroke(255, 213, 0);
   par1.dis();
   pop();
   push();

   translate(windowWidth/2-150,windowHeight/2-150);
   scale(0.4);
   stroke(8, 255, 189);
   par2.dis();
   pop();
   push();

   translate(windowWidth/2-200,windowHeight/2-150);
   scale(0.4);
   stroke(8, 255, 189);
   par3.dis();
   pop();
   image(maing,-windowWidth/2,-windowHeight/2,windowWidth,windowHeight);
    


}

function die(){
dieg.background(0);
dieg.image(img3,-windowWidth/2,-windowHeight/2,windowWidth,windowHeight);
dieg.textFont(font);
dieg.fill(255, 213, 0);
    dieg.textSize(60);
    dieg.textAlign(CENTER,CENTER);
    dieg.text('YOU DIED',0,0);
    dieg.textFont(fontr);
    dieg.textSize(60);
    dieg.textAlign(CENTER,CENTER);
    dieg.text('"LOSER OF THE BATTLE"',0,50);
    dieg.textFont(fontr);
    dieg.textSize(20);
    dieg.textAlign(CENTER,CENTER);
    dieg.text('PRESS R TO RESTART',0,90);
image(dieg,-windowWidth/2,-windowHeight/2,windowWidth,windowHeight);
if(keyPressed){
    if(key=='r'){
        stage=0;
    }
}
}

function win(){
    wing.background(0);
    wing.image(img2,-windowWidth/2,-windowHeight/2,windowWidth,windowHeight);
    wing.textFont(font);
    wing.textSize(60);
    wing.textAlign(CENTER,CENTER);
    wing.text('YOU WON',0,0);
    wing.textFont(fontr);
    wing.textSize(60);
    wing.textAlign(CENTER,CENTER);
    wing.text('"RULER OF THE BATTLEFIELD"',0,50);
    wing.textFont(fontl);
    wing.textSize(15);
    wing.textAlign(CENTER,CENTER);
    wing.text('PRESS R TO RESTART',0,90);
    image(wing,-windowWidth/2,-windowHeight/2,windowWidth,windowHeight);
    if(keyPressed){
        if(key=='r'){
            stage=0;
        }
    }
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function keyPressed(){
    if(key=='c'){
        stage+=1;
    }
}

class Aim{
    constructor(){}
    display(){
    noFill();
    strokeWeight(3);
    stroke(8, 255, 189);
    ellipse(0,0,70,70);
    strokeWeight(2);
    stroke(255, 51, 0);
    ellipse(0,0,40,40);
    fill(255, 51, 0);
    ellipse(0,0,10,10);
    }
}

class Par{
    constructor(){
      
    }
    dis(){
    
        scale(0.5);
        rotate(dg2);
        arc(0, 0, 140, 140, 0, radians(100));
        arc(0, 0, 122, 122, 0, radians(100));
        dg2+=0.02;
        rotate(dg1);
        arc(0, 0, 122, 122, 0, radians(95));
        arc(0, 0, 102, 102, 0, radians(95));
        dg1+=0.03;
        rotate(dg);
        arc(0, 0, 100, 100, 0, radians(90));
        dg+=0.05;
        strokeWeight(3);

        ellipse(0, 0, 80, 80);
        ellipse(0, 0, 70, 70);
        ellipse(0, 0, 50, 50);
    
    }
}