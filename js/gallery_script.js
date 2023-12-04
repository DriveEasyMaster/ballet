

jQuery(document).ready(function() {  

    lightGallery(document.getElementById('lightgallery'), {



        //mode:'lg-slide',
        //mode:'lg-fade',
        //mode:'lg-zoom-in',//***/
        //mode:'lg-zoom-in-big',/***/
        //mode:'lg-zoom-out',/***/
        //mode:'lg-zoom-out-big',/***/
        //mode:'lg-zoom-out-in',/*****/
        //mode:'lg-zoom-in-out',/*****/
        //mode:'lg-soft-zoom',/****/
        //mode:'lg-scale-up',/***/
        //mode:'lg-slide-circular',/**********/
        //mode:'lg-slide-circular-vertical',/**********/
        //mode:'lg-slide-vertical',/****/
        //mode:'lg-slide-vertical-growth',/*******/
        //mode:'lg-slide-skew-only',/***********=*/
        //mode:'lg-slide-skew-only-rev',/***********=*/
        //mode:'lg-slide-skew-only-y',/***********=*/
        //mode:'lg-slide-skew-only-y-rev',/***********=*/
        //mode:'lg-slide-skew',/*****/
        //mode:'lg-slide-skew-rev',/***=**/
        //mode:'lg-slide-skew-cross',/********/
        //mode:'lg-slide-skew-cross-rev',/********/
        //mode:'lg-slide-skew-ver',/******/
        //mode:'lg-slide-skew-ver-rev',/****=*/
        //mode:'lg-slide-skew-ver-cross',/****=*/
        //mode:'lg-slide-skew-ver-cross-rev',/****/
        mode:'lg-lollipop',/***/
        //mode:'lg-lollipop-rev',/****/
        //mode:'lg-rotate',/****************/
        //mode:'lg-rotate-rev',/*********=*******/
        //mode:'lg-tube',/****************/


        speed: 2500,
        addClass: 'myclass',// <Буферизуем 2 два следующих и два предыдуших изображения, для более мягкой смены>
        preload:3,// <Буферизуем 2 два следующих и два предыдуших изображения, для более мягкой смены>
        thumbnail:true,
        animateThumb: false,
        showThumbByDefault: false,
        //cssEasing: 'cubic-bezier(0.420, 0.000, 0.580, 1.000)',//**Easing: анимация замедления */
        //cssEasing: 'cubic-bezier(0.680, -0.550, 0.265, 1.550),
        cssEasing: 'cubic-bezier(0.600, 0.300, 0.400, 1.000)',
        
       
        
        
       });

        







    });

0