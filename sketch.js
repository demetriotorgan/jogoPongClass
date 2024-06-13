let bolinha;
let raquete1;
let raquete2;
let colidiu = false;
let meusPontos = 0;
let pontosOponente = 0;

function setup() {    
  createCanvas(600, 400);
  bolinha = new Bolinha(300,200,20,4,4,meusPontos,pontosOponente);
  raquete1 = new Raquete(10,150,10,90);
  raquete2 = new Raquete(585,150,10,90);    
}


function draw() {
  background(0);
  bolinha.mostrarBolinha();
  bolinha.movimentarBolinha();
  bolinha.colisaoBorda();
  bolinha.marcaPontos(meusPontos);
  raquete1.mostraRaquete();
  raquete1.movimentaRaquete1();
  raquete1.colisao();
  raquete2.mostraRaquete();
  raquete2.movimentaRaquete2();
  raquete2.colisao();    
  
}//fim da função Draw

