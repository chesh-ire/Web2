


class Rectangle {
     constructor(length, breadth) {
    this.length = length;
     this.breadth = breadth;
     }
    calculateArea() {
     return this.length * this.breadth;
     }
     }
    
    let myRectangle = new Rectangle(5, 10);
    
     console.log("Length:", myRectangle.length);
     console.log("Breadth:", myRectangle.breadth);
     console.log("Area:", myRectangle.calculateArea())