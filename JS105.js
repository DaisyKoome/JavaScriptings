/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
window.onload=arrayStuff;
function arrayStuff(){
    var allDays=['Mon','Tue','Wed','Thur','Fri','Sat','Sun'];
    printArray(allDays,"Days");
    var deepCopy=allDays.slice(5,7);
    allDays[3]='Thursday';
    var shallowCopy=allDays;
    printArray(shallowCopy,"All days");
    printArray(deepCopy,"Every day");
}

function printArray(array,name){
    console.log("printing "+name);
    console.log(array.length+"elements");
    for(var i=0;i<array.length;i++){
        console.log(i+":"+array[i]);
    }
}

 var allDays=['Mon','Tue','Wed','Thur','Fri','Sat','Sun'];
 allDays[3]='Thursday';
 var shallowCopy=allDays;
 var weekends=shallowCopy.slice(5,7);
 var weekends=[];