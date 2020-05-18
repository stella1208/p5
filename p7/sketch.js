let cam_x, cam_y, cam_z;
let cam_cx, cam_cy, cam_cz;
let cam_dx=0;
let cam_dy=0;
let cam_dz=-1;

let pan, tilt;
let seed;
let Bldgs = [];
let counter = 0;
var pg;
let a = 0;
let img;
let sampleIsLooping = false;
let Vecs = [];
let Vecs2 = [];
let Vecs3 = [];
let step = 0;
let k = 0;
let topt = 0;
let bgm;
let t;
let dollx=1000;
let dollz=20;
let dolly=0;
let d;
let kk=1;
let kkd=1;
let s=3;
let ca=5;
let poop=1.5;
let kkk=1;
let poppop=1;

class Building {
    constructor(x, y, z, w, d, h) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
        this.d = d;
        this.h = h;
    }
    render() {
        push();
        translate(this.x, this.y, this.h / 2 + this.z);
        fill(255);
        box(this.w, this.d, this.h);
        pop();
    }
}
function preload(){
    bgm=loadSound('Broken Bones.mp3');
}
function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    frameRate(30);
    background(0);
    img = loadImage('kk.jpg');
    bgmbutton = createButton('Music');
    bgmbutton.position(10, 50);
    bgmbutton.mousePressed(tog);
    d = new Doll(dollx,dolly,dollz);
    // init camera
    cam_x = 1100;
    cam_y = 0;
    cam_z = 30;
   
    cam_cx = -2000;
    cam_cy = 0;
    cam_cz = 0;
    pan = 0;
    tilt = 0;
    seed = second(); // current second 0~59
    randomSeed(seed);
    for (let i = 0; i < 30; i++) {
        let w = random(30, 60);
        let d = random(30, 60);
        let h = random(100, 300);
        let y = random(-150, -50);
        let x = random(-1000, 1000);
        let z = 0;
        let b = new Building(x, y, z, w, d, h);
        let v = createVector(x, y, z);
        Bldgs.push(b);
        Vecs.push(v);
    }
    for (let i = 0; i < 30; i++) {
        let w = random(30, 60);
        let d = random(30, 60);
        let h = random(100, 300);
        let y = random(50, 150);
        let x = random(-1000, 1000);
        let z = 0;
        let b = new Building(x, y, z, w, d, h);
        let v = createVector(x, y, z);
        Bldgs.push(b);
        Vecs.push(v);
    }
    ///
    let radius = 130;
    let va;
    let vb;

    for (var j = 0; j < 6; j++) {
        vc = 300 * j;
        for (var i = 0; i < 360; i += 360 / 10) {
            let angle = radians(i);
            va = cos(angle) * radius;
            vb = sin(angle) * radius;
            let v2 = createVector(va, vb, vc);
            Vecs2.push(v2);
        }
    }

    for (var i = 0; i < 60; i++) {

        let v3 = p5.Vector.lerp(Vecs[i], Vecs2[i], step);
        Vecs3.push(v3);
    }

}


function draw() {
    background(0);

    directionalLight(252, 3, 53, 1, 0, 0); // side light
    directionalLight(252, 3, 53, 1, 0, 0); // side light
    directionalLight(252, 3, 53, -1, 0, 0); // side light
    directionalLight(252, 3, 53, -1, 0, 0); // side light
    directionalLight(3, 252, 173, 0, 1, 0); // side light
    directionalLight(3, 252, 173, 0, -1, 0); // side light
   
    directionalLight(255, 0, 136, 0, 0, 1); // td light
    directionalLight(100, 100, 100, 0, 0, -1); // top light
    if(t==true){
    counter += 1;
    }
    camera(cam_x, cam_y, cam_z, cam_cx, cam_cy, cam_cz, cam_dx, cam_dy, cam_dz);
    perspective(radians(60), width / height, 1, 10000);

    noStroke();
    fill(100);
    for(var i=0;i<20;i++){
        push();
        translate(-1000+100*i,0,0)
        cylinder(0.5,600);
        pop();
    }
    //plane(2000, 300);
    ////
    push();
    translate(topt, 0, 0);
    push();
    rotateZ(radians(k));
    for (let i = 0; i < 10; i++) {
        Bldgs[i].render();
    }
    pop();
    push();
    rotateZ(radians(-k));
    for (let i = 10; i < 20; i++) {
        Bldgs[i].render();
    }
    pop();
    push();
    rotateZ(radians(k));
    for (let i = 20; i < 30; i++) {
        Bldgs[i].render();
    }
    pop();
    push();
    rotateZ(radians(-k));
    for (let i = 30; i < 40; i++) {
        Bldgs[i].render();
    }
    pop();
    push();
    rotateZ(radians(k));
    for (let i = 40; i < 50; i++) {
        Bldgs[i].render();
    }
    pop();
    push();
    rotateZ(radians(-k));
    for (let i = 50; i < 60; i++) {
        Bldgs[i].render();
    }
    pop();
    pop();
    push();
    translate(400, -500, 500);
    rotateZ(radians(-90));
    rotateX(radians(-90));
    rotateY(radians(90));
    image(img, -windowWidth / 2, -windowHeight / 2+50, 1000, 1000);
    push();
    translate(1000, 0, 0);
    image(img, -windowWidth / 2, -windowHeight / 2+50, 1000, 1000)
    pop();
    pop();
    push();
    translate(400, 500, 500);
    rotateZ(radians(-90));
    rotateX(radians(-90));
    rotateY(radians(90));
    image(img, -windowWidth / 2, -windowHeight / 2+50, 1000, 1000);
    push();
    translate(1000, 0, 0);
    image(img, -windowWidth / 2, -windowHeight / 2+50, 1000, 1000)
    pop();
    pop();
    d.rend();
print(counter);


    if (counter > 0) {
      cam_x-=1.5;
      d.p-=poop;
      cam_z=30;
      
    }
    if(counter>220&&counter<=270){
        cam_cx = d.p;
        cam_x = d.p-100;
        cam_z=30;
       
    }
    if(counter>270&&counter<=320){
        cam_cx = d.p;
        cam_x = d.p-100;
        cam_z=-100;
        cam_x = d.p-30;
        cam_cz = 30;
        cam_z=30;
       
    }
    if(counter>320&&counter<=370){
        cam_cx = d.p;
        cam_x = d.p-500;
        cam_z = 30;
        cam_cz = 300;
        
    
    }
    if(counter>370&&counter<=620){
        cam_cx = d.p;
        cam_x = d.p+100;
        cam_cz = 30;
        cam_z=30;
    }
 
  
  
    if (counter > 620) {
    cam_cx = -1000;
    cam_x = d.p+100;
    cam_cz+=ca;
    if(cam_cz>500){
        ca=0;
    }
        let am = 0.007;
        print(step);
        if (step <= 1) {
            step += am;
        }
        for (var i = 0; i < 60; i++) {
            Vecs3[i] = p5.Vector.lerp(Vecs[i], Vecs2[i], step);
            Bldgs[i].x = Vecs3[i].x;
            Bldgs[i].y = Vecs3[i].y;
            Bldgs[i].z = Vecs3[i].z;
        }
        k += 1;
        if (topt <= 0 && topt > -800) {
            topt -= 10;
        }
        
    }
    if(counter>870&&counter<=1070){
        cam_y=500;
        cam_x=d.p;
        cam_cx=d.p;
        cam_cy=-1000;
        cam_z=30;
    }
    if(counter>1070&&counter<=1120){
        cam_y=0;
        cam_cy=0;
        cam_cx = d.p;
        cam_x = d.p+100+kkk;
        cam_cz = 30;
        kkk-=0.5;
        cam_z=30;
        
    }
    if(counter>1120&&counter<=1170){
        cam_y=0;
        cam_cy=0;
        cam_cx = d.p;
        cam_x = d.p+100;
        cam_cz = 1000;
        cam_z=30;
       
    }
  
   
    if(d.p<-550){
        poop=0;
        
    }

    if(counter>1170&&counter<=1300){
        cam_y=500;
        cam_x=d.p;
        cam_cx=d.p;
        cam_cz = 30;
        cam_cy=-1000;
        if(d.p>=-800){
        poop=1.5;
        }else poop=0;
    }
  if(counter>1300){
     
      cam_y=0;
      cam_cy=0;
      cam_cz=1500;
      cam_x=d.p+5;
      cam_cx=d.p;
      d.r+=2;
     cam_z+=1
  }
  }


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}


   function tog() {
    t=true;
    if (!sampleIsLooping) {
        //loop our sound element until we
        //call ele.stop() on it.
        bgm.loop();
  
        sampleIsLooping = true;
      } else {
        bgm.pause();
        sampleIsLooping = false;
      }
    
      
}


class Doll{
constructor(p,q,r){
    this.p=p;
    this.r=r;
    this.q=q;
}

rend(){
    push();
    translate(this.p,this.q,this.r);
    fill(0, 255, 217);
 ellipsoid(10,10,20);
 push();
 fill(255);
 translate(-5,0,10);
 sphere(5,5);
 push();
 fill(50);
 translate(-5,0,1);
 sphere(2,2);
 pop();
 pop();
 pop();
}
updown(){

}
}
