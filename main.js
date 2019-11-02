var bird;
var audio;
var birdWidth = 30;
var birdHeight = 30;
var xPos = 100;
var yPos = 150;

var cvs = document.getElementById('canvas');
var ctx = cvs.getContext('2d');

var bird = new Image();
bird.src = "/hackathon_bird.png"

ctx.drawImage(bird, xPos, yPos, birdWidth, birdHeight);

function draw() {
    ctx.drawImage(bird, 150, 150);
}


/*
// bird object
function start() {
    bird = new Image(birdWidth, birdHeight);
    bird.src = 'hackathon_bird.png'; // Image Here
    audio = new Audio();
    audio.src = ''; //Audio Here 
    
    
}

// function for moving left and right with bounds
function birdMove() {
    // event listener
}

// game background
var gameCanvas = {
    canvas : function() {
        // Set canvas values
    }

    // generate pipes

        // update position based on time


        // detect a collision with pipe and bird
}
*/