$(function(){
    $('.banner-section__slider').slick({
        dots: true,
        prevArrow: '<button class="arrow__left left"></button>',
        nextArrow: '<button class="arrow__right right"></button>'
    });

    $('.search__tabs-item').on('click', function(e){
        e.preventDefault();

        $('.search__tabs-item').removeClass('search__tabs-item-active');
        $('.search__content-item').removeClass('search__content-item-active');

        $(this).addClass('search__tabs-item-active');
        $($(this).attr('href')).addClass('search__content-item-active');
    });
});