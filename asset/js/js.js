

const bar = document.querySelector(".bar");
const navbar = document.querySelector('.list');
const navbarli = document.querySelectorAll(".list li");

bar.addEventListener("click", () => {
    bar.classList.toggle("active");
    navbar.classList.toggle('active');
});

let btn = document.querySelector(".bar");
let icon = btn.querySelector(".fa-bars");
btn.onclick = function () {
    if (icon.classList.contains("fa-bars")) {
        icon.classList.replace("fa-bars", "fa-times");
    } else {
        icon.classList.replace("fa-times", "fa-bars");
    }
}
// hamburger button end


window.addEventListener('scroll', function () {
    // console.log("test");
    let TopScrolled = window.pageYOffset || document.documentElement.scrollTop;
    // console.log(TopScrolled);
    if (TopScrolled > 1) {
        document.querySelector(".list").classList.remove("active");
        icon.classList.replace("fa-times", "fa-bars");
    } else {
        // document.getElementById("main-header").classList.add("fixedmenu");
    }
});

// two slider start

$(document).ready(function () {
    $('.slider').slick({
        autoplay: true, // Enable autoplay
        autoplaySpeed: 2000, // Set autoplay speed in milliseconds (e.g., 2000 = 2 seconds)
        dots: true, // Show navigation dots
        arrows: true, // Show previous/next arrows
        infinite: true, // Enable infinite loop
        speed: 500, // Set transition speed in milliseconds
        slidesToShow: 3, // Number of slides to show at a time
        slidesToScroll: 1, // Number of slides to scroll at a time
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            }
        ]
    });
});





