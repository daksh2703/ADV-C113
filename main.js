function preload() {

}

function setup() {
    canvas = createCanvas(500, 400);
    canvas.position(560, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 500, 400);
    let c = color('gold');
    fill(c);
    noStroke();
    circle(25,25,50);
    circle(75,25,50);
    circle(125,25,50);
    circle(175,25,50);
    circle(225,25,50);
    circle(275,25,50);
    circle(325,25,50);
    circle(375,25,50);
    circle(425,25,50);
    circle(475,25,50);
    circle(475,75,50);
    circle(475,125,50);
    circle(475,175,50);
    circle(475,225,50);
    circle(475,275,50);
    circle(475,325,50);
    circle(475,375,50);
    circle(425,375,50);
    circle(375,375,50);
    circle(325,375,50);
    circle(275,375,50);
    circle(225,375,50);
    circle(175,375,50);
    circle(125,375,50);
    circle(75,375,50);
    circle(25,375,50);
    circle(25,325,50);
    circle(25,275,50);
    circle(25,225,50);
    circle(25,175,50);
    circle(25,125,50);
    circle(25,75,50);
    circle(25,25,50);
}

function take_snapshot() {
    save("student.png");
}
