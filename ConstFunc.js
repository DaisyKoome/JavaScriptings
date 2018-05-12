function Rectangle(l,b,c){
  this.length=l;
  this.breadth=b;
  this.color=c;
  this.area=function(){
    return this.length*this.breadth;
  }
}
  var rectangle=new Rectangle(3.3,2.5,"Blue");
  console.log("Our rectangle has breadth:"+rectangle.breadth);
  console.log("Our rectangle has color:"+rectangle.color);
  console.log("Our rectangle has area:"+rectangle.area());
