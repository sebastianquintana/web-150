//creating the template 
function alfajores(flavor, order_limit, order_sold)  {
    this.flavor= flavor,
    this.order_limit=order_limit,
    this.order_sold=order_sold,
    this.checkAvailability = function() {
        return this.order_limit - this.order_sold;
    };
}

//creating 4 different alfajores objects
var classicAlfajores = new alfajores('classic', 40, 17);
var coffeAlfajores = new alfajores('coffe', 50 , 24);
var almondAlfajores = new alfajores('almond', 25 , 11);
var orangeAlfajores = new alfajores('orange',30,8);


// Update the HTML for the page
var details1 = classicAlfajores.flavor + '  Alfajores Remaining:';
     details1 += classicAlfajores.checkAvailability();
var elalfajor1 = document.getElementById('flavor_1');
elalfajor1.textContent = details1;

var details2 = coffeAlfajores.flavor + '   Alfajores Remaining:';
    details2 += coffeAlfajores.checkAvailability();
var elAlfajor2 = document.getElementById('flavor_2');
elAlfajor2.textContent = details2;

var details3 = almondAlfajores.flavor + '  Alfajores Remaining:';
     details3 += almondAlfajores.checkAvailability();
var elAlfajor3 = document.getElementById('flavor_3');
elAlfajor3.textContent = details3;

var details4 = orangeAlfajores.flavor + '  Alfajores Remaining:' ; 
    details4 += orangeAlfajores.checkAvailability();
var elAlfajor4 = document.getElementById('flavor_4');
elAlfajor4.textContent = details4;

  


