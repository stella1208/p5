let uy, uz, fy, fz;
let wr, asd;
var a = 6;
var b1;
var img1, img2, img3;
let filla;
let button1;
let button1b;
let button2;
let button2b;
let button3;
let button3b;
let button4;
let button4b;
let button5;
let button5b;
let button6;
let button6b;
let button7;
let button7b;
let song;
let sampleIsLooping = false;
let t;
let imm;
let pp1;
let pp2;
function preload(){
    song=loadSound('song.mp3');
    imm=loadImage('t.jpg');
}
function setup() {
   
    createCanvas(windowWidth, windowHeight, WEBGL);
    noStroke();
    wr = createSlider(0, 180, 0);
    asd = createSlider(30, 60, 30);
    wr.position(10, 10);
    asd.position(10, 25);
    bgmbutton = createButton('Music');
    bgmbutton.position(10, 50);
    bgmbutton.mousePressed(tog);
    pp1=createP('20170297<br>Jin Yewon<br>Project #5<br>Thaat');
    //speed framerate 
   
    pp2=createP('double-click button to stop');
    pp2.position(10,70);
    pp2.style('font-size','8pt');
    pp2.style('color','#FFFFFF');
    img1 = loadImage('brown.jpg');
    img2 = loadImage('green.jpg');
    img3 = loadImage('red.jpg');
    f = loadFont('BebasNeue Regular.otf');
    filla = color(255, 204, 0);
    button1 = createButton('step');
    button1.position(50, 100);
    button1.mousePressed(() => {
        button1b = true;
    });
    button1.doubleClicked(() => {
        button1b = false;
    });
    button2 = createButton('neck');
    button2.position(50, 130);
    button2.mousePressed(() => {
        button2b = true;
    });
    button2.doubleClicked(() => {
        button2b = false;
    });
    button3 = createButton('nod');
    button3.position(50, 160);
    button3.mousePressed(() => {
        button3b = true;
    });
    button3.doubleClicked(() => {
        button3b = false;
    });
    button4 = createButton('kathak1');
    button4.position(50, 190);
    button4.mousePressed(() => {
        button4b = true;
        button5b = false;
        button6b = false;

    });
    button4.doubleClicked(() => {
        button4b = false;

    });
    button5 = createButton('kathak2');
    button5.position(50, 220);
    button5.mousePressed(() => {
        button5b = true;
        button4b = false;
        button6b = false;
        button7b = false;
        //b1.normal();
    });
    button5.doubleClicked(() => {
        button5b = false;
        b1.normal();
    });
    button6 = createButton('paran');
    button6.position(50, 250);
    button6.mousePressed(() => {
        button6b = true;
        button4b = false;
        button5b = false;
        button7b = false;
        b1.normal();
    });
    button6.doubleClicked(() => {
        button6b = false;
        b1.normal();
    });
    button7 = createButton('spin');
    button7.position(50, 280);
    button7.mousePressed(() => {
        button7b = true;

        b1.normal();
    });
    button7.doubleClicked(() => {
        button7b = false;

    });
}

var body_x = 0;
var bodyrot = 0;
let ua_y = 0;
let ua_z = 0;
let da_y = 0;
let da_z = 0;
let h_y = 0;
let h_z = 0;
let f11_y = 0;
let f11_z = 0;
let f12_y = 0;
let f12_z = 0;
let f21_y = 0;
let f22_y = 0;
let f23_y = 0;
let f31_y = 0;
let f32_y = 0;
let f33_y = 0;
let f41_y = 0;
let f42_y = 0;
let f43_y = 0;
let f51_y = 0;
let f52_y = 0;
let f53_y = 0;
let head_x = 0;
let head_z = 0;
let body_y = 0;
let body_z = 0;
let lua_y = 0;
let lua_z = 0;
let lda_y = 0;
let lda_z = 0;
let lh_y = 0;
let lh_z = 0;
let lf11_y = 0;
let lf11_z = 0;
let lf12_y = 0;
let lf12_z = 0;
let lf21_y = 0;
let lf22_y = 0;
let lf23_y = 0;
let lf31_y = 0;
let lf32_y = 0;
let lf33_y = 0;
let lf41_y = 0;
let lf42_y = 0;
let lf43_y = 0;
let lf51_y = 0;
let lf52_y = 0;
let lf53_y = 0;
///leg
let lul_y = 0;
let lul_z = 0;
let lul_x = 0;
let ldl_y = 0;
let ldl_z = 0;
let ul_y = 0;
let ul_z = 0;
let dl_y = 0;
let dl_z = 0;
let ey1_z = 30;
let ey2_z = 30;
let c = 0;
var s1 = 8;
var ls1 = 8;
var s1_1 = -12;
var ls1_1 = -12;
var stepb = true;
var lstepb;
var headp = 0;
var nods = 6;
var uax = 0;
var luax = 0;
var hs = 4;
var tas = 8;
var ltas = 8;
var ta = true;
var lta;
var tatts = 2;
var dir = 1;
var tattt = true;
var p1 = true;
var p2;
var p3;
var ps = 8;
var lps = 8;
var pc = 0;
let target = 0;
let x = 0;
var spinc = 0;
var f;
var b2;
var b3;



function draw() {

    frameRate(asd.value());
    background(255);
    pp1.style('font-size','8pt');
    pp1.style('color','#FFFFFF');
   pp1.position(windowWidth-70,10);
    b2=new BD(img1);
    b3=new BD(img2);
    b1 = new BD(img3);
    lights(20);
    ambientLight(10);
    pointLight(255,255,255,200,mouseX/2,mouseY/2);
    push();
    scale(1.5);
    translate(0,0,-200);
    image(imm,-windowWidth/2,-windowHeight/2,windowWidth,windowHeight);
    pop();
    rotateY(radians(wr.value()));
 
    rotateX(radians(80));
   
    scale(0.3);
    push();
    translate(0, 300, -1100);
    fill(36, 185, 240);
    plane(8000,2000);
    pop();
    /////////body start
   
    fill(255, 208, 0);

    push();
        b1.display();
  pop();
    push();
    translate(-800,0,-300);
  
    scale(0.7);
    b2.display();
    pop();
    push();
    translate(800,0,-300);
  
    scale(0.7);
    b3.display();
    pop();
   
    
    if (button1b == true) {
        b1.step();
    };
    if (button2b == true) {
        b1.neck();
    };
    if (button3b == true) {
        b1.nod();
    };
    if (button4b == true) {
        b1.tat();
        let ssss = 0.1;
        let tatvec = createVector(uax, da_y, da_z);
        let tatvec2 = createVector(luax, lda_y, lda_z);
        let tatvec3 = createVector(ua_z);
        let tatvec4 = createVector(130, -150, 90);
        let tatvec5 = createVector(90, 150, -180);
        let tatvec6 = createVector(90);
        let tatvec7 = p5.Vector.lerp(tatvec, tatvec4, ssss);
        let tatvec8 = p5.Vector.lerp(tatvec2, tatvec5, ssss);
        let tatvec9 = p5.Vector.lerp(tatvec3, tatvec6, ssss);
        uax = tatvec7.x;
        da_y = tatvec7.y;
        da_z = tatvec7.z;
        luax = tatvec8.x;
        lda_y = tatvec8.y;
        lda_z = tatvec8.z;
        ua_z = tatvec9.x;
        f11_y = 0;
        f11_z = 0;
        f12_y = 0;
        f12_z = 0;
        f21_y = 0;
        f22_y = 0;
        f23_y = 0;
        f31_y = 0;
        f32_y = 0;
        f33_y = 0;
        f41_y = 0;
        f42_y = 0;
        f43_y = 0;
        f51_y = 0;
        f52_y = 0;
        f53_y = 0;
        lf11_y = 0;
        lf11_z = 0;
        lf12_y = 0;
        lf12_z = 0;
        lf21_y = 0;
        lf22_y = 0;
        lf23_y = 0;
        lf31_y = 0;
        lf32_y = 0;
        lf33_y = 0;
        lf41_y = 0;
        lf42_y = 0;
        lf43_y = 0;
        lf51_y = 0;
        lf52_y = 0;
        lf53_y = 0;
    };
    if (button5b == true) {
        b1.tatt();
        let tts = 0.1;

        let ttvec1 = createVector(uax, da_y, luax);
        let ttvec2 = createVector(lda_y, h_z, lh_z);
        let ttvec3 = createVector(90, -160, 90);
        let ttvec4 = createVector(160, 90, -90);
        let ttvec5 = p5.Vector.lerp(ttvec1, ttvec3, tts);
        let ttvec6 = p5.Vector.lerp(ttvec2, ttvec4, tts);
        let ttvec7 = createVector(da_z, ua_z, lda_z);
        let ttvec9 = createVector(0, 0, 0);
        let ttvec10 = p5.Vector.lerp(ttvec7, ttvec9, tts);
        uax = ttvec5.x;
        da_y = ttvec5.y;
        luax = ttvec5.z;
        lda_y = ttvec6.x;
        h_z = ttvec6.y;
        lh_z = ttvec6.z;
        da_z = ttvec10.x;
        ua_z = ttvec10.y;
        lda_z = ttvec10.z;


    };
    if (button6b == true) {
        b1.paran();
        
    };
    if (button7b == true) {
        b1.spin();

    };




}


function Arm(xrot, yrot, zrot, w, d, h) {
    strokeWeight(1);
    rotateY(radians(xrot));
    //stroke(255, 0, 0);
    //line(0, 0, 0, 300, 0, 0); // visualize x-rotation axis
    rotateX(radians(yrot));
    //stroke(0, 255, 0);
    //line(0, 0, 0, 0, 300, 0); // visualize y-rotation axis
    rotateZ(radians(zrot));
    //stroke(0, 0, 255);
    //line(0, 0, 0, 0, 0, 300); // visualize z-rotation axis
    noStroke();
    translate(0, 0, h / 2);
    box(w, d, h);
}




class BD {
    constructor(i) {
        this.i = i;
    }
    display() {
        rotateZ(radians(bodyrot));
        push();

        translate(0, 0, -100);
        texture(this.i);
        Arm(body_x, body_y, body_z, 300, 150, 400);
        push();//head;
        fill(255, 208, 0);
        translate(headp, 0, 270);
        Arm(0, head_x, head_z, 160, 100, 160);
        push();//eb
        fill(0);
        translate(20, 55, ey2_z);
        rotateX(radians(90));
        rect(0, 0, 50, 10);
        pop();
        push();
        fill(0);
        rotateX(radians(90));
        translate(25, 25, -52);
        ellipse(20, -20, 20);
        pop();
        push();//eb
        fill(0);
        translate(-70, 55, ey1_z);
        rotateX(radians(90));
        rect(0, 0, 50, 10);
        pop();
        push();
        fill(0);
        rotateX(radians(90));
        translate(25, 25, -52);
        ellipse(-70, -20, 20);
        pop();
        pop();
        /////////////////팔
        push();/////왼팔
        translate(-200, 0, 200);
        rotateZ(radians(180));
        Arm(luax, lua_y, lua_z, 50, 50, 200);
        push();
        translate(0, 0, 100);
        fill(255, 208, 0);
        Arm(0, lda_y, lda_z, 50, 50, 200);//down arm
        push();
        translate(0, 0, 80);
        Arm(0, lh_y, lh_z, 70, 20, 70);
        push();
        translate(30, 0, 35);
        Arm(0, lf51_y, 0, 10, 10, 30);//pinky
        push();
        translate(0, 0, 15);
        Arm(0, lf52_y, 0, 10, 10, 30);
        push();
        translate(0, 0, 15);
        Arm(0, lf53_y, 0, 10, 10, 30);
        pop();
        pop();
        pop();
        push();
        translate(15, 0, 35);
        Arm(0, lf41_y, 0, 10, 10, 30);//4th
        push();
        translate(0, 0, 15);
        Arm(0, lf42_y, 0, 10, 10, 30);
        push();
        translate(0, 0, 15);
        Arm(0, lf43_y, 0, 10, 10, 30);
        pop();
        pop();
        pop();
        push();
        translate(0, 0, 35);
        Arm(0, lf31_y, 0, 10, 10, 30);//3th
        push();
        translate(0, 0, 15);
        Arm(0, lf32_y, 0, 10, 10, 30);
        push();
        translate(0, 0, 15);
        Arm(0, lf33_y, 0, 10, 10, 30);
        pop();
        pop();
        pop();
        push();
        translate(-15, 0, 35);
        Arm(0, lf21_y, 0, 10, 10, 30);//2th
        push();
        translate(0, 0, 15);
        Arm(0, lf22_y, 0, 10, 10, 30);
        push();
        translate(0, 0, 15);
        Arm(0, lf23_y, 0, 10, 10, 30);
        pop();
        pop();
        pop();
        push();
        translate(-30, 0, 35);
        Arm(0, lf11_y, lf11_z, 10, 10, 30);//2th
        push();
        translate(0, 0, 15);
        Arm(0, lf12_y, lf12_z, 10, 10, 30);
        pop();
        pop();
        pop();
        pop();
        pop();////팔 끝
        ///////상체
        push();/////오른팔
        translate(200, 0, 200);
        Arm(uax, ua_y, ua_z, 50, 50, 200);
        push();
        translate(0, 0, 100);
        fill(255, 208, 0);
        Arm(0, da_y, da_z, 50, 50, 200);//down arm
        push();
        translate(0, 0, 80);
        Arm(0, h_y, h_z, 70, 20, 70);
        push();
        translate(30, 0, 35);
        Arm(0, f51_y, 0, 10, 10, 30);//pinky
        push();
        translate(0, 0, 15);
        Arm(0, f52_y, 0, 10, 10, 30);
        push();
        translate(0, 0, 15);
        Arm(0, f53_y, 0, 10, 10, 30);
        pop();
        pop();
        pop();
        push();
        translate(15, 0, 35);
        Arm(0, f41_y, 0, 10, 10, 30);//4th
        push();
        translate(0, 0, 15);
        Arm(0, f42_y, 0, 10, 10, 30);
        push();
        translate(0, 0, 15);
        Arm(0, f43_y, 0, 10, 10, 30);
        pop();
        pop();
        pop();
        push();
        translate(0, 0, 35);
        Arm(0, f31_y, 0, 10, 10, 30);//3th
        push();
        translate(0, 0, 15);
        Arm(0, f32_y, 0, 10, 10, 30);
        push();
        translate(0, 0, 15);
        Arm(0, f33_y, 0, 10, 10, 30);
        pop();
        pop();
        pop();
        push();
        translate(-15, 0, 35);
        Arm(0, f21_y, 0, 10, 10, 30);//2th
        push();
        translate(0, 0, 15);
        Arm(0, f22_y, 0, 10, 10, 30);
        push();
        translate(0, 0, 15);
        Arm(0, f23_y, 0, 10, 10, 30);
        pop();
        pop();
        pop();
        push();
        translate(-30, 0, 35);
        Arm(0, f11_y, f11_z, 10, 10, 30);//2th
        push();
        translate(0, 0, 15);
        Arm(0, f12_y, f12_z, 10, 10, 30);
        pop();
        pop();
        pop();
        pop();
        pop();////팔 끝
        pop();
        /////////////////////////
        push();///다리
        translate(-100, 0, -200);
        rotateX(radians(180));

        texture(this.i);
        Arm(lul_x, lul_y, lul_z, 80, 80, 400);

        push();
        translate(0, 0, 200);
        fill(255, 208, 0);

        Arm(0, ldl_y, ldl_z, 80, 80, 400);
        push();
        translate(0, -100, 200);
        box(80, 280, 40);
        pop();
        pop();
        pop();//leg end
        push();///다리
        translate(100, 0, -200);
        rotateX(radians(180));
        texture(this.i);
        Arm(0, ul_y, ul_z, 80, 80, 400);
        push();
        translate(0, 0, 200);
        fill(255, 208, 0);
        Arm(0, dl_y, dl_z, 80, 80, 400);
        push();
        translate(0, -100, 200);
        box(80, 280, 40);
        pop();
        pop();
        pop();//leg end
        //바디 끝
    }
    step() {
        if (stepb == true) {
            ul_y += s1;
            dl_y += s1_1;
            if (ul_y > 40 || ul_y < 5) {
                s1 *= -1;
                s1_1 *= -1;
                if (ul_y < 5) {
                    s1 = 0;
                    s1_1 = 0;
                    stepb = false;
                    if (stepb == false) {
                        ls1 = 8; ls1_1 = -12; lstepb = true;
                    }
                }
            }
        }
        if (stepb == false) {
            lul_y += ls1;
            ldl_y += ls1_1;
            if (lul_y > 40 || lul_y < 5) {
                ls1 *= -1;
                ls1_1 *= -1;
                if (lul_y < 5) {
                    ls1 = 0;
                    ls1_1 = 0;
                    lstepb = false;
                    if (lstepb == false) {
                        s1 = 8; s1_1 = -12; stepb = true;
                    }
                }
            }
        }

    }
    neck() {
        headp += a;
        if (headp < -20 || headp > 20) {
            a *= -1;
        }
    }
    nod() {
        head_x += nods;
        if (head_x < -10 || head_x > 10) {
            nods *= -1;
        }
    }
    tat() {

        if (ta == true) {
            uax = 130;

            da_y = -150;
            da_z = 90;

            luax = 90;
            lda_y = 150;
            lda_z = -180;
            ua_z = 90;
            ua_y += tas;
            if (ua_y > 40 || ua_y < 0) {
                tas *= -1;
                if (ua_y < 0) {
                    tas = 0;
                    ta = false;
                    if (ta == false) {
                        ltas = 8; lta = true;
                    }
                }
            }
        }
        if (ta == false) {
            uax = 130;

            da_y = -150;
            da_z = 90;

            luax = 90;
            lda_y = 150;
            lda_z = -180;
            ua_z = 90;
            lua_y += ltas;
            if (lua_y > 40 || lua_y < 0) {
                ltas *= -1;
                if (lua_y < 0) {
                    ltas = 0;
                    lta = false;
                    if (lta == false) {
                        tas = 8; ta = true;
                    }
                }
            }
        }

    }
    tatt() {
        uax = 90;
        da_y = -160;
        luax = 90;
        lda_y = 160;
        h_z = 90;
        lh_z = -90;
        if (tattt == true) {
            ey1_z += tatts / 2;
            ey2_z = tatts / 2 - ey1_z + 60;
            body_z += tatts;
            f11_y = -30;
            f12_y = 70;
            f21_y = -30;
            f22_y = 30;
            f23_y = 50;
            f31_y = -30;
            f32_y = 30;
            f33_y = 50;
            f41_y = -30;
            f42_y = 30;
            f43_y = 50;
            lf11_y = 0;
            lf12_y = 0;
            lf21_y = 0;
            lf22_y = 0;
            lf23_y = 0;
            lf31_y = 0;
            lf32_y = 0;
            lf33_y = 0;
            lf41_y = 0;
            lf42_y = 0;
            lf43_y = 0;
            if (body_z < -15 || body_z > 15) {
                tatts *= -1;
                if (body_z < 0) {
                    tattt = false;
                }
            }
        }
        if (tattt == false) {
            ey1_z += tatts / 2;
            ey2_z = tatts / 2 - ey1_z + 60;
            body_z += tatts;
            lf11_y = 30;
            lf12_y = -70;
            lf21_y = 30;
            lf22_y = -30;
            lf23_y = -50;
            lf31_y = 30;
            lf32_y = -30;
            lf33_y = -50;
            lf41_y = 30;
            lf42_y = -30;
            lf43_y = -50;
            f11_y = 0;
            f12_y = 0;
            f21_y = 0;
            f22_y = 0;
            f23_y = 0;
            f31_y = 0;
            f32_y = 0;
            f33_y = 0;
            f41_y = 0;
            f42_y = 0;
            f43_y = 0;
            if (body_z < -15 || body_z > 15) {
                tatts *= -1;
                if (body_z > 0) {
                    tattt = true;
                }
            }
        }
    }
    paran() {
        var tt;
        let v0 = createVector(0, 0);
        let v1 = createVector(lda_y, da_y);
        let step = 0.1;
        let v4 = createVector(luax, uax);

        pc += 1;
        if (luax < 90) {
            luax += 8;
            uax += 8;
        }
        if (luax > 45) {
            tt = true;
        }
        if (pc > 10) {
            lda_y += lps;
            if (lda_y < 0 || lda_y > 160) {
                lps *= -1;
            }
        }
        if (pc > 30) {
            da_y -= ps;
            if (da_y < -160 || da_y > 0) {
                ps *= -1;
            }
        }
        if (pc > 90) {

            let v3 = p5.Vector.lerp(v1, v0, step);
            lda_y = v3.x;
            da_y = v3.y;
            let v5 = p5.Vector.lerp(v4, v0, step);
            luax = v5.x;
            uax = v5.y;

            h_z += 16;
            lh_z -= 16;
        }
        if (pc > 180) {
            pc = 0;
        }

    }
    spin() {
        bodyrot += 16;
    }
    normal() {
        ua_y = 0;
        ua_z = 0;
        da_y = 0;
        da_z = 0;
        h_y = 0;
        h_z = 0;
        f11_y = 0;
        f11_z = 0;
        f12_y = 0;
        f12_z = 0;
        f21_y = 0;
        f22_y = 0;
        f23_y = 0;
        f31_y = 0;
        f32_y = 0;
        f33_y = 0;
        f41_y = 0;
        f42_y = 0;
        f43_y = 0;
        f51_y = 0;
        f52_y = 0;
        f53_y = 0;
        head_x = 0;
        head_z = 0;
        body_y = 0;
        body_z = 0;
        lua_y = 0;
        lua_z = 0;
        lda_y = 0;
        lda_z = 0;
        lh_y = 0;
        lh_z = 0;
        lf11_y = 0;
        lf11_z = 0;
        lf12_y = 0;
        lf12_z = 0;
        lf21_y = 0;
        lf22_y = 0;
        lf23_y = 0;
        lf31_y = 0;
        lf32_y = 0;
        lf33_y = 0;
        lf41_y = 0;
        lf42_y = 0;
        lf43_y = 0;
        lf51_y = 0;
        lf52_y = 0;
        lf53_y = 0;
        ey1_z = 30;
        ey2_z = 30;
        ///leg
    }
}
function tog() {
    t=true;
    if (!sampleIsLooping) {
        //loop our sound element until we
        //call ele.stop() on it.
        song.loop();
  
        sampleIsLooping = true;
      } else {
        song.pause();
        sampleIsLooping = false;
      }
    
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}