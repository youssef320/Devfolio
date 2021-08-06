

$(document).ready(function () {
    $("#loading").fadeOut(1000);

    $("body").css("overflow", "auto");

    let aboutOffset = $("#about").offset().top;


    particlesJS.load('particles-js', 'assets/particles.json', function() {
        console.log('callback - particles.js config loaded');
      });


    $(window).scroll(function () {

        let wScroll = $(window).scrollTop();


        if (wScroll > aboutOffset - 100) {

            $(".navbar").css("backgroundColor", "rgba(0,0,0,0.5)");
            $(".btnUp").fadeIn(500);
        }
        else {
            $(".navbar").css("backgroundColor", "transparent");
            $(".btnUp").fadeOut(500);
        }

    });


    $(".btnUp").click(function () {
        $("html,body").animate({ scrollTop: 0 }, 2000);
    });

    $(".navbar a").click(function (e) {

        let aHref = $(e.target).attr("href");

        let scetionOffset = $(aHref).offset().top;

        $("html,body").animate({ scrollTop: scetionOffset }, 1000);

    })

    let boxColor = $(".bgColor");

    boxColor.eq(0).css("backgroundColor", "teal");
    boxColor.eq(1).css("backgroundColor", "#09c");
    boxColor.eq(2).css("backgroundColor", "orange");
    boxColor.eq(3).css("backgroundColor", "aque");
    boxColor.eq(4).css("backgroundColor", "tomato");
    boxColor.eq(5).css("backgroundColor", "lightgreen");

    let colorBoxWidth = $(".color-box").innerWidth();

    $("#slideBar").css("left", `-${colorBoxWidth}`)

    $("#iconToggle").click(function () {

        if ($("#slideBar").css("left") == '0px') {
            $("#slideBar").animate({ left: `-${colorBoxWidth}` }, 1000);
        }
        else {
            $("#slideBar").animate({ left: `0px` }, 1000)

        }


    });


    boxColor.click(function (e) {

        let colorSrc = $(e.target).css("backgroundColor");

        $("p").css("color", colorSrc)

    });


});

