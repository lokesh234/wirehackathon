var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

// load images

var bird = new Image();
var bg = new Image();
var fg = new Image();
var pipeNorth = new Image();
var pipeSouth = new Image();

bird.src = "Gompei_resize.png";
bg.src = "Background.png";
fg.src = "foreground1.png";
pipeNorth.src = "Bookicon.png";
pipeSouth.src = "images/pipeSouth.png";


// some variables
var drawMore = false;

var gap = 85;
var constant;

var bX = 109;
var bY = 512 - 130; // half between 0 and

var gravity = 1.5;

var score = 0;

// audio files

var fly = new Audio();
var scor = new Audio();

fly.src = "sounds/fly.mp3";
scor.src = "sounds/score.mp3";

document.addEventListener("keyup", moveRight);
function moveRight(key){
    if(key.keyCode == 39){
    if (bX < 218)
        bX += 25;
    fly.play();
    }
}

document.addEventListener("keyup", moveLeft);
function moveLeft(key){
    if(key.keyCode == 37){
    if (bX > 0)
        bX -= 25;
    fly.play();
    }
}

// pipe coordinates

var pipe = [];

pipe[0] = {
    x : Math.floor(Math.random()*260),
    y : 0
};

pipe[1] = {
    x : Math.floor(Math.random()*260), 
    y : 0
};
// draw images

function draw(){
    
    ctx.drawImage(bg,0,0);
    
    
    for(var i = 0; i < pipe.length; i++){
        
//        constant = pipeNorth.height+gap;
        ctx.drawImage(pipeNorth,pipe[i].x,pipe[i].y);
//        ctx.drawImage(pipeSouth,pipe[i].x,pipe[i].y+constant);
             
        pipe[i].y += 5;
        
        if( pipe[i].x == 125 ){
            pipe.push({
                x : cvs.width,
                y : Math.floor(Math.random()*pipeNorth.height)-pipeNorth.height
            }); 
        }

        // detect collision
        
        if(bY + bird.height >= pipe[i].y && bY <= pipe[i].y + pipeNorth.height && Math.abs(5 - (bX-pipe[i].x)) < 50){
            location.reload(); // reload the page
            drawMore = false;
        }
        
        if(pipe[i].y >= 437){
            score++;
            scor.play();
            drawMore = true;
            pipe[i].y = 0;
            pipe[i].x = Math.floor(Math.random()*260);
        }
        
        
    }

    ctx.drawImage(fg,0,cvs.height - fg.height);
    
    ctx.drawImage(bird,bX,bY);

    
    ctx.fillStyle = "#000";
    ctx.font = "20px Verdana";
    ctx.fillText("Score : "+score,10,cvs.height-20);
    
    requestAnimationFrame(draw);
    
}

draw();

/*
while(drawMore) {
    draw();
}
*/























