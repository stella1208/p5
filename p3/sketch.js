let x = 2;
let y = x;
let w = 50;
let h = 50;
let offset = 2;
let grid = 30;
let gridsize = grid * grid;
let tiles = [];
var val = 0;
var font;
var sx;
var sy;
var sz;
var a;
var b;
var c;
var fslider;
let buildings = [];
var rslider;
var gslider;
var bslider;
var asliders = [];
var huesliders = [];
var check;
var hsliders = [];
let sound;
let bgm;
let button;
var height;
let bgmbutton;
let ctx, ctxOn;
let tsliders = [];
let font2;
let font3;
let title;
let s;
var px = -400;
var txt1;
var txt2;
var tt;
var len;
var trans;
var up_down;
var lego;
let legos=[];
var legob;
var wan1;
var wan2;
var wan3;
var ccc;
var ccc2;

function preload() {
    sound = loadSound('beep.wav');
    bgm = loadSound('galdive_cloud.mp3');
    
    lego = loadModel('lego.obj');
}
function setup() {

    createCanvas(windowWidth, windowHeight, WEBGL);
    makerects();
    ctx = getAudioContext();
    ctxOn = createButton('turn on Audio');
    ctxOn.position(10, 10);
    ctxOn.mousePressed(() => {
        ctx.resume().then(() => {
            console.log('Audio Context is now ON');
            ctxOn.hide();
            bgmbutton.show();
        });
    });
    ccc=createP('Make you own lovely town, city, world.<br>Everything you imagine, <br>you can have it.<br>with colorful little cubes. Imagine.<br>Be creative. <br>Be what you want to be.<br>Here no loan no mortage.<br>Only your very own Palace<br>Chane colors, change height,<br>Change yposition, <br>change alpha range!!');
    ccc.style("font-size","4pt");
    ccc.style("color","white");
    ccc.style("font-family","Roboto-Black");
    ccc2=createP('3rd project<br>Computer Graphics<br>Using P5.js<br>Stella Yewon Jin<br>20170296');
    ccc2.style("font-size","4pt");
    ccc2.style("color","white");
    ccc2.style("font-family","Roboto-Black");

    fslider = createSlider(0, 60, 20);
    rslider = createSlider(0, 255, 150);
    gslider = createSlider(0, 255, 50);
    bslider = createSlider(0, 255, 50);
    button = createButton('erease all');
    bgmbutton = createButton('Music');
    bgmbutton.hide();
    fslider.position(10, 30);
    rslider.position(10, 40);
    gslider.position(10, 50);
    bslider.position(10, 60);
    button.position(10, 80);
    bgmbutton.position(10, 10);
    button.mousePressed(erease);
    bgmbutton.mousePressed(tog);

    legob=createButton('make hoo-man');
    legob.mousePressed(human);

    font = loadFont('Roboto-Black.ttf');
    font2 = loadFont('Raleway-BoldItalic.ttf');
    font3 = loadFont('Boxing Brophius.ttf');
    wan1=createP('!!!move your pointer(hot-pink rect)');
    wan2=createP('with arror keys first.Choose tile!!!');
    wan3=createP('your hoo-man/buildings will be shown on that position!!!');
    wan1.style("color","#ba3a69");
    wan2.style("color","#ba3a69");
    wan3.style("color","#ba3a69");
    txt=createP('Display Brightness Max!!!');
    txt.style('font-size','10pt');
    wan1.style('font-family','Roboto-Black');
    wan2.style('font-family','Roboto-Black');
    wan3.style('font-family','Roboto-Black');
    wan1.style('font-size','8pt');
    wan2.style('font-size','8pt');
    wan3.style('font-size','8pt');
    // wan1.style('font-family','Roboto-Black');
    // wan2.style('font-family','Roboto-Black');
    // wan3.style('font-family','Roboto-Black');
    txt.style("font-family","Roboto-Black");
    txt.style("color","white");
    txt2=createP('Meine kleine Stadt');
    txt2.style("color","#ffccf8");
    txt2.style("font-family","Boxing Brophius");
    txt2.style("font-size","17pt");
    
   
    noStroke();
    sx = 10;
    sy = 10;
    sz = -500;
    a = 0;
    b = 0;
    c = 0;
    tt=createP('hue');
    tt.style('color','#dbdbdb');
    tt.style('font-size','7pt');
    tt.hide();
    len=createP('length');
    len.style('color','#dbdbdb');
    len.style('font-size','7pt');
    len.hide();
    trans=createP('alpha');
    trans.style('color','#dbdbdb');
    trans.style('font-size','7pt');
    trans.hide();
    up_down=createP('up_down');
    up_down.style('color','#dbdbdb');
    up_down.style('font-size','7pt');
    up_down.hide();
    bgm.loop();
   
    
}
function draw() {
    background(0, 200, 200);
    lights();
    ambientLight(30, 30, 30);
    directionalLight(50, 50, 50, 0, 0, -1);
    directionalLight(rslider.value(), gslider.value(), bslider.value(), 0, 0, -1);
    tt.position(145, windowHeight / 2-7);
    len.position(145,windowHeight/2+4);
    trans.position(145,windowHeight/2+15);
    up_down.position(145,windowHeight/2+25);
    txt.position(windowWidth-135,windowHeight/2-10);
    txt2.position(windowWidth -135, 0);
    legob.position(windowWidth-130,windowHeight/2-30);
    wan1.position(150,25);
    wan2.position(150,35);
    wan3.position(150,45);
    ccc.position(10,450);
    ccc2.position(10,600);
    ////light
   push();
    textFont(font);
    fill(255);
    textSize(9);
    textAlign(CENTER);
    text('Music: Galdive-Cloud', px+=0.4,-windowHeight/2+8);
    pop();
   
    if (px > windowWidth) {
        px = -600;
    }
   
    push();
    translate(-windowWidth / 2, -windowHeight / 2);
    textFont(font);
    fill(255, 214, 102);
    textSize(24);
    textAlign(CENTER);
    text('Q', 25, 143);
    text('W', 60, 143);
    text('E', 95, 143);
    text('A', 35, 178);
    text('S', 70, 178);
    text('D', 105, 178);
    textSize(11);
    text('SPACE to Build', 65, 223);
    text('UP', 60, 275);
    textSize(8);
    text('LEFT', 25, 308);
    text('DOWN', 60, 308);
    text('RIGHT', 95, 308);
    stroke(250, 185, 7);
    strokeWeight(3);
    noFill();
    rect(10, 120, 30, 30);
    rect(45, 120, 30, 30);
    rect(80, 120, 30, 30);
    rect(20, 155, 30, 30);
    rect(55, 155, 30, 30);
    rect(90, 155, 30, 30);
    rect(10, 205, 110, 30);
    rect(45, 255, 30, 30);
    rect(10, 290, 30, 30);
    rect(45, 290, 30, 30);
    rect(80, 290, 30, 30);
    pop();
   
   
    /////key
    translate(-windowWidth / 2 + sx, -windowHeight / 2 + sy, -500 + sz);
    rotateX(radians(fslider.value()));
    push();
    translate(0, 0, 1);
    fill(252, 3, 107);
    rect(a, b, 50, 50);
    pop();
    drawrects();
    checking();

    for (var i = 0; i < buildings.length; i++) {
        push();
        colorMode(HSB);
        translate(0, 0, tsliders[i].value());
        fill(huesliders[i].value(), 100, 90, asliders[i].value());
        buildings[i].display();
        pop();
        buildings[i].height = hsliders[i].value();
    }
    /////
    for(var i=0; i<legos.length;i++){
        push();
        legos[i].display();
        pop();
    }
}
///tiles///
function makerects() {
    for (let i = 0; i < gridsize; i++) {
        let posx = x + (i % grid) * (w + offset);
        let posy = y + (floor(i / grid)) * (h + offset);
        let cR = random(127, 255);
        let cG = random(127, 255);
        let cB = random(127, 255);
        tiles.push(new OneRect(posx, posy, cR, cG, cB, i));
    }
}
class OneRect {
    constructor(posx, posy, cR, cG, cB, id) {
        this.posx = posx;
        this.posy = posy;
        this.cR = cR;
        this.cG = cG;
        this.cB = cB;
        this.id = id;
    }

    draw() {
        fill(this.cR, this.cG, this.cB);
        noStroke();
        rect(this.posx, this.posy, w, h);
    }
}
/////////////
function drawrects() {
    for (let i = 0; i < gridsize; i++) {
        tiles[i].draw();
    }
}
//////////////keys

function keyPressed() {
    if (key == 'a') {
        sx += 50;
    }
    if (key == 'd') {
        sx -= 50;
    }
    if (key == 'w') {
        sy += 50;
    }
    if (key == 's') {
        sy -= 50;
    }
    if (key == 'e') {
        sz -= 50;
    }
    if (key == 'q') {
        sz += 50;
    }
    if (keyCode === LEFT_ARROW) {
        a -= 52;
    }
    if (keyCode === RIGHT_ARROW) {
        a += 52;
    }
    if (keyCode === UP_ARROW) {
        b -= 52;
    }
    if (keyCode === DOWN_ARROW) {
        b += 52;
    }
    if (key == ' ') {

        buildings.push(new Building(50, 50, height, a + 25, b + 25));
        var hueslider = createSlider(0, 360, 50);
        var hslider = createSlider(0, 2000, height);
        var aslider = createSlider(0, 1, 1, 0.01);
        var tslider = createSlider(-300, 1000, 0, 5);
        huesliders.push(hueslider);
        hsliders.push(hslider);
        asliders.push(aslider);
        tsliders.push(tslider);
        sound.play();

    }
}

class Building {

    constructor(width1, width2, height, xposition, yposition) {
        this.width1 = width1;
        this.width2 = width2;
        this.height = height;
        this.xposition = xposition;
        this.yposition = yposition;
    }
    display() {
        push();
        translate(this.xposition, this.yposition);
        box(this.width1, this.width2, this.height);
        pop();
    }
}
class Human{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    display(){
        push();
        
        translate(this.x,this.y);
        rotateX(radians(90));
        colorMode(HSB);
        randomSeed(2);
        scale(1.2);
        fill(random(360),255,255);
        model(lego);
        pop();
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function checking() {
    for (var i = 0; i < buildings.length; i++) {
        if ((a + 25 == buildings[i].xposition) && (b + 25 == buildings[i].yposition)) {
            huesliders[i].show();
            hsliders[i].show();
            asliders[i].show();
            tsliders[i].show();
            huesliders[i].position(10, windowHeight / 2);
            hsliders[i].position(10, windowHeight / 2 + 10);
            asliders[i].position(10, windowHeight / 2 + 20);
            tsliders[i].position(10, windowHeight / 2 + 30);
            tt.show();
            len.show();
            trans.show();
            up_down.show();
           

        } else {
            huesliders[i].hide();
            hsliders[i].hide();
            asliders[i].hide();
            tsliders[i].hide();
            tt.hide();
            len.hide();
            trans.hide();
            up_down.hide();
        }
    }
}
function tog() {
    if (bgm.isPlaying()) {
        bgm.pause();
    } else {
        bgm.play();
    }
}

function erease() {
    for (var i = 0; i < buildings.length; i++) {
        huesliders[i].hide();
        asliders[i].hide();
        hsliders[i].hide();
        tsliders[i].hide();
    }
    buildings.splice(0, buildings.length);
    huesliders.splice(0, huesliders.length);
    asliders.splice(0, asliders.length);
    hsliders.splice(0, hsliders.length);
    tsliders.splice(0, tsliders.length);
    legos.splice(0,legos.length);
}

function human(){
   legos.push(new Human(a-7,b+32));

}