$(function(){
    $('.banner-section__slider').slick({
        dots: true,
        prevArrow: '<button class="arrow__left left"></button>',
        nextArrow: '<button class="arrow__right right"></button>'
    });

    $('.tab').on('click', function(e){
        e.preventDefault();

        $($(this).siblings()).removeClass('tab-active');
        $($(this).parent().siblings().find('div')).removeClass('tabs-content-active');

        $(this).addClass('tab-active');
        $($(this).attr('href')).addClass('tabs-content-active');
    });

    $('.product-item__favorite').on('click', function() {
        $(this).toggleClass('product-item__favorite-active')
    });

    $('.product-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button class="arrow__left__products  left__products"></button>',
        nextArrow: '<button class="arrow__right__produsts right"></button>'
    }); 

    $('.filter-style').styler();

    $('.filter__item-drop').on('click', function() {
        $(this).toggleClass('filter__item-drop--active');
        $(this).next().slideToggle(200);
    });
    $('.filter__extra').on('click', function() {
        $(this).toggleClass('filter__item-drop--active__more');
        $(this).next().slideToggle(200);
    });

    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 100000,
        max: 1000000,
    });

    $('.catalog__filters-btngrid').on('click', function() {
        $(this).addClass('catalog__filter-button--active');
        $('.catalog__filters-btnline').removeClass('catalog__filter-button--active');
        $('.product-item__wraper').removeClass('product-item__wraper-list');
    });

    $('.catalog__filters-btnline').on('click', function() {
        $(this).addClass('catalog__filter-button--active');
        $('.catalog__filters-btngrid').removeClass('catalog__filter-button--active');
        $('.product-item__wraper').addClass('product-item__wraper-list');
    });

});