window.onscroll = function() {scrollFunction()};
window.scroll({
    behavior: 'smooth' 
    });

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("return-to-top").style.display = "block";
    } else {
        document.getElementById("return-to-top").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera 
    document.documentElement.scrollTop = 0; // For IE and Firefox
}