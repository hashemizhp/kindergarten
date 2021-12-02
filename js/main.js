$(".navbar-toggler").click(function(){
    if($(".nav-bg").css("display")=="none"){
       $(".nav-bg").css("display","block")
    }else{
     $(".nav-bg").css("display","none")
    }
    })
  
    $(".nav-bg").click(function(){
       $(".navbar-collapse").removeClass("show");
       $(".nav-bg").css("display","none");
       $(".navbar-toggler").addClass("collapsed");
  
    })
  
  
$('.slider1').slick({
   dots: false,
   infinite: false,
   speed: 300,
   slidesToShow: 1,
   slidesToScroll: 1,
   autoplay: true,
   autoplaySpeed: 3000,
   prevArrow:'.prev-slider1',
   nextArrow:'.next-slider1',
 });
 