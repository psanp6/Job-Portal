
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
//smooth scroll
var navbarHeight= $(".navbar").outerHeight();
$(".navbar-menu a").click(function(e){
    var targetHref= $(this).attr("href");
    $("html,body").animate({
        scrollTop: $(targetHref).offset().top = navbarHeight
    },1000)
    e.preventDefault();
});

//navbar mobile version
const mobile=document.querySelector(".menu-toggle");
const mobileLink= document.querySelector(".navbar-menu");

mobile.addEventListener("click",function(){
    mobile.classList.toggle("is-active");
    mobileLink.classList.toggle("active");
})

mobileLink.addEventListener("click",function(){
    const menuBars= document.querySelector("is-active");
    if(window.innerWidth <=768 && menuBars){
        mobile.classList.toggle("is-active");
        mobileLink.classList.remove("active");
    }
})


//swiper
var swiper= new Swiper(".mySwiper",
{
    loop: true,
    autoplay: {
        display: 2500,
        disableOnInteraction: false,

    },
    slidesPerView: 1,
    spaceBetween:10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints:{
        640:{
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768:{
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1024:{
            slidesPerView: 3,
            spaceBetween: 50,
        },
    }
})