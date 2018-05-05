/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function printHelloWorld()
{
var userInput=prompt("Please enter a number between 1 and 10");
if(userInput >=1 && userInput <=10)
{
for(var i=0;
	i<userInput;
	i++);
	{
	 document.write("<br>"+i+"That document has been written.<br>");
	}
}
else;
{
//alert("You entered:"+userInput+"..please enter a number between 1 and 10");
console.log("You entered:"+userInput+"..please enter a number between 1 and 10!");
}
window.onload=printHelloWorld;
}

