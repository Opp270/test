var x = document.getElementById("x1x");
var y = document.getElementById("y2y");
var z = document.getElementById("z3z");
var i;
var btn = document.getElementsByName("btn");

function xxx(){

y.checked = false;
z.checked = false;
document.getElementById("header").style.background = '#0862ac';
document.getElementById('sosnsn').src = 'sosn.svg';



    
    for (i = 0; i < btn.length; i++) {
      btn[i].style.background = "rgb(65, 179, 231)";
      btn[i].style.border = '3px solid rgb(53, 32, 172)';
    }
  

}

function yyy(){

x.checked = false;
z.checked = false;
document.getElementById("header").style.background = '#2d4d09';
document.getElementById('sosnsn').src = 'sosn2.svg';



    
    for (i = 0; i < btn.length; i++) {
      btn[i].style.background = "rgb(65, 231, 93)";
      btn[i].style.border = '3px solid rgb(55, 124, 37)';
    }
 

}

function zzz(){

x.checked = false;
y.checked = false;
document.getElementById("header").style.background = '#a80680';
document.getElementById('sosnsn').src = 'sosn3.svg';


    
    for (i = 0; i < btn.length; i++) {
      btn[i].style.background = "rgb(235, 53, 129)";
      btn[i].style.border = '3px solid rgb(151, 28, 79)';
    }
  

}
 
function sas(){document.getElementById("thememassge").style.display = 'block';}


function kk1(){
    document.getElementById('img1').src = 'blue.svg';
    
}
function kk2(){
    document.getElementById('img2').src = 'blue.svg';
    
}
function kk3(){
    document.getElementById('img3').src = 'blue.svg';
    
}

var ss = document.getElementById('thememassge');

window.onclick = function(event) {
    if (event.target == ss) {
      ss.style.display = "none";
    }
  }

  //here some code//

  $(document).ready(function(){
    // Add smooth scrolling to all links
    $("#begin").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });

  //here some code//


  function ezy(){
    var dod = 3
    var sos = 7

    alert(dod * sos);
    
    }
  
  