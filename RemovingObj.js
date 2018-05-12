window.onload=Rectangle;
function Rectangle(length,breadth,color){
    this.length=length;
    this.breadth=breadth;
    this.color=color;
}
var rectangle= new Rectangle(3.3,
                             2.5,
                             "Blue");

delete rectangle.length
console.log("Our rectangle has length= "+Rectangle.length);
