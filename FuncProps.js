window.onload=rec;
function rec(){
var rectangle={
  length:5.0,
  breadth:3.5,
  color:'Red',
  area:function(){
  return this.length*this.breadth;
 }
};
console.log("The rectangle has area= "+rectangle.area())
}
