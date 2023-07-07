$(document).ready(function() {
    $(window).scroll(() => {
        var wScroll = $(this).scrollTop();

        $('.title').css({
            'transform' : 'translate(0px,'+ wScroll/2 +'px)'
        });
    });

    $(window).scroll(function() {
        var windowHeight = $(window).height();
        var scrollTop = $(window).scrollTop();

        $('[id="target"]').each(function() {
            var targetTop = $(this).offset().top;
            var targetBottom = targetTop + $(this).outerHeight();

            if (targetTop < scrollTop + windowHeight && targetBottom > scrollTop) {
                var scrollPos = (scrollTop - targetTop) / ($(this).outerHeight() - windowHeight) * 100;
                
                if ($(window).width() > 1000) {
                    scrollPos = -scrollPos; // Mengubah scrollPos menjadi negatif
                }
                
                var backgroundPos = "center " + scrollPos + "px";
                $(this).css("background-position", backgroundPos);
            }
        });
    });
});



gsap.fromTo('h1', {opacity: 2 }, {
    opacity: 0,
    scrollTrigger: {
        trigger: 'h1',
        start: 'top top',
        end: '420',
        scrub: 1,
    }
});

gsap.fromTo('.img-grid', {opacity: 0 }, {
    opacity: 1,
    duration: 5,
    delay: 2
});
