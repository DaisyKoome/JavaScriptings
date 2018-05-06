/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
window.onload=Rectangle;
function Rectangle(length,breadth,color){
    this.length=length;
    this.breadth=breadth;
    this.color=color;
}
var rectangle= new Rectangle(3.3,2.5,"Blue");
console.log("Our rectangle has OutlineColor= "+Rectangle.OutlineColor);
rectangle["OutlineColor"]="Black";
console.log("Trying again");
console.log("Our rectangle has OutlineColor= "+Rectangle.OutlineColor);


var OutlineColor = "Black";
obj[OutlineColor] = Rectangle(){ ... };
