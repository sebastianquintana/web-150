// the first one i will use is the accordin to add and explain all the 
//flavors of the product
$( function() {
  $( "#accordion" ).accordion();
} );

//the checkbox i gonna used to the preorder.

$( function() {
  $( "input" ).checkboxradio({
    icon: false
  });
} );

//add the date they want to get the alfajores delivery mister Kyrrah
$( function() {
  $( "#datepicker" ).datepicker();
} );

//add autofilling
$( function() {
  var availableTags = [
    "@hotmail.com",
    "@gmail.com",
    "@outlook.com",
    "@tomdouglas.com"
  ];
  $( "#tags" ).autocomplete({
    source: availableTags
  });
} );