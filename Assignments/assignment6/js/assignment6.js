
/* I'm gonna take the first element of the li and give a new css value call cool using the tagname from css*/
var elements= document.getElementsByTagName('li');
if (elements.length >0){
  var el = elements[0];
  el.className='classic';
}

/* it will change the classname alfajor for orange throw id value */
{
 var ell = document.getElementById('Orange');
 ell.className = 'orange';
}
/* this one is changing using the css selectors*/
{
var el = document.querySelector('li.alfajor');
el.className = 'coffe';

var els = document.querySelectorAll('li.alfajor');
els[3].className = 'coffe';

}
/*changing the text throw a node but kyrrah i dont know why it doesnt want to take it */
{
  var itemFour = document.getElementById('salty_caramel');
  var elText = itemFour.firstChild.nodeValue;
elText = elText.replace('salty caramel' , 'salted caramel');
  itemFour.firstChild.nodeValue = elText;
}
