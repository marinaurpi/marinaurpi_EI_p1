//COLORES
var amarillo= "#f8bd29";
var negro= 0;
var azul= "#016db3";
var rojo= "#de3331";
var gris= 225;

//FIGURA
var figura;

//VARIABLES RANDOM
var iniNegro;
var randN;
var iniRojo;
var randR;
var iniAzul;
var randAz;

//TRIANGULO VARIABLES
//Triangulo Negro 1
var x1;
var x2;
var y1;
var y2;
//Triangulo Rojo 1
var xr1;
var xr2;
var yr1;
var yr2;
//Triangulo Rojo 2
var xro1;
var xro2;
var yro1;
var yro2;
//Triangulo Azul 1
var xa1;
var xa2;
var ya1;
var ya2;
//Triangulo Azul 2
var xaz1;
var xaz2;
var yaz1;
var yaz2;
//Triangulo Amarillo 1
var xam1;
var xam2;
var yam1;
var yam2;
//Triangulo Amarillo 2
var xama1;
var xama2;
var yama1;
var yama2;
//Triangulo Amarillo 3
var xamar1;
var xamar2;
var yamar1;
var yamar2;
//Triangulo Amarillo 4
var xamari1;
var xamari2;
var yamari1;
var yamari2;

//TIEMPO
var tiempo=0;

//COLORES ALEATORIOS
var colorRand;
var colorFN=negro;
var colorFR=rojo;
var colorFAm=amarillo;
var colorFAz=azul;

//TEXTO
var op=0;

function setup() {
  createCanvas(430, 725);
  
  noStroke();
  
  //Creamos un objeto de clase Figuras
  figura= new Figuras();
  
  gris=random(150,235);
  
  //Declaramos las variables random de cada grupo de figuras con el mismo color
  randN=random(0,4);
  if(randN<=2){
    iniNegro=-75;
    x1=0;
    x2=-64.5;
    y1=0;
    y2=-72;
  }else if(randN>2 && randN<=3){
    iniNegro=505;
    x1=494.5;
    x2=430;
    y1=803;
    y2=725;
  }else{
    iniNegro=800;
    x1=494.5;
    x2=430;
    y1=803;
    y2=725;
  }
  
  randR=random(0,4);
  if(randR<=2){
    iniRojo=0;
    xr1=0;
    xr2=-64.5;
    yr1=0;
    yr2=-76.5;
    xro1=-75;
    xro2=0;
    yro1=-75;
    yro2=0;
  }else if(randR>2 && randR<=3){
    iniRojo=430;
    xr1=494.5;
    xr2=430;
    yr1=801.5;
    yr2=725;
    xro1=430;
    xro2=505;
    yro1=725;
    yro2=800;
  }else{
    iniRojo=725;
    xr1=494.5;
    xr2=430;
    yr1=801.5;
    yr2=725;
    xro1=430;
    xro2=505;
    yro1=725;
    yro2=800;
  }
  
  randAz=random(0,4);
  if(randAz<=2){
    iniAzul=0;
    xa1=-75;
    xa2=0;
    ya1=-75;
    ya2=0;
    xaz1=-64.5;
    xaz2=0;
    yaz1=-75.5;
    yaz2=0;
  }else if(randAz>2 && randAz<=3){
    iniAzul=430;
    xa1=430;
    xa2=505;
    ya1=725;
    ya2=800;
    xaz1=430;
    xaz2=494.5;
    yaz1=725;
    yaz2=800.5;
  }else{
    iniAzul=725;
    xa1=430;
    xa2=505;
    ya1=725;
    ya2=800;
    xaz1=430;
    xaz2=494.5;
    yaz1=725;
    yaz2=800.5;
  }
  
  randAm=random(0,4);
  if(randAm<=2){
    iniAmarillo=0;
    xam1=-64;
    xam2=0;
    yam1=-60;
    yam2=0;
    xama1=0;
    xama2=-75;
    yama1=0;
    yama2=-52;
    xamar1=0;
    xamar2=-75;
    yamar1=0;
    yamar2=-75;
    xamari1=-75;
    xamari2=0;
    yamari1=-75;
    yamari2=0;
  }else if(randAm>2 && randAm<=3){
    iniAmarillo=430;
    xam1=430;
    xam2=494;
    yam1=725;
    yam2=800;
    xama1=505;
    xama2=430;
    yama1=777;
    yama2=725;
    xamar1=505;
    xamar2=430;
    yamar1=800;
    yamar2=725;
    xamari1=430;
    xamari2=505;
    yamari1=725;
    yamari2=800;
  }else{
    iniAmarillo=725;
    xam1=430;
    xam2=494;
    yam1=725;
    yam2=800;
    xama1=505;
    xama2=430;
    yama1=777;
    yama2=725;
    xamar1=505;
    xamar2=430;
    yamar1=800;
    yamar2=725;
    xamari1=430;
    xamari2=505;
    yamari1=725;
    yamari2=800;
  }
}
 
function draw() {
  
  background(gris);
  
  if(tiempo>=50 && tiempo<1200){
    
    //Movemos las figuras negras
    figura.moverNegro(112.5,175,112.5,112.5);
    figura.moverNegro(187.5, 437.5, 37.5, 37.5);
    figura.moverNegro(300, 287.5, 75, 75);
    figura.moverTrianguloN();

    //Movemos las figuras rojas
    if(tiempo>=250){
      figura.moverRojo(112.5, 287.5, 75, 75);
      figura.moverRojo(225, 362.5, 75, 113);
      figura.moverTrianguloR(xr1,xr2,yr1,yr2,112.5, 175, 112.5, 98.5, 48, 175);
      figura.moverTrianguloR(xro1,xro2,yro1,yro2,225, 475, 225, 550, 300, 475);
      if(randR<=1){
        xr1+=1.5;
        xr2+=1.5;
        xro1+=1.5;
        xro2+=1.5;
      }else if(randR>1 && randR<=2){
        yr1+=1.5;
        yr2+=1.5;
        yro1+=1.5;
        yro2+=1.5;
      }else if(randR>2 && randR<=3){
        xr1-=1.5;
        xr2-=1.5;
        xro1-=1.5;
        xro2-=1.5;
      }else if(randR>3 && randR<=4){
        yr1-=1.5;
        yr2-=1.5;
        yro1-=1.5;
        yro2-=1.5;
      }
    }

    //Movemos las figuras azules
    if(tiempo>=475){
      figura.moverAzul(187.5, 287.5, 37.5, 75);
      figura.moverAzul(112.5, 362.5, 75, 75);
      figura.moverAzul(48, 175, 64, 112.5);
      figura.moverAzul(187.5, 70, 37.5, 65);
      figura.moverAzul(300, 250, 75, 37.5);
      figura.moverTrianguloAz(xa1,xa2,ya1,ya2,112.5, 550, 112.5, 625, 187.5, 550);
      figura.moverTrianguloAz(xaz1,xaz2,yaz1,yaz2, 48, 287, 48, 362.5, 112.5, 287);
      if(randAz<=1){
        xa1+=1.5;
        xa2+=1.5;
        xaz1+=1.5;
        xaz2+=1.5;
      }else if(randAz>1 && randAz<=2){
        ya1+=1.5;
        ya2+=1.5;
        yaz1+=1.5;
        yaz2+=1.5;
      }else if(randAz>2 && randAz<=3){
        xa1-=1.5;
        xa2-=1.5;
        xaz1-=1.5;
        xaz2-=1.5;
      }else if(randAz>3 && randAz<=4){
        ya1-=1.5;
        ya2-=1.5;
        yaz1-=1.5;
        yaz2-=1.5;
      }
    }

    //Movemos las figuras amarillas
    if(tiempo>=725){
      figura.moverAmarillo(187.5, 362.5, 37.5, 75);
      figura.moverAmarillo(187.5, 550, 37.5, 75);
      figura.moverAmarillo(48, 550, 64, 100);
      figura.moverAmarillo(225, 98.5, 75, 75);
      figura.moverAmarillo(112.5, 70, 75, 105);
      figura.moverTrianguloAm(xam1,xam2,yam1,yam2, 48, 650, 48, 710, 112, 650);
      figura.moverTrianguloAm(xama1,xama2,yama1,yama2, 187.5, 70, 187.5, 18, 112.5, 70);
      figura.moverTrianguloAm(xamar1,xamar2,yamar1,yamar2, 300, 362.5, 300, 287.5, 225, 362.5);
      figura.moverTrianguloAm(xamari1,xamari2,yamari1,yamari2, 300, 362.5, 300, 437.5, 375, 362.5);
      if(randAm<=1){
        xam1+=1.5;
        xam2+=1.5;
        xama1+=1.5;
        xama2+=1.5;
        xamar1+=1.5;
        xamar2+=1.5;
        xamari1+=1.5;
        xamari2+=1.5;
      }else if(randAm>1 && randAm<=2){
        yam1+=1.5;
        yam2+=1.5;
        yama1+=1.5;
        yama2+=1.5;
        yamar1+=1.5;
        yamar2+=1.5;
        yamari1+=1.5;
        yamari2+=1.5;
      }else if(randAm>2 && randAm<=3){
        xam1-=1.5;
        xam2-=1.5;
        xama1-=1.5;
        xama2-=1.5;
        xamar1-=1.5;
        xamar2-=1.5;
        xamari1-=1.5;
        xamari2-=1.5;
      }else if(randAm>3 && randAm<=4){
        yam1-=1.5;
        yam2-=1.5;
        yama1-=1.5;
        yama2-=1.5;
        yamar1-=1.5;
        yamar2-=1.5;
        yamari1-=1.5;
        yamari2-=1.5;
      }
      
      //Aparece el texto de menos opacidad a más
      if(tiempo>=945){
        if(op<255){
          op++;
        }
        noStroke();
        fill(negro, op);
        textFont("Peddana");
        textSize(5.5);
        text("Lorem Ipsum is simply dummy text of the\n\nprinting and typesetting industry.\nLorem Ipsum has been the industry's\nstandard dummy text \never since the 1500s,when an \nunknown printer took a galleyof type \nand scrambled it to make a type specimen. \nIt has survived not only five centuries, \nbut the leap into electronic typesetting wd\nremaining essentially unchanged. It \nwas popularised in the 1960s with release\n of Letraset sheets containing asf dfe\nLetraset sheets chao", 235,600);
        rotate(radians(90));
        text("Lorem Ipsum is simply ", 640,-375); 
        text("Lorem Ipsum is simply ", 35,-375); 
        text("Lorem Ipsum is simply Lorem Ipsum is simply dummy text imply ", 475,-375);
        noFill();
        resetMatrix();  
    }
      
  }
    tiempo++;
  }else{
    tiempo++;
    if(tiempo>=1200){
      noStroke();
      fill(negro, op);
      textFont("Peddana");
      textSize(5.5);
      text("Lorem Ipsum is simply dummy text of the\n\nprinting and typesetting industry.\nLorem Ipsum has been the industry's\nstandard dummy text \never since the 1500s,when an \nunknown printer took a galleyof type \nand scrambled it to make a type specimen. \nIt has survived not only five centuries, \nbut the leap into electronic typesetting wd\nremaining essentially unchanged. It \nwas popularised in the 1960s with release\n of Letraset sheets containing asf dfe\nLetraset sheets chao", 235,600);
      rotate(radians(90));
      text("Lorem Ipsum is simply ", 640,-375); 
      text("Lorem Ipsum is simply ", 35,-375); 
      text("Lorem Ipsum is simply Lorem Ipsum is simply dummy text imply ", 475,-375);
      noFill();
      resetMatrix();  
      
      //De manera random van cambiando los colores de cada figura
      if(tiempo%50==0){
        colorRand=random(0,4);
        if(colorRand<=1){
            colorFN=negro;
        }else if(colorRand>1 && colorRand<=2){
            colorFN=azul;
        }else if(colorRand>2 && colorRand<=3){
            colorFN=amarillo;
        }else if(colorRand>3 && colorRand<=4){
            colorFN=rojo;
        }
      }
      fill(colorFN);
      rect(112.5, 175, 112.5, 112.5);
      rect(187.5, 437.5, 37.5, 37.5);
      rect(300, 287.5, 75, 75);
      triangle(112.5, 550, 48, 550, 112.5, 478);

      if(tiempo%50==0){
        colorRand=random(0,4);
        if(colorRand<=1){
            colorFR=negro;
        }else if(colorRand>1 && colorRand<=2){
            colorFR=azul;
        }else if(colorRand>2 && colorRand<=3){
            colorFR=amarillo;
        }else if(colorRand>3 && colorRand<=4){
            colorFR=rojo;
        }
      }
      fill(colorFR);
      rect(112.5, 287.5, 75, 75);
      triangle(112.5, 175, 112.5, 98.5, 48, 175);
      rect(225, 362.5, 75, 113);
      triangle(225, 475, 225, 550, 300, 475);

      if(tiempo%50==0){
        colorRand=random(0,4);
        if(colorRand<=1){
            colorAz=negro;
        }else if(colorRand>1 && colorRand<=2){
            colorAz=azul;
        }else if(colorRand>2 && colorRand<=3){
            colorFAz=amarillo;
        }else if(colorRand>3 && colorRand<=4){
            colorFAz=rojo;
        }
      }
      fill(colorFAz);
      rect(187.5, 287.5, 37.5, 75);
      rect(112.5, 362.5, 75, 75);
      triangle(187.5, 550, 112.5, 550, 112.5, 625);
      rect(48, 175, 64, 112.5);
      triangle(48,287, 112.5, 287, 48, 362.5);
      rect(187.5, 70, 37.5, 65);
      rect(300, 250, 75, 37.5);

      if(tiempo%50==0){
        colorRand=random(0,4);
        if(colorRand<=1){
            colorFAm=negro;
        }else if(colorRand>1 && colorRand<=2){
            colorFAm=azul;
        }else if(colorRand>2 && colorRand<=3){
            colorFAm=amarillo;
        }else if(colorRand>3 && colorRand<=4){
            colorFAm=rojo;
        }
      }
      fill(colorFAm);
      rect(187.5, 362.5, 37.5, 75);
      rect(187.5, 550, 37.5, 75);
      rect(48, 550, 64, 100);
      triangle(48,650,112,650,48,710);
      rect(225, 98.5, 75, 75);
      rect(112.5, 70, 75, 105);
      triangle(112.5,70,187.5,70,187.5,18);
      triangle(300, 287.5, 300, 362.5, 225, 362.5);
      triangle(300, 362.5, 375, 362.5, 300, 437.5);
    }
  }
  
}

//Reset de l'animacion
function deviceShaken() {
  tiempo=0;
  colorFN=negro;
  colorFR=rojo;
  colorFAm=amarillo;
  colorFAz=azul;
  op=0;
  
  gris=random(150,235);
  
  randN=random(0,4);
  if(randN<=2){
    iniNegro=-75;
    x1=0;
    x2=-64.5;
    y1=0;
    y2=-72;
  }else if(randN>2 && randN<=3){
    iniNegro=505;
    x1=494.5;
    x2=430;
    y1=803;
    y2=725;
  }else{
    iniNegro=800;
    x1=494.5;
    x2=430;
    y1=803;
    y2=725;
  }
  
  randR=random(0,4);
  if(randR<=2){
    iniRojo=0;
    xr1=0;
    xr2=-64.5;
    yr1=0;
    yr2=-76.5;
    xro1=-75;
    xro2=0;
    yro1=-75;
    yro2=0;
  }else if(randR>2 && randR<=3){
    iniRojo=430;
    xr1=494.5;
    xr2=430;
    yr1=801.5;
    yr2=725;
    xro1=430;
    xro2=505;
    yro1=725;
    yro2=800;
  }else{
    iniRojo=725;
    xr1=494.5;
    xr2=430;
    yr1=801.5;
    yr2=725;
    xro1=430;
    xro2=505;
    yro1=725;
    yro2=800;
  }
  
  randAz=random(0,4);
  if(randAz<=2){
    iniAzul=0;
    xa1=-75;
    xa2=0;
    ya1=-75;
    ya2=0;
    xaz1=-64.5;
    xaz2=0;
    yaz1=-75.5;
    yaz2=0;
  }else if(randAz>2 && randAz<=3){
    iniAzul=430;
    xa1=430;
    xa2=505;
    ya1=725;
    ya2=800;
    xaz1=430;
    xaz2=494.5;
    yaz1=725;
    yaz2=800.5;
  }else{
    iniAzul=725;
    xa1=430;
    xa2=505;
    ya1=725;
    ya2=800;
    xaz1=430;
    xaz2=494.5;
    yaz1=725;
    yaz2=800.5;
  }
  
  randAm=random(0,4);
  if(randAm<=2){
    iniAmarillo=0;
    xam1=-64;
    xam2=0;
    yam1=-60;
    yam2=0;
    xama1=0;
    xama2=-75;
    yama1=0;
    yama2=-52;
    xamar1=0;
    xamar2=-75;
    yamar1=0;
    yamar2=-75;
    xamari1=-75;
    xamari2=0;
    yamari1=-75;
    yamari2=0;
  }else if(randAm>2 && randAm<=3){
    iniAmarillo=430;
    xam1=430;
    xam2=494;
    yam1=725;
    yam2=800;
    xama1=505;
    xama2=430;
    yama1=777;
    yama2=725;
    xamar1=505;
    xamar2=430;
    yamar1=800;
    yamar2=725;
    xamari1=430;
    xamari2=505;
    yamari1=725;
    yamari2=800;
  }else{
    iniAmarillo=725;
    xam1=430;
    xam2=494;
    yam1=725;
    yam2=800;
    xama1=505;
    xama2=430;
    yama1=777;
    yama2=725;
    xamar1=505;
    xamar2=430;
    yamar1=800;
    yamar2=725;
    xamari1=430;
    xamari2=505;
    yamari1=725;
    yamari2=800;
  }
  
}

//Reset de l'animacion
function mouseClicked() { 
  tiempo=0;
  colorFN=negro;
  colorFR=rojo;
  colorFAm=amarillo;
  colorFAz=azul;
  op=0;
  
  gris=random(150,235);
  
  randN=random(0,4);
  if(randN<=2){
    iniNegro=-75;
    x1=0;
    x2=-64.5;
    y1=0;
    y2=-72;
  }else if(randN>2 && randN<=3){
    iniNegro=505;
    x1=494.5;
    x2=430;
    y1=803;
    y2=725;
  }else{
    iniNegro=800;
    x1=494.5;
    x2=430;
    y1=803;
    y2=725;
  }
  
  randR=random(0,4);
  if(randR<=2){
    iniRojo=0;
    xr1=0;
    xr2=-64.5;
    yr1=0;
    yr2=-76.5;
    xro1=-75;
    xro2=0;
    yro1=-75;
    yro2=0;
  }else if(randR>2 && randR<=3){
    iniRojo=430;
    xr1=494.5;
    xr2=430;
    yr1=801.5;
    yr2=725;
    xro1=430;
    xro2=505;
    yro1=725;
    yro2=800;
  }else{
    iniRojo=725;
    xr1=494.5;
    xr2=430;
    yr1=801.5;
    yr2=725;
    xro1=430;
    xro2=505;
    yro1=725;
    yro2=800;
  }
  
  randAz=random(0,4);
  if(randAz<=2){
    iniAzul=0;
    xa1=-75;
    xa2=0;
    ya1=-75;
    ya2=0;
    xaz1=-64.5;
    xaz2=0;
    yaz1=-75.5;
    yaz2=0;
  }else if(randAz>2 && randAz<=3){
    iniAzul=430;
    xa1=430;
    xa2=505;
    ya1=725;
    ya2=800;
    xaz1=430;
    xaz2=494.5;
    yaz1=725;
    yaz2=800.5;
  }else{
    iniAzul=725;
    xa1=430;
    xa2=505;
    ya1=725;
    ya2=800;
    xaz1=430;
    xaz2=494.5;
    yaz1=725;
    yaz2=800.5;
  }
  
  randAm=random(0,4);
  if(randAm<=2){
    iniAmarillo=0;
    xam1=-64;
    xam2=0;
    yam1=-60;
    yam2=0;
    xama1=0;
    xama2=-75;
    yama1=0;
    yama2=-52;
    xamar1=0;
    xamar2=-75;
    yamar1=0;
    yamar2=-75;
    xamari1=-75;
    xamari2=0;
    yamari1=-75;
    yamari2=0;
  }else if(randAm>2 && randAm<=3){
    iniAmarillo=430;
    xam1=430;
    xam2=494;
    yam1=725;
    yam2=800;
    xama1=505;
    xama2=430;
    yama1=777;
    yama2=725;
    xamar1=505;
    xamar2=430;
    yamar1=800;
    yamar2=725;
    xamari1=430;
    xamari2=505;
    yamari1=725;
    yamari2=800;
  }else{
    iniAmarillo=725;
    xam1=430;
    xam2=494;
    yam1=725;
    yam2=800;
    xama1=505;
    xama2=430;
    yama1=777;
    yama2=725;
    xamar1=505;
    xamar2=430;
    yamar1=800;
    yamar2=725;
    xamari1=430;
    xamari2=505;
    yamari1=725;
    yamari2=800;
  }
} 