
var dog,sadDog,happyDog,button,button2,milk,milkimg,feed,add;milk,gameState!=milk,time,time2,timereal,time3,time5;
var fedTime,database,lastfed;play,gameState!=play

function preload(){
  sadDog=loadImage("Dog.png");
  happyDog=loadImage("happy dog.png");
milkimg=loadImage("Milk.png")

}

function setup() {
  createCanvas(1000,400);

database=firebase.database()
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;
feed=createButton("feed the dog")
feed.position(800,95)
feed.mousePressed(feeddog)
feed.mousePressed(feeddog)
add=createButton("add food")
add.position(700,95)
add.mousePressed(addfood)

time=0
time2=0
time3=0
time4=0

}

function draw() {

  
  
  background(46,139,87);
  fill("black")
  textSize(20)

    

 fedTime=database.ref('FeedTime')
  fedTime.on("value",function(data){
  lastfed=data.val()
  });
  if(milk!==null){ 
  text("no feed",200,50)
  }
  
  
 
  if(milk===null){
    

    
    text("last feed ="+time+":"+time2+":"+time3+":"+time4+" Hours ago",200,50)  
    time4=time4+2
 
 if(time4>59){
time4=0
time3=time3+1


 }
if(time3>59){

time2=time2+1
time3=0

}
if(time2>59){

  time=time+1
  time2=0
  
  }
 if(time===1){
  dog.addImage(sadDog)
 }



 }
 
 drawSprites();
 




}


function feeddog(){

  if(gameState===milk){
    dog.addImage(happyDog)
  
    time=0
    time2=0
    time3=0
    time4=0
    
    
  
                                                                                             
  }  
  gameState=!milk
milk.destroy()
milk=null
}

function addfood()  {

 
  milk=createSprite(600,200,width,height)

  milk.addImage(milkimg)
milk.scale=0.2
  
gameState=milk 
  
}












