(function ( $ )
{
    if($("body.page-horoskopy").length > 0)
    {
        var horoscopes = $('.wrapper-horoscope-daily .field-horoscope-item, .wrapper-horoscope-weekly .field-horoscope-item, .wrapper-horoscope-monthly .field-horoscope-item');
        var horoscope_wrapper = $('.wrapper-horoscope-daily, .wrapper-horoscope-weekly, .wrapper-horoscope-monthly');
        var period_a = $('#horoscope-period li a');
        var sign_a = $('#horoscope-signs li a');
        var hash = window.location.hash;
        horoscopes.css('display','none');
        horoscope_wrapper.css('display','none');

        period_a.click(function()
        {
            var period = $(this).closest('li').attr('class');
            $('#horoscope-signs ul').removeClass().addClass(period);
            period_a.removeClass();
            $(this).addClass('active');
            if (period == 'monthly')
            {
                var period_el = $('.wrapper-horoscope-monthly');
            }
            else if (period == 'weekly')
            {
                var period_el = $('.wrapper-horoscope-weekly');
            }
            else
            {
                var period_el = $('.wrapper-horoscope-daily');
            }
            horoscope_wrapper.css('display','none');
            period_el.css('display','block');
            $('#horoscope-signs li a.active').trigger('click');
            return false;
        });

        sign_a.click(function()
        {
            var sign = $(this).closest('li').attr('class');
            var period = $(this).closest('ul').attr('class');
            var sign_ico = $(this).find('.ico').html();
            var sign_text = $(this).find('.sign').html();
            var sign_el =  $('.wrapper-horoscope-daily .sign-'+sign+', .wrapper-horoscope-weekly .field-horoscope-item.sign-'+sign+', .wrapper-horoscope-monthly .field-horoscope-item.sign-'+sign);
            sign_a.removeClass();
            $(this).addClass('active');
            if (!period) {
                period = "daily";
                $('#horoscope-signs ul').addClass(period);
                $('.wrapper-horoscope-daily').css('display','block');
            }
            horoscopes.css('display','none');
            $('#horoscope-sign-ico').html(sign_ico);
            $('#horoscope-sign-text').html(sign_text);
            sign_el.css('display','block');
            if ($('#horoscope-period').offset().top < $(window).scrollTop()) {
                $('html, body').animate({
                    scrollTop: ($('#horoscope-period').offset().top - 120)
                },500);
            }
            window.location.hash = '#'+sign+'-'+period;
            return false;
        });

        if (hash) {
            hash_sign = hash.substr(1, hash.indexOf('-')-1);
            hash_period = hash.substr(hash.indexOf('-')+1, hash.lenght);
            $('#horoscope-period li.'+hash_period+' a').trigger('click');
            $('#horoscope-signs li.'+hash_sign+' a').trigger('click');
        } else {
            $('#horoscope-signs li.aries a').addClass('active');
        }

    }
}( jQuery ));