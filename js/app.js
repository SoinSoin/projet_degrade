
  console.log("hamburger");
//hamburger bouton
var forEach = function (t, o, r) {
    if ("[object Object]" === Object.prototype.toString.call(t))
        for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
    else
        for (var e = 0, l = t.length; l > e; e++) o.call(r, t[e], e, t)
};

var hamburgers = document.querySelectorAll(".hamburger");
if (hamburgers.length > 0) {
    forEach(hamburgers, function (hamburger) {
        hamburger.addEventListener("click", function () {
            this.classList.toggle("is-active");
        }, false);
    });
}
// animation de la toolbar
var myMenu = false;
function clickOnButton()
{   
    
    if (myMenu)
    {
    
        $("#menu").animate({left:'-18rem'},{ duration:400});
        $("input").prop('disabled', false);
        $(".filter").hide(); 
        myMenu = false;
    }
    else
    {   

        $("#menu").animate({left:'0rem'},{duration:400});
        $("input").prop('disabled', true);
        $(".filter").show();
        myMenu = true;
    }

}
//Le clique du bouton ainsi que du filtre il lie l'animation de la toolbar ainsi que celle du bouton haburger
var bouttonBurg =  $(".hamburger");
$(".hamburger, .filter").click(function() { 
    clickOnButton();
    if(myMenu == true && bouttonBurg.hasClass("is-active") ) {
        $("#macdo").addClass("is-active");
    } else if  (myMenu == false) {
        $("#macdo").removeClass("is-active");   
    }
 } ) ;


