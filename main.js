gummy_bear = "";
rick = "";


function preload(){
gummy_bear = loadSound("Gummy.mp3");
rick = loadSound("Rick.mp3");
}

function setup() {
canvas = createCanvas(600, 500);
canvas.center();

video = createCapture(VIDEO);
video.hide();
}

function draw(){
    image(video, 0, 0, 600, 500);
}
