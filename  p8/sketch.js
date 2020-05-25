var stage = 0;
var counter;
var score = 0;
var timer = 25;
var beep;
var titleg;
var maing;
var dieg;
var wing;
var img;
var font;
var fontr;
var fontl;
var ship;
var enemyship;
var aim;
var dg = 0.0;
var dg1 = 1;
var dg2 = 0.0;
var par1;
var par2;
var par3;
var img3;
var count = 0;
////
var pbox;//collision box for the player

var bullets;//array for all the bullets on the screen
var enemies;//array for all the enemies on screen

var enemy_timer;//timer variable to keep track of which direction to move them in
var move_period;//how many frames it takes for one round of moving back and forth for enemies

//.clear>>>>hide canvas,make it transparent
function preload() {
    img = loadImage('space.jpg');
    img2 = loadImage('jj.jpg');
    img3 = loadImage('die.jpg');

    enemyship = loadModel('nave.obj');

    font = loadFont('Teko-Bold.ttf');
    fontr = loadFont('Teko-Regular.ttf');
    fontl = loadFont('Teko-Light.ttf');

    beep = loadSound('beep.wav');
}

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    titleg = createGraphics(windowWidth, windowHeight, WEBGL);
    maing = createGraphics(windowWidth, windowHeight, WEBGL);
    dieg = createGraphics(windowWidth, windowHeight, WEBGL);
    wing = createGraphics(windowWidth, windowHeight, WEBGL);
    titleg.background(0);

    rectMode(CENTER);


    par1 = new Par();
    par2 = new Par();
    par3 = new Par();
    ///
    pbox = [0, 0, 50, 50];
    bullets = [];
    init_enemies();
    move_period = 2048;
    enemy_timer = -move_period;

}

function draw() {
    background(0);
    
    if (stage == 0) {
        title();
    }
    if (stage == 1) {
        stage1();
        count += 1;
        if (count % 60 == 0) {
            timer -= 1;
        }
        if (score >= 7 * 5 * 10) {
            stage = 2;
        }
        if (timer == 0) {
            stage = 3;
        }
    }

    if (stage == 2) {
        win();
        score = 0;
        count = 0;
        timer = 25;
        if (keyPressed) {
            if (key == 'r') {
                title();
                stage = 0;
                init_enemies();
            }
        }

    }
    if (stage == 3) {
        die();
        score = 0;
        count = 0;
        timer = 25;
        if (keyPressed) {
            if (key == 'r') {
                title();
                stage = 0;
                init_enemies();
            }
        }

    }
}

function title() {
    titleg.image(img, -windowWidth / 2, -windowHeight / 2, windowWidth, windowHeight);
    titleg.textFont(font);
    titleg.textSize(60);
    titleg.textAlign(CENTER, CENTER);
    titleg.text('RECKLESS: THE 2ND WORLD', 0, 0);
    titleg.textFont(fontr);
    titleg.textSize(20);
    titleg.text('press C to continue', 0, 50);
    image(titleg, -windowWidth / 2, -windowHeight / 2, windowWidth, windowHeight);


}
function stage1() {
    maing.background(34, 35, 48);
    maing.lights();
    //maing.image(img,-windowWidth/2,-windowHeight/2,windowWidth,windowHeight);
    push();
    translate(-windowWidth / 2 + mouseX, -windowHeight / 2 + mouseY);
    pop();

    maing.rectMode(CENTER);

    maing.noFill();
    maing.stroke(8, 255, 189);
    maing.rect(0, 0, windowWidth - 30, windowHeight - 30);

    maing.textFont(fontr);
    maing.fill(255);
    maing.textSize(30);
    maing.text('SCORE:' + score, -windowWidth / 2 + 50, -windowHeight / 2 + 60);
    maing.textFont(fontr);
    maing.fill(255);
    maing.textSize(20);
    maing.text('TIMER: ' + timer, -windowWidth / 2 + 50, -windowHeight / 2 + 100)
    push();

    translate(windowWidth / 2 - 50, windowHeight / 2 - 50);
    scale(0.4);
    stroke(255, 213, 0);
    par1.dis();
    pop();
    push();

    translate(windowWidth / 2 - 100, windowHeight / 2 - 50);
    scale(0.4);
    stroke(8, 255, 189);
    par2.dis();
    pop();
    push();

    translate(windowWidth / 2 - 150, windowHeight / 2 - 50);
    scale(0.4);
    stroke(8, 255, 189);
    par3.dis();
    pop();


    bullet_loop();
    enemy_loop();
    player_loop();
    image(maing, -windowWidth / 2, -windowHeight / 2, windowWidth, windowHeight);

}

function die() {
    dieg.background(0);
    dieg.image(img3, -windowWidth / 2, -windowHeight / 2, windowWidth, windowHeight);
    dieg.textFont(font);
    dieg.fill(255, 213, 0);
    dieg.textSize(60);
    dieg.textAlign(CENTER, CENTER);
    dieg.text('YOU DIED', 0, 0);
    dieg.textFont(fontr);
    dieg.textSize(60);
    dieg.textAlign(CENTER, CENTER);
    dieg.text('"LOSER OF THE BATTLE"', 0, 50);
    dieg.textFont(fontr);
    dieg.textSize(20);
    dieg.textAlign(CENTER, CENTER);
    dieg.text('PRESS R TO RESTART', 0, 90);
    image(dieg, -windowWidth / 2, -windowHeight / 2, windowWidth, windowHeight);

}

function win() {
    wing.background(0);
    wing.image(img2, -windowWidth / 2, -windowHeight / 2, windowWidth, windowHeight);
    wing.textFont(font);
    wing.textSize(60);
    wing.textAlign(CENTER, CENTER);
    wing.text('YOU WON', 0, 0);
    wing.textFont(fontr);
    wing.textSize(60);
    wing.textAlign(CENTER, CENTER);
    wing.text('"RULER OF THE BATTLEFIELD"', 0, 50);
    wing.textFont(fontl);
    wing.textSize(15);
    wing.textAlign(CENTER, CENTER);
    wing.text('PRESS R TO RESTART', 0, 90);
    image(wing, -windowWidth / 2, -windowHeight / 2, windowWidth, windowHeight);

}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function keyPressed() {
    if (key == 'c') {
        stage += 1;
    }

}



class Par {
    constructor() {

    }
    dis() {

        scale(0.5);
        rotate(dg2);
        arc(0, 0, 140, 140, 0, radians(100));
        arc(0, 0, 122, 122, 0, radians(100));
        dg2 += 0.02;
        rotate(dg1);
        arc(0, 0, 122, 122, 0, radians(95));
        arc(0, 0, 102, 102, 0, radians(95));
        dg1 += 0.03;
        rotate(dg);
        arc(0, 0, 100, 100, 0, radians(90));
        dg += 0.05;
        strokeWeight(3);

        ellipse(0, 0, 80, 80);
        ellipse(0, 0, 70, 70);
        ellipse(0, 0, 50, 50);

    }
}
////controls
function collides(box1, box2) {
    if (box1[0] >= box2[0] && box1[0] <= box2[0] + box2[2]) {
        if (box1[1] >= box2[1] && box1[1] <= box2[1] + box2[3]) {
            score += 10;
            beep.play();
            return true;

        }
        if (box2[1] >= box1[1] && box2[1] <= box1[1] + box1[3]) {
            score += 10;
            beep.play();
            return true;
        }
    }
    if (box2[0] >= box1[0] && box2[0] <= box1[0] + box1[2]) {
        if (box1[1] >= box2[1] && box1[1] <= box2[1] + box2[3]) {
            score += 10;
            beep.play();
            return true;
        }
        if (box2[1] >= box1[1] && box2[1] <= box1[1] + box1[3]) {
            score += 10;
            beep.play();
            return true;
        }
    }
    return false;
}

//controls
function mousePressed() {
    if (mouseButton === LEFT) {
        bullets.push(new bullet([pbox[0], pbox[1], 20, 20], 3 * PI / 2, 10));
    }
}

//struct for bullet data
function bullet(colbox, dir, speed) {
    this.colbox = colbox;
    this.dir = dir;
    this.speed = speed;
    this.tag = "bullet";
}

//struct for enemy data
function enemy(colbox, health) {
    this.colbox = colbox;
    this.health = health;
    this.tag = "enemy";
}

//code that runs each frame for each bullet currently on screen
function bullet_loop() {
    for (let i = 0; i < bullets.length; i++) {
        //go through each bullet and transform it/check for collision
        cbul = bullets[i];
        cbul.colbox[0] += cos(cbul.dir) * cbul.speed;
        cbul.colbox[1] += sin(cbul.dir) * cbul.speed;

        push();
        translate(cbul.colbox[0], cbul.colbox[1], 80);
        box(cbul.colbox[2], cbul.colbox[3], 20);
        pop();

        //delete offscreen bullets and hit bullets 
        for (let k = 0; k < enemies.length; k++) {
            let enemybox = enemies[k].colbox;
            if (collides(cbul.colbox, enemybox)) {
                bullets.splice(i, 1);
                enemies.splice(k, 1);
                i--;
                break;
            }
        }
        if (cbul.colbox[1] < -height / 2) {
            bullets.splice(i, 1);
            i--;
        }
    }
}

//code that runs each frame for each enemy on screen
function enemy_loop() {
    for (let i = 0; i < enemies.length; i++) {
        //enemy translation
        cenem = enemies[i];

        let spd = 1;
        enemy_timer++;
        if (enemy_timer < 0)
            cenem.colbox[0] += spd;
        else if (enemy_timer >= 0 && enemy_timer < move_period)
            cenem.colbox[0] -= spd;
        else if (enemy_timer >= move_period)
            enemy_timer = -move_period;

        cenem.colbox[1] += 0.2;

        push();
        translate(cenem.colbox[0], cenem.colbox[1], 80);
        scale(20, -20);
        rotateY(frameCount / 30);
        noStroke();
        fill(220, 100, 100);
        model(enemyship);
        //box(cenem.colbox[2], cenem.colbox[3], 50);
        pop();
    }
}

//creates the initial wave of enemies
function init_enemies() {
    enemies = [];
    for (let i = 0; i < 7; i++) {
        for (let k = 0; k < 5; k++) {
            enemies[i + k * 7] = new enemy([i * 160 - width / 3, k * 80 - height / 3, 50, 50], 2);
        }
    }
}

//code to run each frame for the player
function player_loop() {
    //player translation
    push();
    fill(0, 0, 255);
    pbox[0] = mouseX - width / 2;
    pbox[1] = 300;//mouseY-height/2;

    noStroke();
    translate(pbox[0], pbox[1], 80);
    scale(0.1, 0.1, 0.1);
    cone(500, -1000);
    pop();
}