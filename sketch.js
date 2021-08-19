var canvas,bg;
var cat,catImg1,catImg2,catImg3;
var mouse,mouseImg1,mouseImg2,mouseImg3;
function preload() {
    //load the images here
    bg=loadImage("images/garden.png");
    catImg1= loadAnimation("images/cat1.png");
    catImg2=loadAnimation("images/cat2.png","images/cat3.png");
    catImg3=loadAnimation("images/cat4.png");
    mouseImg1=loadAnimation("images/mouse1.png");
    mouseImg2=loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImg3=loadAnimation("images/mouse4.png");
    
} 

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(870,600);
    cat.addAnimation("tom sleeping",catImg1);
    cat.scale=0.4 ;
    mouse=createSprite(200,600);
    mouse.addAnimation("mouse standing",mouseImg1);
    mouse.scale=0.15;

}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
if(cat.x-mouse.x<(cat.width-mouse.width)/2){
    cat.velocityX=0;
    cat.addAnimation("last image",catImg3);
    cat.x=300;
    cat.scale=0.2
    cat.changeAnimation("last image");
    mouse.addAnimation("mouse last image",mouseImg3);
    mouse.scale=0.15
    mouse.changeAnimation("mouse last image");
}
    
    drawSprites();
}


function keyPressed(){
if(keyCode===LEFT_ARROW){
    cat.velocityX=-5;
    cat.addAnimation("cat running",catImg2);
    cat.changeAnimation("cat running");
    mouse.addAnimation("mouse teasing",mouseImg2);
    mouse.frame_delay=25;
    mouse.changeAnimation("mouse teasing");
}
  //For moving and changing animation write code here
  


}
