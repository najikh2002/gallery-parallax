$(document).ready(function() {
    $(window).scroll(() => {
        var wScroll = $(this).scrollTop();

        console.log(wScroll)
    
        $('.title').css({
            'transform' : 'translate(0px,'+ wScroll/2 +'px)'
        });
    });


    $(window).scroll(function() {
      var windowHeight = $(window).height();
      var scrollTop = $(window).scrollTop();
  
      $('[class="content"]').each(function() {
        var targetTop = $(this).offset().top;
        var targetBottom = targetTop + $(this).outerHeight();
  
        if (targetTop < scrollTop + windowHeight && targetBottom > scrollTop) {
          var scrollPos = (scrollTop - targetTop) / (windowHeight + $(this).outerHeight()) * 100;
          
          if ($(window).width() > 1000) {
            scrollPos = scrollPos;
          }
          
          var translateY = scrollPos*4 ; // Menyesuaikan kecepatan pergerakan
          $(this).find('img').css('transform', 'translateY(' + translateY + 'px)');
        }
      });
    });
  });

gsap.fromTo('h1', {opacity: 2 }, {
    opacity: 0,
    scrollTrigger: {
        trigger: 'h1',
        start: 'top top',
        end: '350',
        scrub: 1,
    }
});

gsap.fromTo('.img-grid', {opacity: 0 }, {
    opacity: 1,
    duration: 5,
    delay: 2
});
  