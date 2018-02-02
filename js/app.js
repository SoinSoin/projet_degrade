
  console.log("hamburger");

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

var myButton = false;

function clickOnButton()
{
    if (myButton)
    {
        
        $("#menu").animate({left:'-15rem'},{ duration:400}) && $("input").prop('disabled', false) && $(".filter").hide() && $("#logo").animate({left:'6rem'},{ duration:400});
        myButton = false;
    }
    else
    {
        $("#menu").animate({left:'0rem'},{duration:400}) && $("input").prop('disabled', true) && $(".filter").show()&&  $("#logo").animate({left:'21rem'},{ duration:400});
        myButton = true;
    }

}



 
$("#burger").click(function() { clickOnButton(); } ) ;





$("#couleur").click(function(){
    $("#color").toggleClass("400");
});