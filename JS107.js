/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
window.onload=arrayStuff;
function arrayStuff(){
    var allDays=['Mon','Tue','Wed','Thur','Fri','Sat','Sun'];
    weekends=allDays.splice(5,7);
    Friday=allDays.splice(4);
    printArray(weekends,"weekend days");
    printArray(allDays,"week days");
    printArray(allDays,"spliced");
    
    var allMonths=[1,2,'Mar',3,4,'June',7,8,'Sep',9,10,'Dec'];
    console.log(allMonths[15]);
    console.log(allMonths[-1]);
    console.log(allMonths[-15]);
    }

function printArray(array,name){
    console.log("printing array"+name);
    console.log(array.length+"elements");
    for(i=0;i<array.length;i++){
     console.log(i+":"+array[i]);
 }
}