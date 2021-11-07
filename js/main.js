var scrollpos = window.scrollY;
var header = document.getElementById("headerMenu");

function add_class_on_scroll() {
    header.classList.add("navbar__scroll");
    document.getElementById("logo").style.display = "none";
}

function remove_class_on_scroll() {
    header.classList.remove("navbar__scroll");
    document.getElementById("logo").style.display = "block";
}

window.addEventListener('scroll', function(){ 
    scrollpos = window.scrollY;
    
    if(scrollpos >= 400){
        add_class_on_scroll();
    }
    else {
        remove_class_on_scroll();
    }
    // console.log(scrollpos);
});