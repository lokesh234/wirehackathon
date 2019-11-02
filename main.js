var bird;
var audio;
var birdWidth = 30;
var birdHeight = 30;
var cvs = document.getElementById('canvas');
var ctx = cvs.getContext('2d');


// bird object
function start() {
    bird = new Image(birdWidth, birdHeight);
    bird.src = ''; // Image Here
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