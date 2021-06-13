var garden
var cat, mouse
function preload() {
    //load the images here
    garden_image = loadImage ("images/garden.png");
    cat_image1 = loadAnimation("images/cat1.png");
    cat_image2 = loadAnimation("images/cat2.png","images/cat3.png")
    cat_image4 = loadAnimation("images/cat4.png");
    mouse_image1 = loadAnimation("images/mouse1.png")
    mouse_image2 = loadAnimation("images/mouse2.png", "images/mouse3.png")
    mouse_image4 = loadAnimation("images/mouse4.png")

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(800, 700)
    cat.addAnimation ("sleeping cat", cat_image1)
    cat.scale = 0.2

    mouse = createSprite(200, 700)
    mouse.addAnimation ("teasing mouse", mouse_image1)
    mouse.scale = 0.2
    
    


}

function draw() {

    background(garden_image);
    //Write condition here to evalute if tom and jerry collide

    if (cat.x-mouse.x < (cat.width-mouse.width)/2){
        cat.velocityX = 0
        cat.addAnimation("lastCatImage", cat_image4)
        cat.x = 300;
        cat.scale = 0.2;
        cat.changeAnimation("lastCatImage")

        mouse.addAnimation("lastMouseImage", mouse_image4)
        mouse.scale = 0.15
        mouse.changeAnimation("lastMouseImage")
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode === LEFT_ARROW){
        cat.velocityX = -5;
        cat.addAnimation("running cat",cat_image2);
        cat.changeAnimation("running cat");

        mouse.addAnimation("running mouse", mouse_image2);
        mouse.changeAnimation("running mouse");
        mouse.frameDelay = 25
    }

}
