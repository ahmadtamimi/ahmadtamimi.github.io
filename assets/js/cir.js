$(document).ready(function ($) {
    function animateElements() {
        $('.progressbar_').each(function () {
            var elementPos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            var percent = $(this).find('.circle_').attr('data-percent');
            var animate = $(this).data('animate');
            if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
                $(this).data('animate', true);
                $(this).find('.circle_').circleProgress({
                    startAngle: -Math.PI / 2,
                    value: percent / 100,
                    size : 400,
                    thickness: 15,
                    fill: {
                        color: '#663399'
                    }
                }).on('circle-animation-progress', function (event, progress, stepValue) {
                    $(this).find('strong').text((stepValue*100).toFixed(0) + "%");
                }).stop();
            }
        });
    }

    animateElements();
    $(window).scroll(animateElements);
});
		
		

	}); //end document ready function