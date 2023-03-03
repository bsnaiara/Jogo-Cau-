var campo, campoImg;
var jogador, jogadorImg;
var inicio, inicioImg;
var start, startImg;

function preload(){
campoImg = loadImage("assets/CampoFutebol.png");
jogadorImg = loadImage("assets/Jogador1.png");
inicioImg = loadImage("assets/telaDeFundo.jpg");
startImg = loadImage("assets/StartButton.jpg");

}

function setup(){
  createCanvas(windowWidth - 30, windowHeight - 25);



  //imagem de plano de fundo
campo = createSprite(displayWidth/2 , displayHeight/2- 40, 20, 20);
campo.addImage(campoImg);
campo.scale = 1.2;

jogador = createSprite(displayWidth/2, displayHeight/2, 20, 20);
jogador.addImage(jogadorImg);
jogador.scale = 0.6;

inicio = createSprite(displayWidth/2, displayHeight/2, width, height);
inicio.addImage(inicioImg);
inicio.scale = 0.85;


start = createSprite(displayWidth/2-40, displayHeight/2-100);
start.addImage(startImg);
start.scale = 0.25;



}

function draw() {
  
  background("black");

  if(mousePressedOver(start)){
    start.visible = false;
    inicio.visible = false;
  }

  if(keyDown("UP_ARROW")){
    jogador.y -= 5;
  }

  if(keyDown("DOWN_ARROW")){
    jogador.y += 5;
  }

  if(keyDown("LEFT_ARROW")){
    jogador.x -= 6;
  }

  if(keyDown("RIGHT_ARROW")){
    jogador.x += 6;
  }

  

  


  drawSprites();
        

}

function hide() {

  
    start.visible = false;
    inicio.visible = false;
}
