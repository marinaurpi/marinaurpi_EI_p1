function Figuras(){
    
  //Funcion para mover los cuadrados negros
    this.moverNegro = function(xPos,yPos, width, height){
      fill(negro);
      if(randN<=1){
        if(iniNegro<xPos){
          rect(iniNegro, yPos, width, height);
          iniNegro++;
        }else{
          rect(xPos, yPos, width, height);
        }
      }else if(randN>1 && randN<=2){
        if(iniNegro<yPos){
          rect(xPos, iniNegro, width, height);
          iniNegro++;
        }else{
          rect(xPos, yPos, width, height);
        }
      }else if(randN>2 && randN<=3){
        if(iniNegro>xPos){
          rect(iniNegro, yPos, width, height);
          iniNegro--;
        }else{
          rect(xPos, yPos, width, height);
        }
      }else if(randN>3 && randN<=4){
        if(iniNegro>yPos){
          rect(xPos, iniNegro, width, height);
          iniNegro--;
        }else{
          rect(xPos, yPos, width, height);
        }
      }
    }
  
    //Funcion para mover los cuadrados rojos
    this.moverRojo = function(xPos,yPos, width, height){
      fill(rojo);
      if(randR<=1){
        if(iniRojo<xPos){
          rect(iniRojo, yPos, width, height);
          iniRojo++;
        }else{
          rect(xPos, yPos, width, height);
        }
      }else if(randR>1 && randR<=2){
        if(iniRojo<yPos){
          rect(xPos, iniRojo, width, height);
          iniRojo++;
        }else{
          rect(xPos, yPos, width, height);
        }
      }else if(randR>2 && randR<=3){
        if(iniRojo>xPos){
          rect(iniRojo, yPos, width, height);
          iniRojo--;
        }else{
          rect(xPos, yPos, width, height);
        }
      }else if(randR>3 && randR<=4){
        if(iniRojo>yPos){
          rect(xPos, iniRojo, width, height);
          iniRojo--;
        }else{
          rect(xPos, yPos, width, height);
        }
      }
     }
  
  //Funcion para mover los cuadrados azules
  this.moverAzul = function(xPos,yPos, width, height){
      fill(azul);
      if(randAz<=1){
        if(iniAzul<xPos){
          rect(iniAzul, yPos, width, height);
          iniAzul+=0.5;
        }else{
          rect(xPos, yPos, width, height);
        }
      }else if(randAz>1 && randAz<=2){
        if(iniAzul<yPos){
          rect(xPos, iniAzul, width, height);
          iniAzul+=0.5;
        }else{
          rect(xPos, yPos, width, height);
        }
      }else if(randAz>2 && randAz<=3){
        if(iniAzul>xPos){
          rect(iniAzul, yPos, width, height);
          iniAzul-=0.5;
        }else{
          rect(xPos, yPos, width, height);
        }
      }else if(randAz>3 && randAz<=4){
        if(iniAzul>yPos){
          rect(xPos, iniAzul, width, height);
          iniAzul-=0.5;
        }else{
          rect(xPos, yPos, width, height);
        }
      }
     }
  
  //Funcion para mover los cuadrados amarillos
  this.moverAmarillo = function(xPos,yPos, width, height){
      fill(amarillo);
      if(randAm<=1){
        if(iniAmarillo<xPos){
          rect(iniAmarillo, yPos, width, height);
          iniAmarillo+=0.5;
        }else{
          rect(xPos, yPos, width, height);
        }
      }else if(randAm>1 && randAm<=2){
        if(iniAmarillo<yPos){
          rect(xPos, iniAmarillo, width, height);
          iniAmarillo+=0.5;
        }else{
          rect(xPos, yPos, width, height);
        }
      }else if(randAm>2 && randAm<=3){
        if(iniAmarillo>xPos){
          rect(iniAmarillo, yPos, width, height);
          iniAmarillo-=0.5;
        }else{
          rect(xPos, yPos, width, height);
        }
      }else if(randAm>3 && randAm<=4){
        if(iniAmarillo>yPos){
          rect(xPos, iniAmarillo, width, height);
          iniAmarillo-=0.5;
        }else{
          rect(xPos, yPos, width, height);
        }
      }
     }
  
  //Funcion para mover el triangulo negro
  this.moverTrianguloN = function(){
    if(randN<=1){
      if(x1<112.5){
        triangle(x1, 550, x2, 550, x1, 478);
        x1+=2;
        x2+=2;
      }else{
        triangle(112.5, 550, 48, 550, 112.5, 478);
      }
    }else if(randN>1 && randN<=2){
      if(y1<550){
        triangle(112.5, y1, 48, y1, 112.5, y2);
        y1+=2;
        y2+=2;
      }else{
        triangle(112.5, 550, 48, 550, 112.5, 478);
      }
    }else if(randN>2 && randN<=3){
      if(x1>112.5){
        triangle(x1, 550, x2, 550, x1, 478);
        x1-=2;
        x2-=2;
      }else{
        triangle(112.5, 550, 48, 550, 112.5, 478);
      }
    }else if(randN>3 && randN<=4){
      if(y1>550){
        triangle(112.5, y1, 48, y1, 112.5, y2);
        y1-=2;
        y2-=2;
      }else{
        triangle(112.5, 550, 48, 550, 112.5, 478);
      }
    }
  }
  
  //Funcion para mover los triangulos rojos
  this.moverTrianguloR = function(x,xx,y,yy,num1,num2,num3,num4,num5,num6){
    if(randR<=1){
      if(x<num1){
        triangle(x, num2, xx, num6, x, num4);
      }else{
        triangle(num1,num2,num3,num4,num5,num6);
      }
    }else if(randR>1 && randR<=2){
      if(y<num2){
        triangle(num1, y, num5, y, num3, yy);
      }else{
        triangle(num1,num2,num3,num4,num5,num6);
      }
    }else if(randR>2 && randR<=3){
      if(x>num1){
        triangle(x, num2, xx, num6, x, num4);
      }else{
        triangle(num1,num2,num3,num4,num5,num6);
      }
    }else if(randR>3 && randR<=4){
      if(y>num2){
        triangle(num1, y, num5, y, num3, yy);
      }else{
        triangle(num1,num2,num3,num4,num5,num6);
      }
    }
  }
  
  //Funcion para mover los triangulos azules
  this.moverTrianguloAz = function(x,xx,y,yy,num1,num2,num3,num4,num5,num6){
    if(randAz<=1){
      if(x<num1){
        triangle(x, num2, xx, num6, x, num4);
      }else{
        triangle(num1,num2,num3,num4,num5,num6);
      }
    }else if(randAz>1 && randAz<=2){
      if(y<num2){
        triangle(num1, y, num5, y, num3, yy);
      }else{
        triangle(num1,num2,num3,num4,num5,num6);
      }
    }else if(randAz>2 && randAz<=3){
      if(x>num1){
        triangle(x, num2, xx, num6, x, num4);
      }else{
        triangle(num1,num2,num3,num4,num5,num6);
      }
    }else if(randAz>3 && randAz<=4){
      if(y>num2){
        triangle(num1, y, num5, y, num3, yy);
      }else{
        triangle(num1,num2,num3,num4,num5,num6);
      }
    }
  }
  
  //Funcion para mover los triangulos amarillos
  this.moverTrianguloAm = function(x,xx,y,yy,num1,num2,num3,num4,num5,num6){
    if(randAm<=1){
      if(x<num1){
        triangle(x, num2, xx, num6, x, num4);
      }else{
        triangle(num1,num2,num3,num4,num5,num6);
      }
    }else if(randAm>1 && randAm<=2){
      if(y<num2){
        triangle(num1, y, num5, y, num3, yy);
      }else{
        triangle(num1,num2,num3,num4,num5,num6);
      }
    }else if(randAm>2 && randAm<=3){
      if(x>num1){
        triangle(x, num2, xx, num6, x, num4);
      }else{
        triangle(num1,num2,num3,num4,num5,num6);
      }
    }else if(randAm>3 && randAm<=4){
      if(y>num2){
        triangle(num1, y, num5, y, num3, yy);
      }else{
        triangle(num1,num2,num3,num4,num5,num6);
      }
    }
  }
  

}