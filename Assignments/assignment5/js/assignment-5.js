var i = 0; /* it will be adding the enter score*/
var total= 0; /* this one will be the acomulating total of the enter score*/
var number; /* it will be the prompt to enter the score*/



do {
    number = parseInt(prompt("Enter test score or enter 999 to end" + "counter:"+
    i +"total:" + total));
    total += number; /* do is for make the sum of the score adding the enter number */
    i++;
}
  while (number != 999)/* for stop put 999 so number have to be 999 and then it will take the total and divide for the i (count)*/
  var average = (total - 999)/(i -1);/* i - 1 is for take the last count when you enter 999*/
  alert("Kyrrah the average score is:" +"\n" + average);




