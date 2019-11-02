var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

// load images

var goat = new Image();
var bg = new Image();
var fg = new Image();
var book = new Image();
var laptop = new Image();
var mug = new Image();
var smoothie = new Image();


goat.src = "Gompei_resize.png";
bg.src = "Background.png";
fg.src = "foreground1.png";
book.src = "Bookicon.png";
laptop.src = "Laptopicon.png"
mug.src = "Mug.png"
smoothie.src = "Smoothieicon.png"


// some variables
var drawMore = false;

var gap = 85;
var constant;

var bX = 109;
var bY = 512 - 130; // half between 0 and

var score = 0;

var stuff = [book, laptop, mug, smoothie]; //array of images
// audio files

var goatNoise = new Audio();
var scor = new Audio();

goatNoise.src = "sounds/Bleat.mp3";
scor.src = "sounds/score.mp3";

document.addEventListener("keyup", moveRight);
function moveRight(key){
    if(key.keyCode == 39){
    if (bX < 218)
        bX += 25;
    goatNoise.play();
    }
}

document.addEventListener("keyup", moveLeft);
function moveLeft(key){
    if(key.keyCode == 37){
    if (bX > 0)
        bX -= 25;
    goatNoise.play();
    }
}

// book coordinates

var bk = [];

bk[0] = {
    x : Math.floor(Math.random()*260),
    y : 0
};

bk[1] = {
    x : Math.floor(Math.random()*260), 
    y : 0
};
// draw images

z = Math.floor(Math.random()*4);
function draw(){
    
    ctx.drawImage(bg,0,0);
    
    for(var i = 0; i < bk.length; i++){
        

        ctx.drawImage(stuff[z],bk[i].x,bk[i].y);
             
        bk[i].y += 5;
        
        if( bk[i].x == 125 ){
            bk.push({
                x : cvs.width,
                y : Math.floor(Math.random()*book.height)-book.height
            }); 
        }

        // detect collision
        
        if(bY + goat.height >= bk[i].y && bY <= bk[i].y + book.height && Math.abs(5 - (bX-bk[i].x)) < 50){
            location.reload(); // reload the page
            drawMore = false;
        }
        
        if(bk[i].y >= 437){
            score++;
            scor.play();
            drawMore = true;
            bk[i].y = 0;
            bk[i].x = Math.floor(Math.random()*260);
        }
        
        
    }

    ctx.drawImage(fg,0,cvs.height - fg.height);
    
    ctx.drawImage(goat,bX,bY);

    
    ctx.fillStyle = "#000";
    ctx.font = "20px Verdana";
    ctx.fillText("Score : "+score,10,cvs.height-20);
    
    requestAnimationFrame(draw);
    
}

draw();























