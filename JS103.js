/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
window.onload=printX;
var x=5;
function printX() {
    var x=10;
    var pi=3.1415;
    e=2.71828;
    console.log("Inside printX:x= "+x);
    console.log("Inside printX:e= "+e);
    console.log("Inside printX:pi= "+pi);
    printAnotherX();
    } 
function printAnotherX(){
    var x=20;
    console.log("Inside printAnotherX:X= "+x);
    console.log("Inside printX:e= "+e);
    console.log("Inside printAnotherX:pi= "+pi);
}

