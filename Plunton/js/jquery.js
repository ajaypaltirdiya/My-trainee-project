
$(document).ready(function(){

$(function() {
            
                $('#da-slider').cslider({
                    current     : 0,
                    autoplay    : true,
                    bgincrement : 450
                });
            });




$(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
$(this).addClass("active");
}



$(window).scroll(function(){
    if($(document).scrollTop()>3100){
     $('.graphic').animate({width:'80%'},2000);
     $('.html').animate({width:'95%'},2000);
     $('.jquery').animate({width:'70%'},2000);
     $('.wordpress').animate({width:'75%'},2000);

    }
    
});


var scrolllink = $('.scroll');

scrolllink.click(function(e){
e.preventDefault();

$('body,html').animate({scrollTop : $(this.hash).offset().top},1000);
})

$('.scroll').click(function(){
$('.navbar-nav li a.active').removeClass('active');
$(this).addClass('active');
});


$(window).scroll(function(){

var scrollbarlocat = $(this).scrollTop();
scrolllink.each(function(){
  var sectionoffst = $(this.hash).offset().top 

  if(sectionoffst <= scrollbarlocat){
 $(this).parent().addClass('.active');
 $(this).parent().siblings().removeClass('.active');
  }
})


});

});
function initMap() {
        var jaipur = {lat:  26.8444254, lng: 75.8007229};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 20,
          center: jaipur
        });
        var marker = new google.maps.Marker({
          position: jaipur,
          map: map
        });
      }

  





