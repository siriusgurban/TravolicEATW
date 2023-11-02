$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 350,
    nav: true,
    autoplay: true,
    dots: true,
    autoplayTimeout: 1000,

    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})




// function myDark() {

//     let ht = document.querySelector("#ht");

//     ht.classList.add("dark");
// }



function myDark() {

    !document.querySelector("#ht").classList.contains('dark') ? ht.classList.add('dark') : ht.classList.remove('dark');

    // if (
    //     localStorage.getItem('color-theme') === 'dark' ||
    //     (!('color-theme' in localStorage) &&
    //         window.matchMedia('(prefers-color-scheme: dark)').matches)
    // ) {
    //     document.documentElement.classList.add('dark');
    // } else {
    //     document.documentElement.classList.remove('dark');
    // }
}

myDark();