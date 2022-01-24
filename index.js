$(function(){
    $('.banner-section__slider').slick({
        dots: true,
        prevArrow: '<button class="arrow__left left"></button>',
        nextArrow: '<button class="arrow__right right"></button>'
    });

    $('.tab').on('click', function(e){
        e.preventDefault();

        $('.tab').removeClass('tab-active');
        $('.tabs-content').removeClass('tabs-content-active');

        $(this).addClass('tab-active');
        $($(this).attr('href')).addClass('tabs-content-active');
    });

    $('.product-item__favorite').on('click', function() {
        $(this).toggleClass('product-item__favorite-active')
    });

    $('.product-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button class="arrow__left__products  left"></button>',
        nextArrow: '<button class="arrow__right__produsts right"></button>'
    })
});