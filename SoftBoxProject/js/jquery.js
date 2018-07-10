var PageOverlay = document.getElementById('overlay');
window.addEventListener('load',function(){
  PageOverlay.style.display="none";
})



$(window).scroll(function(){
if($(document).scrollTop() > 100){
$('nav').addClass('shrink');
$('.navbar-brand > img').width(38).height(40);
$('#navi-button').css({'padding-top':'8px','padding-bottom':'8px'});
$('.topUp').css('display','block');
}
else{
  $('nav').removeClass('shrink');
  $('.navbar-brand > img').width(45).height(50);
  $('#navi-button').css({'padding-top':'10px','padding-bottom':'10px'});
  $('.topUp').css('display','none');
  }
});

$(document).ready(function(){
 
    $(".owl-carousel").each(function() {
        var $this = $(this),
            $items = ($this.data('items')) ? $this.data('items') : 1,
            $loop = ($this.data('loop')) ? $this.data('loop') : true,
            $navdots = ($this.data('nav-dots')) ? $this.data('nav-dots') : false,
            $navarrow = ($this.data('nav-arrow')) ? $this.data('nav-arrow') : true,
            $autoplay = ($this.attr('data-autoplay')) ? $this.data('autoplay') : false,
            $space = ($this.attr('data-space')) ? $this.data('space') : 15;
        $(this).owlCarousel({
            loop: $loop,
            items: $items,
            responsive: {
                0: { items: $this.data('xx-items') ? $this.data('xx-items') : 1 },
                600: { items: $this.data('xs-items') ? $this.data('xs-items') : 1 },
                767: { items: $this.data('sm-items') ? $this.data('sm-items') : 2 },
                992: { items: $this.data('md-items') ? $this.data('md-items') : 2 },
                1190: { items: $this.data('lg-items') ? $this.data('lg-items') : 3 },
                1200: { items: $items }
            },
            dots: $navdots,
            margin: $space,
            nav: $navarrow,
            navText: ["<i class='fa fa-angle-left fa-2x'></i>", "<i class='fa fa-angle-right fa-2x'></i>"],
            autoplay: $autoplay,
            autoplayHoverPause: true
     
        });

    });


var scrolllink = $('.scroll');
scrolllink.click(function(e){
e.preventDefault();
$('body,html').animate({scrollTop : $(this.hash).offset().top},1000);
});

$('.topIcon').click(function(e){
  e.preventDefault();
$('body,html').animate({scrollTop :0},1000);
});


$('.scroll').click(function(){
$('.navbar-nav li a.active').removeClass('active');
$(this).addClass('active');
});

//color Customizer
$('.color-opener').click(function(){
    $('.color-customizer').toggleClass('open-cusmizer');

});

$('.button-theme-change').on('click',function(){
var primaryColor = $(this).css('--primary-theme');

$(".button-theme-change").removeClass("active");
  $(this).addClass("active");

$(document.body).css("--primary-color", primaryColor);

});

//Color customizer end


$(".accor-block  a").on("click", function(){
            if($(this).hasClass('active')){
              $(this).removeClass("active");
              $(this).siblings('.add-content').slideUp(200);
              $(".accor-block  a i").removeClass("ion-ios-arrow-up").addClass("ion-ios-arrow-down");
            }else{
              $(".accor-block  a i").removeClass("ion-ios-arrow-up").addClass("ion-ios-arrow-down");
            $(this).find("i").removeClass("ion-ios-arrow-down").addClass("ion-ios-arrow-up");
            $(".accor-block  a").removeClass("active");
            $(this).addClass("active");
            $('.add-content').slideUp(200);
            $(this).siblings('.add-content').slideDown(200);
            }

          });


});





