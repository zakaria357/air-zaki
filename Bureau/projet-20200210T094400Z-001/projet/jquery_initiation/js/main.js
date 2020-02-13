
$(document).ready(function(){
    $(".button1").click(function(){
        $("#titre").hide();
    });
    $(".button2").click(function(){
        $("#titre").show();
    });
    $(".button3").click(function(){
        $(".carre").css({"background-color": "green", "width": "75"}).hide(3000);
    });

    $(".conteneur").prepend("<p>Paragraphe ajouté avec prepend()</p>"); // Toujours en premier
    $(".conteneur").append("<ul><li>Element N°1</li><li>Element N°2</li></ul>"); // Après le premier

    $("#titre2").before("<p>Paragraphe ajouté avec before()</p>");
        $("<span>Span ajouté avec InsertAfter()</span>").insertAfter("#p1");


    $(".button4").click(function(){
        $("#div1").fadeToggle();
        // fadeIn du premier au dernier (avec un display none)
        // fadeOut du dernier au premier
        // fadeToggle Depop le premier et ainsi de suite
        // fadeTo ("slow", 0.15)
        $("#div2").fadeToggle("slow");
        $("#div3").fadeToggle(3000);
    });


    $("#button1").click(function(){
        //slideUp, slideDown, slideToggle
        $("#carre1").slideToggle();
    });


    $(".button5").click(function(){
        $(".para1").animate({
            left: '250px',
            opacity: '0.5',
            height: '150px',
            width: '150px',
        });
    });


    $(".button6").click(function(){
        $("#blabla").animate({height: '300px', opacity: '0.4',}, "slow");
        $("#blabla").animate({width: '300px', opacity: '0.8',}, "slow");
        $("#blabla").animate({height: '100px', opacity: '0.4',}, "slow");
        $("#blabla").animate({width: '100px', opacity: '0.8',}, "slow");
    })


    $(window).scroll(function(){
        if($(document).scrollTop() > 50){
            $(".azerty").addClass("tyuiop");
        } else {
            $(".azerty").removeClass("tyuiop");
        }
    });
});