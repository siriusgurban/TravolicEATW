$('.owl-carousel').owlCarousel({
    loop:true,
    margin:350,
    nav:true,
    autoplay:true,
    dots: true,
    autoplayTimeout: 1000,
    
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})