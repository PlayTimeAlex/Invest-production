(function($) {
    $(document).ready(function(){
        $('.js-openmenu').on('click', function(){
            $menu = $('.b-mtopnav');
            if($menu.hasClass('open')){
                $menu.slideUp(150, function(){
                    $menu.removeClass('open');
                    $('.b-header__logo').removeClass('b-header__logo_black');
                    $('.b-header__top').removeClass('b-header__top_white');
                });
                return false;
            }
            $menu.slideDown(150, function(){
                $menu.addClass('open');
                $('.b-header__logo').addClass('b-header__logo_black');
                $('.b-header__top').addClass('b-header__top_white');
            });
            return false;
        });

        $('.b-post__rmb').click(function(){
            $(this).css('display', 'none');
            $(this).closest('.b-post__rmbw').find('.b-post__rm').css('display', 'block');
            return false;
        });

        $('.b-filter__list').click(function(){
            $list = $('ul', this);
            if($list.hasClass('open')){
                $list.slideUp(150, function(){
                    $list.removeClass('open');
                });
                return false;
            }
            $list.slideDown(150, function(){
                $list.addClass('open');
            });
            return false;
        });

        $('.b-testimonial__rm').on('click', function(){
            var $parent = $(this).closest('.b-testimonial');
            $parent.find('.b-testimonial__content-hide').css('display', 'block');
            $(this).css('display', 'none');
            return false;
        });

        $('.b-header__video').on('click', function(){
            if($(this).hasClass('b-header__video_playing'))
                return false;
            $(this).addClass('b-header__video_playing');
            $(this).html(mainVideo);
            return false;
        });
		$('.b-header__video').click();
		
		
        $('.colorbox-adreview').colorbox({
            inline: true,
            maxWidth: "100%",
            width: 260
        });
    });

    $(window).load(function() {
        $('.b-carusel').flexslider({
            animation: "slide",
            animationLoop: false,
            itemWidth: 255,
            itemMargin: 0,
            controlNav: false
        });
    });
}(jQuery));