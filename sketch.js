var fixedrect, movingrect;

function setup(){
  createCanvas(1200,800);
  fixedrect=createSprite(200,200,50,80);
  fixedrect.shapeColor="green";
  movingrect=createSprite(400,200,80,30);
  movingrect.shapeColor="green";
}

function draw(){
  background("white");
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
  console.log(fixedrect.x-movingrect.x);
  if(movingrect.x-fixedrect.x < movingrect.width/2+fixedrect.width/2
    && fixedrect.x-movingrect.x < movingrect.width/2 + fixedrect.width/2 
    && fixedrect.y-movingrect.y< movingrect.height/2+fixedrect.height/2
    && movingrect.y-fixedrect.y<  movingrect.height/2+fixedrect.height/2){
   
    movingrect.shapeColor="red";
    fixedrect.shapeColor="red";
  }
  else{
    movingrect.shapeColor="green";
    fixedrect.shapeColor="green";
  }


  drawSprites();
}
