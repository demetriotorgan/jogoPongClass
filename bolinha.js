//-----Criando as Class----------//
class Bolinha{
  constructor(x,y,r,vx,vy,ponto1,ponto2){
    this.x = x;
    this.y = y;
    this.r = r;
    this.vx= vx;
    this.vy =vy;
    this.ponto1 = ponto1;
    this.ponto2 = ponto2;
    
  }
  
  mostrarBolinha(){  
  circle(this.x, this.y,this.r);  
  }
  
  movimentarBolinha(){
    this.x += this.vx;
    this.y += this.vy;
  }
  
  colisaoBorda(){
    if (this.x > 588 || this.x < 10){
      this.vx *= -1;
    }
    if (this.y > 390 || this.y < 10){
      this.vy *= -1;
    }
  }
  marcaPontos(){
    fill(color(255,140,0));
    stroke(255);
    rect(125, 25, 50,30);
    rect(325, 25, 50,30);
    textAlign(CENTER);
    fill(255);
    textSize(32);  
    text(this.ponto1, 150,50);
    text(this.ponto2, 350, 50 );
    if (this.x > 590){
      this.ponto1 +=1;      
    }
    if (this.x < 10){
      this.ponto2 +=1;
    }
  }
}