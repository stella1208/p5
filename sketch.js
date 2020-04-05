let teapot;
var song;
let pot;
var bass;
var mbass;
var treb;
var mtreb;
var fft;
var volslider;
var zoomslider;
var button;
var count = 0;
var angle;
var pieces;
var r;
var txt;
var txt2;
var a=255;
var bool;
let ctx, ctxOn;




function preload() {
    song = loadSound('onebassbeat.mp3',true);
    teapot = loadModel('teapot.obj', true);

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function setup() {
    ctx = getAudioContext();
    ctxOn = createButton('turn on Audio');
    ctxOn.position(20,50);
    ctxOn.mousePressed(() => {
  	ctx.resume().then(() => {
  	console.log('Audio Context is now ON');
        ctxOn.hide();
        button.show();
  	});
    });
    frameRate(30);
    fft = new p5.FFT(0.9);
    createCanvas(windowWidth, windowHeight, WEBGL);
    //
   
    txt=createP('審美眼');
    
    txt.position(20,windowHeight/2-10);
    txt.style("color","white");
   
    txt2=createP('press any key to change background');
    txt2.style("font-size","10pt");
    txt2.position(20,windowHeight/2-30);

    //
    button = createButton('play/pause');
    button.hide();
    button.mousePressed(tog);
    button.position(20, 50);
    ///
    zoomslider = createSlider(0.2, 3, 1, 0.01);
    zoomslider.position(20, 25);
    ///
    volslider = createSlider(0, 1, 0.5, 0.1);
    volslider.position(20, 10);
    stroke(255);
   
    song.loop();

}

function draw() {
    
    background(a);
    count += 1;
   if(keyIsPressed===true){
       a=255;
       
       txt.style("color","black");
       txt2.style("color","black");
   }else {
       a=0;
       txt.style("color","white");
       txt2.style("color","white");
}
    colorMode(RGB);
    scale(zoomslider.value());
    song.setVolume(volslider.value());

    ///light
    ambientLight(20);
    directionalLight(255, 255, 225, 1, 0, 0);
    directionalLight(255, 255, 255, -1, 0, 0);
    directionalLight(255, 255, 255, 0, 0, -1);
    ///soundinter map
    fft.analyze();
    bass = fft.getEnergy("bass");
    treb = fft.getEnergy("treble");
    mbass = map(bass, 200, 255, -100, 200);
    sbass = map(bass, 200, 255, 0.5, 2);
    mtreb = map(treb, 200, 255, 0, 100);
    //big circles
    var pieces = 40;
    for (i = 0; i < pieces; i += 1) {
        var radius = 30;
        stroke(255, 170, 0);
        rotate(TWO_PI / pieces);
        push();
        translate(0, 0, -1000);
        strokeWeight(1);
        rotate(frameCount * -0.1);
        line(mbass * 0.5, radius / 2, radius, radius);
        line(-mbass * 0.5, -radius / 2, 0, radius);
        pop();
    }
    ///heavens door;
    push();
    gate(1000 + mbass, 5, radians(30), radians(0), radians(90));
    pop();
    push();
    gatere(1100 + mbass, 8, radians(35), radians(120), radians(150));
    pop();
    push();
    gate(1200 + mbass, 6, radians(100), radians(20), radians(50));
    pop();

    ////pot
    for (i = 0; i < 30; i++) {
        rotate(frameCount * 0.01);
        colorMode(HSB);
        fill(0+i, 100, 100);
        push();
        scale(sbass / 2);
        translate(0, -500-10*i, -i * 100);
        rotateX(frameCount * 0.05);
        rotateY(frameCount * 0.05);
        Swing();
        pop();
    }
}
////////end of draw
function Swing() {
    noStroke();
    scale(1.2);
    rotateX(PI / 2);
    model(teapot);
}

function gate(rad, num, ang, start, stop) {
    noFill();
    stroke(255, 0, 0);
    for (var k = 0; k < 40; k++) {

        for (var i = 0; i < num; i++) {
            push();
            rotate(frameCount * -0.01);
            arc(0, 0, rad, rad, start, stop);
            pop();
            rotate(ang);
        }
        translate(0, 0, -10 * k);
    }
}
function gatere(rad, num, ang, start, stop) {
    noFill();

    for (var k = 0; k < 40; k++) {

        for (var i = 0; i < num; i++) {
            push();
            rotate(frameCount * 0.01);
            stroke(255, 0, 0);
            arc(0, 0, rad, rad, start, stop);
            pop();

            rotate(ang);
        }

        translate(0, 0, - 15 * k);
    }
}
//toggle button
function tog() {
    if (song.isPlaying()) {
		song.pause();
	} else {
        song.play();
	}
}