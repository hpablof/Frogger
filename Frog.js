class Frog extends Rectangle {
    constructor(x, y, width)
    {
        super(x, y, width, width);
    }

    show()
    {
        fill(0, 255, 0, 200);//verde
        rect(this.x, this.y, this.width, this.width)

    }

    update()
    {
        this.x=constrain(this.x,0, width-this.width);
        this.y = constrain(this.y, 0 , height-this.height)
    }
    
    move(xdir, ydir)
    {
        this.x+=xdir * grid;
        this.y+=ydir * grid;
    }
}