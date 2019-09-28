class Log extends Car{
    constructor(x, y, width, height, speed){
        super(x, y, width, height, speed);
    }
    show(){
        fill(253,158,49)
        rect(this.x, this.y, this.width, this.height);
    }
}