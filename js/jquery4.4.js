$("#div1, #div2, #div3").css("display", "none");

$(() => {
    $("#mostrar").click(() => {
        $("#div1").fadeIn(1500);
        $("#div2").fadeIn(2500);
        $("#div3").fadeIn(4000);
    })
});

$(() => {
    $("#ocultar").click(() => {
        $("#div1").fadeOut(5000);
        $("#div2").fadeOut(2000);
        $("#div3").fadeOut(3500);
    })
});

$(() => {
    $("#toggle").click(() => {
        $("#div1").fadeToggle(1000);
        $("#div2").fadeToggle(2000);
        $("#div3").fadeToggle(3000);
    })
});

// Hasta aquí llegan los ejercicios 1-5 de la tarea.

$(() => {
    $("#opacidad").click(() => {
        $("#div1").fadeTo(1000, 0.1);
        $("#div2").fadeTo(2000, 0.5);
        $("#div3").fadeTo(3000, 0.8);
    })
});

$("#laconcha, #igueldo, #palacio").css({"opacity": "0.5"});

$(() => {
    $("#laconcha").mouseover(() => {
        $("#laconcha").css({"opacity": "1"});
    })
    $("#laconcha").mouseleave(() => {
        $("#laconcha").css({"opacity": "0.5"});
    })
});

$(() => {
    $("#igueldo").mouseover(() => {
        $("#igueldo").css({"opacity": "1"});
    })
    $("#igueldo").mouseleave(() => {
        $("#igueldo").css({"opacity": "0.5"});
    })
});

$(() => {
    $("#palacio").mouseover(() => {
        $("#palacio").css({"opacity": "1"});
    })
    $("#palacio").mouseleave(() => {
        $("#palacio").css({"opacity": "0.5"});
    })
});

// Hasta aquí llegan los ejercicios 6 y 7 de la tarea.

$("#title1, #title2, #title3").css("display", "block");

$("#aurora, #francia, #vegas, #p1, #p2, #p3").css("display", "none");

$(() => {
    $("#title1").click(() => {
        $("#aurora, #p1").slideToggle(1000);
        $("#title1").toggleClass("color1");
    })
});

$(() => {
    $("#title2").click(() => {
        $("#francia, #p2").slideToggle(1000);
        $("#title2").toggleClass("color2");
    })
});

$(() => {
    $("#title3").click(() => {
        $("#vegas, #p3").slideToggle(1000);
        $("#title3").toggleClass("color3");
    })
});

$(() => {
    $("#title1").click(() => {
        $("#francia, #vegas, #p2, #p3").slideUp(1000);
    })
});

$(() => {
    $("#title2").click(() => {
        $("#aurora, #vegas, #p1, #p3").slideUp(1000);
    })
});

$(() => {
    $("#title3").click(() => {
        $("#aurora, #francia, #p1, #p2").slideUp(1000);
    })
});

// Hasta aquí llegan los ejercicios 8 y 9 de la tarea

$("#tokio, #p4").css("display", "none");

$(() => {
    $("#title4").click(() => {
        $("#tokio, #p4").slideDown(1000);
        setTimeout("$(`#tokio, #p4`).slideUp(1000)", 3000);
    })
});

// Hasta aquí llega el ejercicio 10 de la tarea

$(() => {
    $("#div4").click(() => {
        $("#div4").animate({left: '800px'});
        setTimeout("$(`#div4`).animate({left: '0px'})", 1000);
    })
});

$(() => {
    $("#animacion").click(() => {
        $("#div4").animate({left: '300px', opacity: 0.5, width: '200px', height: '200px'});
    })
});

$(() => {
    $("#animacion2").click(() => {
        $("#div5").animate({left: '30px', width: '120px', height: '120px', opacity: 0.1});
    })
});

$(() => {
    $("#animacion3").click(() => {
        $("#div5").animate({left: '0px', width: '100px', height: '100px', opacity: 1});
    })
});

$(() => {
    $("#titulo").animate({width: '100%', opacity: 1,'font-size': '2em'});
});

let visible = false;

$(() => {
    $("#icono").click(() => {
        if(visible){
            $("#lista").animate({left: '-200px'});
            visible = false;
        }else{
            $("#lista").animate({left: '0px'});
            visible = true;
        }
    })
});