function openNav() {
    $('#header__banner, #header__banner--mobile').css('filter', 'none');
    const nav = document.getElementById('header__navmenulist');
    if (nav.style.display === 'block') {
        document.getElementsByTagName('body')[0].style.overflow = "auto";
        document.getElementById('header__banner--mobile').style.height = "";
        document.getElementById('header__banner--mobile').style.backgroundColor = 'rgba(0,0,0,0)';
        document.getElementById('header__navmenuimg').style.display = 'none';
        nav.style.display = 'none';
    } else {
        document.getElementsByTagName('body')[0].style.overflow = "hidden";
        document.getElementById('header__banner--mobile').style.height = "100%";
        document.getElementById('header__banner--mobile').style.backgroundColor = 'rgb(255, 255, 255)';
        document.getElementById('header__navmenuimg').style.display = 'block';
        nav.style.display = 'block';
    }
}

$(document).ready(function () {
    $(window).on("scroll", function () {
        $('#header__banner, #header__banner--mobile').css('filter', 'none');
        if ($(window).scrollTop() > 40) {
            if (document.getElementById('header__navmenulist').style.display === 'block') {
                $('#header__banner, #header__banner--mobile').css('background-color', 'rgb(255, 255, 255)');
            } else {
                $('#header__banner, #header__banner--mobile').css('background-color', 'rgb(219, 219, 219)');
            }
            
            $('#header__banner, #header__banner--mobile').css('filter', 'drop-shadow(rgba(0, 0, 0, 1) 0px 1px 3px)');
        } else {
            if (document.getElementById('header__navmenulist').style.display === 'block') {
                $('#header__banner, #header__banner--mobile').css('background-color', 'rgb(255, 255, 255)');
            } else {
                $('#header__banner, #header__banner--mobile').css('background-color', 'rgba(0,0,0,0)');
            }

            $('#header__banner, #header__banner--mobile').css('filter', 'none');
        }
    });

    $('body').prepend('<a href="#" class="body__top">Back to Top</a>');

    if (window.location.pathname.indexOf("services") === -1) {
        $('body').prepend('<a href="mailto:info@labrega.org?subject=Labrega Digital Services Inquiry" class="body__booknow">Talk to Us</a>');
    }
    
    $(window).scroll(function () {
        if ($(window).scrollTop() > 400) {
            $('a.body__top').fadeIn('slow');
            $('a.body__booknow').fadeIn('slow');
        } else {
            $('a.body__top').fadeOut('slow');
            $('a.body__booknow').fadeOut('slow');
        }
    });

    $('a.body__top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });
});

$(window).on('load', function() {
    $('.preloader').fadeOut();
    $('.preloader .line').fadeOut();
    $('.preloader').remove();
    $('.preloader .line').remove();
    $('.text-animation h2').css('display', 'block');
})