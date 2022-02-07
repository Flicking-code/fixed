var box 
function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,20,20)
  box.shapeColor = "blue"
}

function draw() 
{
  background("yellow");
  if(keyDown("right")){
    background("red")
  }
  if(keyDown("down")){
    background("blue")
  }
  if(keyDown("left")){
    background("orange")
  }
  if(keyDown("up")){
    background("green")
  }
drawSprites()
}




