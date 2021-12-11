var miniorShell, miniorShellImg
var miniorShell1
var miniorShell2
var miniorShell3
var miniorShell4
var miniorShell5
var miniorShell6
var miniorShell7
var miniorShell8
var miniorShell9
var miniorShell10
var miniorShell11
var miniorShell12
var miniorShell13
var miniorShell14
var miniorShell15
var miniorShell16
var miniorShell17
var miniorShell18
var miniorShell19
var miniorShell20
var bullet, bulletImg, bulletGroup

var gameOver, gameOverImg

var invisibleLine

var shipImg, ship
var blastImg

var rocksImg
var rocks, rocks1, rocks2
var rocksGroup

var playState = 1, endState = 0, gameState = playState
var life = 3

function preload(){
    miniorShellImg = loadImage('./assets/miniorShell.png')
    shipImg = loadImage('./assets/ship.png')
    rocksImg = loadImage('./assets/miniorPiece.png')
    blastImg = loadImage('./assets/burst.png')
    gameOverImg = loadImage('./assets/gameOver.png')
    bulletImg = loadImage('./assets/bullet.png')
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    edges = createEdgeSprites()
  
    rocksGroup = new Group()
    miniorGroup = new Group()
    bulletGroup = new Group()
  
    ship = createSprite(550,550, 50, 50)
    ship.addImage("play",shipImg)
    ship.addImage('end', blastImg)
    ship.scale = 0.2
    ship.rotation = 270
  
    miniorShell=createSprite(300, 100, 50, 50);
    miniorShell.addImage(miniorShellImg)
    miniorShell.scale = 0.04
    
    miniorShell1=createSprite(400, 100, 50, 50);
    miniorShell1.addImage(miniorShellImg)
    miniorShell1.scale = 0.04
  
    miniorShell2=createSprite(500, 100, 50, 50);
    miniorShell2.addImage(miniorShellImg)
    miniorShell2.scale = 0.04
  
    miniorShell3=createSprite(600, 100, 50, 50);
    miniorShell3.addImage(miniorShellImg)
    miniorShell3.scale = 0.04
  
    miniorShell4=createSprite(700, 100, 50, 50);
    miniorShell4.addImage(miniorShellImg)
    miniorShell4.scale = 0.04
  
    miniorShell5=createSprite(800, 100, 50, 50);
    miniorShell5.addImage(miniorShellImg)
    miniorShell5.scale = 0.04
    
    miniorShell6=createSprite(900, 100, 50, 50);
    miniorShell6.addImage(miniorShellImg)
    miniorShell6.scale = 0.04
  
    miniorShell7=createSprite(310, 200, 50, 50);
    miniorShell7.addImage(miniorShellImg)
    miniorShell7.scale = 0.04
  
    miniorShell8=createSprite(410, 200, 50, 50);
    miniorShell8.addImage(miniorShellImg)
    miniorShell8.scale = 0.04
  
    miniorShell9=createSprite(510, 200, 50, 50);
    miniorShell9.addImage(miniorShellImg)
    miniorShell9.scale = 0.04
  
    miniorShell10=createSprite(610, 200, 50, 50);
    miniorShell10.addImage(miniorShellImg)
    miniorShell10.scale = 0.04
    
    miniorShell11=createSprite(710, 200, 50, 50);
    miniorShell11.addImage(miniorShellImg)
    miniorShell11.scale = 0.04
  
    miniorShell12=createSprite(810, 200, 50, 50);
    miniorShell12.addImage(miniorShellImg)
    miniorShell12.scale = 0.04
  
    miniorShell13=createSprite(910, 200, 50, 50);
    miniorShell13.addImage(miniorShellImg)
    miniorShell13.scale = 0.04
  
    miniorShell14=createSprite(320, 300, 50, 50);
    miniorShell14.addImage(miniorShellImg)
    miniorShell14.scale = 0.04
  
    miniorShell15=createSprite(420, 300, 50, 50);
    miniorShell15.addImage(miniorShellImg)
    miniorShell15.scale = 0.04
  
    miniorShell16=createSprite(520, 300, 50, 50);
    miniorShell16.addImage(miniorShellImg)
    miniorShell16.scale = 0.04
  
    miniorShell17=createSprite(620, 300, 50, 50);
    miniorShell17.addImage(miniorShellImg)
    miniorShell17.scale = 0.04
  
    miniorShell18=createSprite(720, 300, 50, 50);
    miniorShell18.addImage(miniorShellImg)
    miniorShell18.scale = 0.04
  
    miniorShell19=createSprite(820, 300, 50, 50);
    miniorShell19.addImage(miniorShellImg)
    miniorShell19.scale = 0.04
  
    miniorShell20=createSprite(920, 300, 50, 50);
    miniorShell20.addImage(miniorShellImg)
    miniorShell20.scale = 0.04
  
    invisibleLine = createSprite(width/2, 400, width, 10)
    invisibleLine.visible = false
  
    gameOver = createSprite(650, 350, 50, 50);
    gameOver.addImage(gameOverImg)
    gameOver.visible = false
  
    ship.visible = true
}
  
