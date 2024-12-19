$(document).ready(function() {
    // Advanced Smooth Scrolling
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 80
            }, 800);
        }
    });

    // Scroll-triggered Animations
    $(window).scroll(function() {
        $('.job, .degree, .skill').each(function() {
            var bottomOfElement = $(this).offset().top + $(this).outerHeight();
            var bottomOfScreen = $(window).scrollTop() + $(window).height();
            var topOfElement = $(this).offset().top;

            if ((bottomOfScreen > topOfElement) && (bottomOfScreen < bottomOfElement)) {
                $(this).addClass('fade-in');
            }
        });
    });

    // Typed Introduction Effect
    if($.fn.typed) {
        $('.typed-text').typed({
            strings: [
                "Software Engineer", 
                "Web Developer", 
                "Tech Enthusiast"
            ],
            typeSpeed: 50,
            backDelay: 1500,
            loop: true
        });
    }

    // Skills Progress Visualization
    $('.skill').hover(
        function() {
            $(this).animate({
                backgroundColor: '#2ecc71'
            }, 300);
        },
        function() {
            $(this).animate({
                backgroundColor: '#3498db'
            }, 300);
        }
    );

    // Dark Mode Toggle (Optional Advanced Feature)
    $('#dark-mode-toggle').on('click', function() {
        $('body').toggleClass('dark-mode');
        localStorage.setItem('dark-mode', $('body').hasClass('dark-mode'));
    });

    // Load Dark Mode Preference
    if(localStorage.getItem('dark-mode') === 'true') {
        $('body').addClass('dark-mode');
    }
});