jQuery(document).ready(($) => {
    //loading gif
    $("#loading").fadeOut(500, repea());
    $(document).ready(() => {
        $("#loading").hide(500);
        console.log("ready!")
    });

    function repea() {
        $("#loading").fadeTo(500, 0.7).delay(500).fadeTo(500.0);
    }
    //منوی بالای سایت
    $("#top-menu").mouseenter(() => {
        $("#top-menu").css({ "background-color": " rgba(50, 130, 184, 1)" });
    });

    $("#top-menu").mouseleave(() => {
        $("#top-menu").css({ "background-color": " rgba(50, 130, 184, 0.6)" });

    });
    //center-box
    let i = 0;
    $("#send-down-btn").click(() => {
        i++
        if (i % 2) {
            $("#send-down-btn-img").attr("src", "./icons/up-arrow.png");
        } else if (i + 1 % 2) {
            $("#send-down-btn-img").attr("src", "./icons/down-arrow.png");
        }
        $("#main-box").slideToggle(900);
        window.setTimeout(scrollFunc, 1000);
    });

    function scrollFunc() {
        window.scrollTo(0, 650);
    }
    //smoth scrool
    $('#smothScroolToTop').on('click', function(e) {

        if (this.hash !== "") {
            e.preventDefault();

            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, () => {
                window.location.hash = hash;
            });
        }
    })


});

//اسلایدر بالای سایت
var slide = document.getElementsByClassName('slide');
var dot = document.getElementsByClassName('dot');
var slider = document.querySelector('.slider');
var prev = document.querySelector('.prev');
var next = document.querySelector('.next');
var n = 0;
var i;


function disnon() {
    for (i = 0; i < slide.length; i++) {
        slide[i].getElementsByClassName.display = 'none';
    }
}

function showSlides() {
    slide[n].classList.add('active');
    dot[n].classList.add('active');

}

function no_active() {
    for (i = 0; i < dot.length; i++) {
        dot[i].classList.remove('active');
        slide[i].classList.remove('active');
    }
}

function currentSlide(x) {
    disnon();
    no_active();
    slide[x].classList.add('active');
    dot[x].classList.add('active');
}


$(".next").click((e) => {
    e.preventDefault();
    n++;
    if (n > slide.length - 1) {
        n = 0;
    };
    disnon();
    no_active();
    showSlides();
});
$(".prev").click((e) => {
    e.preventDefault();
    n--;
    if (n < 0) {
        n = slide.length - 1;
    };
    disnon();
    no_active();
    showSlides();
});

function autoSlider() {
    return new Promise(() => {
        f = setInterval(() => {
            n++;
            if (n > slide.length - 1) {
                n = 0;
            };
            disnon();
            no_active();
            showSlides()
            console.log("auto work")
        }, 4000);
    }).then(() => { autoSlider() })

}
autoSlider();
slider.addEventListener('mouseenter', () => { clearTimeout(f) });
slider.addEventListener('mouseleave', () => { autoSlider() });