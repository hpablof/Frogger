class Frog extends Rectangle {
    constructor(x, y, width){//Es un cuadrado
        super(x,y,width, width);
        this.attched = null;
    }
    attch(log)//para vificar si esta en un auto
    {
        this.attched =log;
    }

    update()
    {
        if (this.attched!= null) {//Esta en un carro
            this.x+=this.attched.speed;
        }
        this.x = constrain(this.x, 0, width - this.width) //no salir del limite x
        this.y = constrain(this.y, 0, height - this.height) // no salir del limite y
    }
    show()
    {
        fill(0, 255, 0, 200); //verde
        rect(this.x, this.y, this.width, this.width)
    }
    
    move(xdir, ydir)
    {  
        this.x+= xdir * grid;
        this.y+= ydir * grid;
    }
}