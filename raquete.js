//-----Class Raquete-----//
class Raquete{
  constructor(x,y,comp,alt){
    this.x =x;
    this.y =y;
    this.comp = comp;
    this.alt = alt;
  }
  
  mostraRaquete(){
    rect(this.x, this.y, this.comp, this.alt);
  }
  
  movimentaRaquete1(){
    if (keyIsDown(UP_ARROW)){
      if(this.y > 0){
        this.y -=10;  
      }      
    }
    if (keyIsDown(DOWN_ARROW)){
      if (this.y < 330){
        this.y +=10;  
      }      
    }
  }
  
  movimentaRaquete2(){
    if (keyIsDown(87)){
      if(this.y > 0){
        this.y -=10;  
      }      
    }
    if (keyIsDown(83)){
      if(this.y < 330){
        this.y +=10;  
      }      
    }
  }
  
  colisao(){    
    colidiu = collideRectCircle(this.x, this.y, this.comp, this.alt, bolinha.x, bolinha.y, bolinha.r);    
    if(colidiu){
      bolinha.vx *= -1;
    }
  }
}
