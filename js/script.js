function signup() {
    window.open("https://app.aigentcorporation.com/signup");
}

function discord() {
    window.open("https://discord.com/invite/E3qBKHpt8C");
}

function fb() {
    window.open("https://www.facebook.com/Aigent.corp");
}

function tw() {
    window.open("https://twitter.com/Aigent_corp");
}

function line() {
    window.open("https://page.line.me/aigent");
}

function inst() {
    window.open("https://www.instagram.com/aigentcorporation/");
}

function signin() {
    window.open("https://app.aigentcorporation.com/signin");
}

function Pivacy() {
    window.open("https://app.aigentcorporation.com/privacy");
}

function Terms() {
    window.open("https://app.aigentcorporation.com/general");
}

function video() {
    const videos = document.getElementById("videos");
    videos.style.display = "flex";
}

function closeVideo() {
    const videos = document.getElementById("videos");
    videos.style.display = "none";
}

function menubar() {
    const menubar = document.getElementById("menubar");
    if (menubar.style.display == "flex") {
        menubar.style.display = "none";
    } else {
        menubar.style.display = "flex";
    }
}

function faq_first() {
    const faqfirst = document.getElementById("faq_one");
    const faq2 = document.getElementById("faq_two");
    const faq3 = document.getElementById("faq_three");

    faq2.style.display = "none";
    faqfirst.style.display = "block";
    faq3.style.display = "none";
}

faq_first();

function faq_2() {
    const faqfirst = document.getElementById("faq_one");
    const faq2 = document.getElementById("faq_two");
    const faq3 = document.getElementById("faq_three");

    faq2.style.display = "block";
    faqfirst.style.display = "none";
    faq3.style.display = "none";
}

function faq_3() {
    const faqfirst = document.getElementById("faq_one");
    const faq2 = document.getElementById("faq_two");
    const faq3 = document.getElementById("faq_three");
    
    faq2.style.display = "none";
    faqfirst.style.display = "none";
    faq3.style.display = "block";
}

function c_normal() {
    const normal = document.getElementById("normal");
    const rare = document.getElementById("rare");

    normal.style.display = "block";
    rare.style.display = "none";
}

c_normal();

function c_rare() {
    const normal = document.getElementById("normal");
    const rare = document.getElementById("rare");

    normal.style.display = "none";
    rare.style.display = "block";
}

window.onclick = function(event) {
    if (!event.target.matches('.menu-icon')) {
        var dropdowns = document.getElementsByClassName("menubar");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display == "flex") {
                openDropdown.style.display = "none";
            }
        }
    }
}

function buynft() {
    const buypage = document.getElementById("buypage");


    if (buypage.style.display == "flex") {
        buypage.style.display = "none";
    } else {
        buypage.style.display = "flex";
    }
}

function medium() {
    window.open("https://medium.com/@aigent_corp");
}
