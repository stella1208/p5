let h1;
let h2;
let h3;
let h4;
let h5;
let pos;
let one, one1;
let hands = [];
let top1;
let tpo2;
var b=0;
let X, Y, Z;
let img;
let bgm;
let bgmbutton;
let ctx, ctxOn;
let count;
let t;
let ones = [];
var a = 0;
var s1;
var s2;
var s3;
var s4;
var s5;
var s6;
var texts=[];
var count2;
var p;
var bbo;
function preload() {
    h1 = loadModel('hand_01.obj');
    h2 = loadModel('hand_02.obj');
    h3 = loadModel('hand_03.obj');
    h4 = loadModel('hand_04.obj');
    h5 = loadModel('hand_05.obj');
    img=loadImage('god.jpeg');
    bgm=loadSound('m.mp3');
}
function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    p=createP('20170296 Jin Yewon<br>Computer Graphics<br>Project#4<br>"VISHUNU"');
    p.style('font-size','8pt')
    p.style('color','#FFFFFF');
    p.position(10,30);
    bbo=1500;

    s1=createP('비슈누 (Vishunu / Hari) - 세계 질서를 유지하는 신');
    s2=createP('비슈누(Visnu) 신은 우주의 유지자, 보존자이다. 항상 자애로우며, <br>진리를 수호하고 그것을 적극적으로 실현시키는 자이다. <br>시바는 성격이 복잡한 반면, 비슈누는 언제나 쾌활하고 자애로운 단순한 성격이다.<br>비슈누는 하늘에 살면서 지상을 내려보다가 이의 질서가 흔들리게 되면 최대한의 역량을 발휘하여 바로 잡는다. <br>비슈누의 활동에 관한 이야기는 푸나라에 무궁무진하고 흥미 롭게 전개되어 있다.');
    s3=createP('비슈누의 형상은 대개 검푸른색 얼굴에 네 개의 팔을 가진 모습으로 묘사된다. <br>두 손에는 당당한 힘을 상징하는 철퇴(곤봉)와 원반을 각각 들고 있고 <br>나머지 두 손에는 주술의 힘과 티없는 청정성을 상징하는 나팔 및 연꽃을 들고 있다. <br>머리에는 높다란 왕관을 쓰고 있다. 발은 푸른색이며, 황금색 옷을 입고 있다.');
    s4=createP('비슈누의 황홀하고 그윽한 눈은 수많은 인도인의 숭경심을 자아낸다.<br>휴식을 취할 때면 우주적인 뱀 셰샤(Sesa), 또는 아난타 (Ananta)에게 기댄다.<br> 비슈누는 가루다(Garuda)라는 새(神鳥)를 타고 다니며, 물고기를 자신의 상징으로 한다.<br>인도의 신화 베다에서 비슈누는 태양의 신(수리야 Surya)으로 등장한다.');
    s5=createP('비슈누는 세상의 상황에 따라 10가지의 변화된 모습으로 지상에 내려오는데 <br>이를 비슈누의 화신이라 한다.');
    s6=createP('Press Q to zoom out E to zoom in');
    texts=[s1,s2,s3,s4,s5,s6];
    t=false;
    s1.hide();
    s2.hide();
    s3.hide();
    s4.hide();
    s5.hide();
    s6.hide();
    // ctx = getAudioContext();
    // ctxOn = createButton('turn on Audio');
    // ctxOn.position(10, 10);
    // ctxOn.mousePressed(() => {
    //     ctx.resume().then(() => {
    //         console.log('Audio Context is now ON');
    //         ctxOn.hide();
    //         bgmbutton.show();
    //     });
    // });
    bgmbutton = createButton('Music');
    //bgmbutton.hide();
    bgmbutton.position(10, 10);
    bgmbutton.mousePressed(tog);
    count=0;
    count2=0;
    one = new One(300);
    one1 = new One(300);
    hands = [h1, h2, h3, h4, h5];
    ///
    top1 = new Top(250, 10, 700);
    top2 = new Top(400, 17, 500);
    top3=new Top(120,3,900);
    top4=new Top(550,24,300);
    one2=new One(1100);
    top5=new Top(750,24,300);
    cam=createCamera();
    X=0;
    Y=0;
    Z= (height/2.0) / tan(PI*30.0 / 180.0)-900;  
    bgm.loop();  
}
function draw() {
    count2+=1;
    if(t==true){
    count+=1;
    }
    if(count>0&&count<2400){
        Z+=1.2;
     }else{count+=0; t=false;}
 for(var i=0;i<6;i++){
     texts[i].style('font-size','8pt')
     texts[i].style('color','#FFFFFF');
     texts[i].position(20,windowHeight/2);
 }
    let locX = mouseX;
  let locY = mouseY ;
    // mx=map(mouseX,0,windowWidth,0,130);
    // rotateY(radians(mx));
   //rotateX(radians(-20));
    cam.setPosition(0,0,Z);
    if(count2>900+bbo){
        texts[0].show();
    }if(count2>1100+bbo){
        texts[0].hide();
        texts[1].show();
    }if(count2>1700+bbo){
        texts[1].hide();
        texts[2].show();
    }if(count2>2300+bbo){
        texts[2].hide();
        texts[3].show();
    }if(count2>2900+bbo){
        texts[3].hide();
        texts[4].show();
    }if(count2>3200+bbo){
        texts[4].hide();
        texts[5].show();
    }if(count2>3500+bbo){
        texts[5].hide();
    }
    background(0);
    noStroke();
    translate(0,100,0);
    ambientLight(50,50,50);
    directionalLight(50,50,50,-1,0,0);
    directionalLight(50,50,50,1,0,0);
    directionalLight(70,70,70,0,-1,0);
    directionalLight(70,70,70,0,1,0);
    pointLight(200, 200, 200, locX, locY,300);
    //
    push();
    rotateX(radians(-90));
    translate(0,0,500);
    fill(252, 3, 90);
    plane(2000,6000);
    pop();
    push();
    translate(0,-1000,-1000);
    fill(252, 3, 90);
    plane(2000,4000);
    ///
    pop();
    push();
    translate(-760,-2000,-1000);
    scale(1.5);
    image(img,0,0);
    pop();
    push();
    translate(0,0,-500);
    scale(1.2);
   drawatop();
   pop();
   push();
   fill('#ffd700');
   specularMaterial('#ffd700');
   shininess(100);
   torus(300,1.5,60);
   torus(350,1,60);
   rotateX(radians(-90));
   pop();

   push();
   scale(2);
   translate(0,0,-200);
   rotateX(radians(-90));
   rotateY(radians(-b/10));
   top5.make();
   b+=1;
   pop();

   ////
if(keyIsPressed){
   if(key=='a'){
    X+=10;
 }
 if(key=='d'){
     X-=10;
 }
 if(key=='w'){
     Y+=10;
 }
 if(key=='s'){
     Y-=10;
 }
 if(key=='q'){
     Z+=5;
 }
 if(key=='e'){
     Z-=5;
 }
}

push();
translate(980,-1000,3000);
for(var i=0;i<20;i++){
    fill(252, 3, 90);
    translate(0,0,-200);
    cylinder(20,4000);
  
}
pop();
push();
translate(-980,-1000,3000);
for(var i=0;i<20;i++){
    fill(252, 3, 90);
    translate(0,0,-200);
    cylinder(20,4000);
  
}
pop();
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

class One {
    constructor(h) {
        this.h = h;
    }
    display() {

        rotateY(radians(-90));
        rotateX(radians(180));
        randomSeed(0);
        specularMaterial(157, 184, 229);
        shininess(50);
        fill(157, 184, 229);
        pos=int(random(0,5));
        if (pos == 0) {
            push();
            translate(0, 0, -200);
            model(h1);
            pop();
        } else if (pos == 1) {
            push();
            model(h2);
            pop();
        } else if (pos == 2) {
            push();
            rotateY(radians(a));
            translate(0, 0, 200);
            model(h3);
            pop();
        } else if (pos == 3) {
            push();
            translate(0, 0, 400);
            model(h4);
            pop();
        } else if (pos == 4) {
            push();
            translate(0,0, 600);
            model(h5);
            pop();
        }
    }
    displayc(){
        push();
        translate(0, -this.h/2+150, 0);
        fill(255,255,255);
        shininess(100);
        cylinder(70, this.h);
        pop();
    }
    

}

class Top {
    constructor(r, num, hh) {
        this.r = r;
        this.num = num;
        this.hh = hh;
    }
    make() {
        for (var i = 0; i < 360; i += 360 / this.num) {
            var angle = radians(i);
            var x = cos(angle) * this.r;
            var z = sin(angle) * this.r;
            ones[i] = new One(this.hh);
       
            push();
            scale(0.3);
            translate(x, 200, -z);
            rotateY(radians(random(0,360)));
            fill(157, 184, 229);
            ones[i].display();
            ones[i].displayc();
            pop();

        }
    }

}
function drawatop(){
    push();
    scale(0.3);
    rotateY(radians(-a));
    translate(0,-400,0);
    one2.display();
    one2.displayc();
    pop();
    push();
    rotateY(radians(-a/2));
    translate(0,-60,0);
    top1.make();
    pop();
    push();
    rotateY(radians(a/3));
    top2.make();
    pop();
    push();
    rotateY(radians(a));
    translate(0,-120,0);
    top3.make();
    pop();
    push();
    rotateY(radians(-a/2));
    translate(0,60,0);
    top4.make();
    pop();
 a+=1;

}
function tog() {
    t=true;
    bgm.play();
    if (bgm.isPlaying()) {
        bgm.pause();
    } else {
        bgm.play();
    }
}
