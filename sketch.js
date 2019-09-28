let frog; //rana
let grid = 50; //tamaño de grid
let cars =[];
let logs =[];
function reset() 
{  
  frog = new Frog(width/2 - grid/2, height - grid, grid);//crea la rana en el medio
  frog.attch(null);// motar en un auto
  background(255, 0, 0);

}

function setup() {
  createCanvas(500, 500);
  reset();

  let index=0;
  //FILA1
  for (let i = 0; i < 2; i++) {
      let x=i*300
      cars[index] = new Car(x, height-grid * 2, grid*2, grid, 2);
      index ++;
  }
  //FILA 2
  for (let i = 0; i < 2; i++) {
    let x = i * 200 + 150;
    cars[index] =new Car(x, height-grid*3, grid, grid, -3.5 );
    index ++;
    
  }

  //FILA 3
  for (i = 0; i < 4; i++) {
    let x = i * 150 + 25;
    cars[index] = new Car(x, height - grid * 4, grid, grid, 1.2);
    index ++;
  }

  //FILA 5
  index = 0;
  for (i = 0; i < 2; i++) {
    let x = i * 250 + 100;
    logs[index] = new Log(x, height - grid * 6, grid * 3, grid, 2.3);
    index++;
  }

  // ROW 6
  for (i = 0; i < 3; i++) {
    let x = i * 200 + 30;
    logs[index] = new Log(x, height - grid * 7, grid * 2, grid, -1.3);
    index++;
  }
  // ROW 7
  for (i = 0; i < 2; i++) {
    let x = i * 400 + 10;
    logs[index] = new Log(x, height - grid * 8, grid * 4, grid, 0.5);
    index++;
  }
}

function draw() {
  background(230);
  //lineas Seguras
  fill(47, 181, 255)
  rect(0, 0, width, grid*2);//arriba
  fill(150);
  rect(0, height-grid, width, grid);//abajo
  rect(0, height-grid*5, width, grid);

  // movimiento de autos
  for (let i = 0; i < cars.length; i++) {
      cars[i].update();
      cars[i].show();
      if(frog.intersect(cars[i]))
      {
        reset();
      }
  }
  if(frog.y==0) //alert de ganar
  {
    alert('Ganaste!!');
    reset();
  }
  for (let i = 0; i < logs.length; i++) {
    logs[i].update();
    logs[i].show();

    if (frog.y < height - grid * 5 && frog.y > grid*2) {// si esta en el area de troncos
      let ok= false;
      for (let i = 0; i < logs.length; i++) {
          if (frog.intersect(logs[i])) {
            ok=true;
            frog.attch(logs[i]);
          }
      }
      if(!ok){
        reset();
      }
    }
    else {
      frog.attch(null);
    }
    
  }

  frog.update();
  frog.show();
}

function keyPressed() {
  if(keyCode === UP_ARROW){
      frog.move(0, -1);
  }else if(keyCode === DOWN_ARROW){
      frog.move(0, 1);
  }else if(keyCode === RIGHT_ARROW){
      frog.move(1, 0);
  }else if(keyCode === LEFT_ARROW){
      frog.move(-1, 0);
  }
}