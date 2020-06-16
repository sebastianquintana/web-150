//load the page 

window.onload = function() {
   function calculateMilesPerGallon(){
        var x = parseInt(document.getElementById('miles').value);//get both imput value
        var y = parseInt(document.getElementById('gallons').value);
        var z =  x / y ;

        document.querySelector('#mpg').disabled = true;

        document.querySelector('#miles').value = x;
        document.querySelector('#gallons').value = y;
        document.querySelector('#mpg').value = z;
}

    function validateForm(){
        var x = document.getElementById('miles').value;
        var y = document.getElementById('gallons').value;//get the input value

        if (isNaN(x)||isNaN(y)){
            alert("both enter must be numeric")//looking if they enter a not-a number alert
            return false;
        }
    }

    var clickButton = document.querySelector('#button');
    clickButton.addEventListener('click', calculateMilesPerGallon,false);//both for get the click on the input area !
    clickButton.addEventListener('click', validateForm,false);

    document.querySelector('#mpg').disabled = true;
    
};
