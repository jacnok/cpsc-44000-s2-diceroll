             // this will become sketch.js

            // code taken from: https://p5js.org/learn/getting-started-in-webgl-appearance.html 
            // and https://p5js.org/reference/#/p5/noFill

            // code merged with: https://www.youtube.com/watch?v=OIfEHD3KqCg

            let rotateVal = {
                x: 0,
                y: 0
 
                // smaller the val is, the faster the speed is
             };
 
             
             let rotationSpeed =
                 {
                   x: 0.00, 
                   y: 0.00
                 };
             
             let accelSpeed =
                 {
                   x: 0.001, 
                   y: 0.005
                 };
             
 
             function setup() {
             let cnv = createCanvas(windowWidth, windowHeight, WEBGL);
               ortho(-width / 2, width / 2, height / 2, -height / 2, 0, 1500);
             colorMode(HSB, 360, 100, 100, 100);
             cnv.position(0, 0, "fixed");
             cnv.style("z-index", "-1");
             }
 
             function draw() {
             background(10, 10, 10, .01);
 
             stroke(255);
             strokeWeight(5);
             noFill();
             
               //this code borrowed from: https://forum.processing.org/two/discussion/13019/ease-out-rotation-speed.html
             //rotationSpeed.x = sin(frameCount/100.0) * accelSpeed.x;
             //rotationSpeed.y = sin(frameCount/100.0) * accelSpeed.y;
              
             rotationSpeed.x =  accelSpeed.x;
             rotationSpeed.y = accelSpeed.y;

             rotateVal.x += rotationSpeed.x;
             rotateVal.y += rotationSpeed.y;
               
             //push();
             rotateX(rotateVal.x);
             rotateY(rotateVal.y);
 
             box(300);
             //pop();
             if(accelSpeed.x>.001){
                accelSpeed.x-=accelSpeed.x*.01;
                accelSpeed.y-= accelSpeed.y*.01;
               }
             describe("A white cube wireframe spinning on a transparent canvas.");
             }
 
             function windowResized() {
                 resizeCanvas(windowWidth, windowHeight);
               ortho(-width / 2, width / 2, height / 2, -height / 2, 0, 1500);
               }
             
             function mouseClicked() {
                 accelSpeed.x = .1;
                 accelSpeed.y =0.07;
                 
                 setTimeout(function() {
                   accelSpeed.x = 0.001;
                   accelSpeed.y = 0.005;
                 }, 5000);
             }