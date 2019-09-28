class Rectangle {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    intersect(rectangulo2) {
        let left = this.x;
        let right = this.x + width;
        let top = this.y;
        let bottom = this.y + this.height;

        let r2left = rectangulo2.x;
        let r2right = rectangulo2.x + rectangulo2.width;
        let r2top = rectangulo2.y;
        let r2bottom = rectangulo2.y + rectangulo2.height;

        return !(left >= r2right ||
            right <= r2left ||
            top >= r2bottom ||
            bottom <= r2top);

    }
}