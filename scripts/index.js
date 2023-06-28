
$(document).ready(function(){
    $('#slider').owlCarousel({

        loop: true,
        nav: true,
        margin: 40,
        dots: true,
        autoplay: false,
        navText: true,
        stopOnHover: true,
        smartSpeed: 1000, //Время движения слайда
        autoplayTimeout: 4000, //Время смены слайда
        pagination: true,
        responsiveClass: true,
        responsive: {
            1200: {
                items: 3
            }
        }
    });
});