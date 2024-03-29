class Car extends Rectangle {
    constructor(x,y,width,height, speed)
    {
        super(x, y, width, height);
        this.speed = speed;
    }
    show(){
        fill(43,107,228)
        rect(this.x, this.y, this.width, this.height);
    }

    update()
    {
        this.x+=this.speed;
        if(this.speed >0 && this.x > width+grid)//si sobrepsa el canvas hacia derecha
        {
            this.x=-this.width-grid;//ingresa desde fuera izquierda
        }
        else if(this.speed < 0 && this.x < -this.width-grid)
        {
            this.x= width+grid
        }
    }
}