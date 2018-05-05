/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//Adding elements to an array
window.onload=arrayStuff;
function arrayStuff(){
    var allDays=['Mon','Tue','Wed','Thur','Fri','Sat','Sun'];
    var weekEnds=[];
    printArray(weekEnds,"weekend days");

    for(var i=0;i<allDays.length;i++);{
        if(IsWeekend(allDays[i])){
            weekEnds.push(allDays[i]); 
}
}
printArray(weekEnds,"weekend days");
}


function IsWeekend(day){
    if (day ==='Sat' || day ==='Sun'){
        return true;
    }
    
      return false;
}

function printArray(array,name){
    console.log("printing array"+name);
    console.log(array.length+"elements");
    for(i=0;i<array.length;i++){
     console.log(i+":"+array[i]);
 }
}


