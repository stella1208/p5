let balls = [];
let statue;
let modelpos, spotPos, spotDir;
let slider_hue, slider_angle, slider_conc;
let l1;
let speed;
let dir2;
let p1;
let p2;
let p3;
function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    noStroke();

    statue = loadModel("venus_polygonal_statue.obj");
    slider_hue = createSlider(0, 360, 100);
    slider_hue.position(10, 10);
    slider_angle = createSlider(3, 90, 0);
    slider_angle.position(10, 30);
    slider_conc = createSlider(1, 300, 0);
    slider_conc.position(10, 50);
    spotPos = new p5.Vector(200, 0, 250);
    modelPos = new p5.Vector(0, 250, 250);
    speed = new p5.Vector(2, 2, 2);
    p1 = createP('Light Experiment');
    p2 = createP('20170296 Jin Yewon');
    p3 = createP('Check the Origin or your spot light<br>CLICK MOUSE TO MAKE LIGHTS<br>USE ARROWKEYS TO DISABLE&ENABLE STROKE<br>   <br>   <br>never could we see the origin of light.<br>I tried to visualize it with spheres<br>And when the sphere touches walls(maybe unseen)<br>it gives randomness to our lights');

}

function draw() {
    camera(200, 0, (height / 2.0) / tan(PI * 30.0 / 180.0), 0, 0, 0, 0, 1, 0);
    
    background(255);
    p1.style('font-size','24pt');
    p1.position(windowWidth-350,200);
    p2.style('font-size','12pt');
    p2.position(windowWidth-350,260);
    p3.style('font-size','6pt');
    p3.position(windowWidth-350,350);
    colorMode(RGB);
    lights();
    colorMode(HSB, 360, 100, 100);

    for(let i=0; i<balls.length;i++){
        balls[i].update();
        balls[i].display();
    }
   
   
    push();
    fill(204);
    plane(500, 500, 200, 200);//
    pop();
    push();
    fill(204);
    rotateX(radians(90));
    translate(0, 250, -250);
    plane(500, 500, 200, 200);
    pop();
    push();
    fill(204);
    rotateY(radians(90));
    translate(-250, 0, -250);
    plane(500, 500, 200, 200);
    pop();

    push();
    translate(modelPos);
    scale(3);
    rotateX(PI);
    rotateY(radians(-60));
    model(statue);
    pop();


}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function Ball(x, y, z) {
    randomSeed(millis());
    this.pos = createVector(x, y, z);
    this.vel = createVector(random(-2, 2), random(-2, 2), random(-2, 2));
    //this.dir2 = p5.Vector.sub(modelPos, this.pos);
    this.h=random(360);

    this.update = function () {
        this.pos.add(this.vel);
        if ((this.pos.x > 250) || (this.pos.x < -250)) {
            this.vel.x = this.vel.x * -1;
        }
        if ((this.pos.y > 250) || (this.pos.y < -250)) {
            this.vel.y = this.vel.y * -1;
        }
        if ((this.pos.z > 500) || (this.pos.z < 0)) {
            this.vel.z = this.vel.z * -1;
        }
    }

    this.display = function () {
        this.dir2 = p5.Vector.sub(modelPos, this.pos);
        spotLight(this.h+slider_hue.value()/2, 100, 100, this.pos, this.dir2, radians(slider_angle.value()), slider_conc.value());
        push();
        translate(this.pos);
        fill(this.h+slider_hue.value()/2,50,100);
        sphere(10);
        pop();
        push();
    
            if (keyCode === LEFT_ARROW) {
                noStroke(0);
            } else if (keyCode === RIGHT_ARROW) {
               stroke(0);
            }
        
        line(modelPos.x, modelPos.y, modelPos.z, this.pos.x, this.pos.y, this.pos.z);
        pop();
        
    }

}

function mousePressed(){
    balls.push(new Ball(0,0));
}


  