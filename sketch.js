let frog; //rana
let grid = 50;
let cars=[];
function reset()
{
  frog =new Frog(width/2 - grid/2, height-grid, grid);
 
}
function setup() {
  createCanvas(500, 500);
  reset();
  let index=0;
  //Fila 1
  for (let i = 0; i < 2; i++) {
      let x=i*300;
      cars[index] = new Car(x, height-grid*2, grid*2,grid,2 );
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
  

}

function draw() {
  background(230);

  for (let i = 0; i < cars.length; i++) {
    cars[i].update();
    cars[i].show();
    if (frog.intersect(cars[i])) {
      reset();
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