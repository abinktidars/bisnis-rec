$(document).ready(function() {

  // Preload
  if (
    $(window).load(function() {
      $("#preloader").fadeOut("slow", function() {
        $(this).remove();
      });
    })
  );

  // BODYMOVIN Animation
  
  // 1. Regulasi
  var animation = bodymovin.loadAnimation({
    container: document.getElementById('animationRegulasi'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'images/bodymovin/regulasi/data.json',
    name: 'myAnimation',
  });
  
  // 2. Chart
  var animation = bodymovin.loadAnimation({
    container: document.getElementById('animationChart'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'images/bodymovin/chart/data.json',
    name: 'myAnimation',
  });
  
  // 3. Investor
  var animation = bodymovin.loadAnimation({
    container: document.getElementById('animationInvestor'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'images/bodymovin/investor/data.json',
    name: 'myAnimation',
  });
  
  // 4. Produksi
  var animation = bodymovin.loadAnimation({
    container: document.getElementById('animationProduksi'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'images/bodymovin/produksi/data.json',
    name: 'myAnimation',
  });
  
  // 5. Drum
  var animation = bodymovin.loadAnimation({
    container: document.getElementById('animationDrum'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'images/bodymovin/drum/data.json',
    name: 'myAnimation',
  });
  
  // 6. Tantangan
  var animation = bodymovin.loadAnimation({
    container: document.getElementById('animationTantangan'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'images/bodymovin/tantangan/data.json',
    name: 'myAnimation',
  });
  
  // 7. City
  var animation = bodymovin.loadAnimation({
    container: document.getElementById('animationCity'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'images/bodymovin/city/data.json',
    name: 'myAnimation',
  });

  // 8.2 Crane2
  var animation = bodymovin.loadAnimation({
    container: document.getElementById('animationCrane2'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'images/bodymovin/sumur/data.json',
    name: 'myAnimation',
  });
  
  // 9. Kilang
  var animation = bodymovin.loadAnimation({
    container: document.getElementById('animationKilang'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'images/bodymovin/kilang/data.json',
    name: 'myAnimation',
  });
  
  // 10. Pabrik
  var animation = bodymovin.loadAnimation({
    container: document.getElementById('animationPabrik'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'images/bodymovin/pabrik/data.json',
    name: 'myAnimation',
  });
  
  // 11. Investasi
  var animation = bodymovin.loadAnimation({
    container: document.getElementById('animationInvestasi'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'images/bodymovin/investasi/data.json',
    name: 'myAnimation',
  });


  // Fullpage Js
  
  //adding the action to the button
  $(document).on('click', '#moveDown', function(){
    $.fn.fullpage.moveSectionDown();
  });

  //adding the action to the button
  $(document).on('click', '.nextDown', function(){
    $.fn.fullpage.moveSectionDown();
  });

  var fullIndex = $('.section').length;

    $('#fullpage').fullpage({
    scrollOverflow: true,
    scrollingSpeed: 700,

    onLeave: function(index, nextIndex, direction) {
      var leavingSection = $(this);

      if (index == 1 && direction == "down") {  
        $(".social").fadeOut(300);    
        $(".backtop").addClass("show");
        $(".page__animation__cover--build-2").fadeOut(500);
        $(".page__animation__cover--build-3").fadeIn(500);
        // $(".page__animation__city--train").velocity({right:"0"}, {delay: 500, duration: 5000});        
      } 
      else if (index == 2 && direction == "up") {
        $(".social").fadeIn(300);
        $(".backtop").removeClass("show");
        $(".page__animation__cover--build-2").fadeIn(500);
        $(".page__animation__cover--build-3").fadeOut(500);
        
      }
      else if (index == 2 && direction == "down") {          
        // $(".page__static__cover").addClass("moveLeft");  
        // $(".page__static__apart").removeClass("scrollSlide");
        
      } 
      else if (index == 3 && direction == "up") {
        // $(".page__static__apart").addClass("scrollSlide");
        // $(".page__static__cover").removeClass("moveLeft");  
        
      }
      else if (index == 3 && direction == "down") { 
        $(".page__animation__cover--text").fadeIn(500);        
      } 
      else if (index == 4 && direction == "up") {
        $(".page__animation__cover--text").fadeOut(500);        
      }
      else if (index == 4 && direction == "down") {    
        $(".page__animation__cover--build-3").fadeOut(500);        
        $(".page__animation__cover--build-4").fadeIn(500);        
        $(".page__animation__cover--build-stats").velocity({opacity: "1"}, {delay: 700, duration: 1000});   
      } 
      else if (index == 5 && direction == "up") { 
        $(".page__animation__cover--build-3").fadeIn(500);        
        $(".page__animation__cover--build-4").fadeOut(500);            
        $(".page__animation__cover--build-stats").velocity({opacity: "0"}, {delay: 0, duration: 100});   
      } 
      else if (index == 5 && direction == "down") {
        
      }
      else if (index == 6 && direction == "up") {    
        
      } 
      else if (index == 6 && direction == "down") {    
        $(".page__animation__listrik--angkot").addClass("zTop");
        $(".page__animation__listrik--angkot").addClass("fixed");
        $(".page__static__listrik").addClass("moveLeft");  
        $(".page__static__sutet").removeClass("scrollSlide");
      } 
      else if (index == 7 && direction == "up") {    
        $(".page__static__listrik").removeClass("moveLeft");  
        $(".page__static__sutet").addClass("scrollSlide");
      } 
      else if (index == 7 && direction == "down") {    
        $(".page__static__sutet").addClass("moveLeft");  
        $(".page__static__listrikcity").removeClass("scrollSlide");
      } 
      else if (index == 8 && direction == "up") {    
        $(".page__static__sutet").removeClass("moveLeft");  
        $(".page__static__listrikcity").addClass("scrollSlide");
      } 
      else if (index == 8 && direction == "down") {    
        $(".page__static__listrikcity").addClass("moveUp");  
        $(".page__static__pembangkit").addClass("moveDown");
        $(".page__static__listrik").addClass("moveUp");
      } 
      else if (index == 9 && direction == "up") {    
        $(".page__static__listrik").removeClass("moveUp");
        $(".page__static__listrikcity").removeClass("moveUp");  
        $(".page__static__pembangkit").removeClass("moveDown");        
      } 
      else if (index == 9 && direction == "down") {    
        $(".page__static__pembangkit").addClass("moveUp");  
        $(".page__static__tambang").addClass("moveDown");
      } 
      else if (index == 10 && direction == "up") {    
        $(".page__static__pembangkit").removeClass("moveUp");  
        $(".page__static__tambang").removeClass("moveDown");                
      } 
      else if (index == 10 && direction == "down") {    
        $(".overlay__halfblack2").fadeIn(300);
      } 
      else if (index == 11 && direction == "up") {    
        $(".overlay__halfblack2").fadeOut(300);
      } 
      else if (index == 11 && direction == "down") {    
        $(".overlay__halfblack2").fadeOut(300);
        $(".overlay__grey").fadeIn(300);
      } 
      else if (index == 12 && direction == "up") {    
        $(".overlay__halfblack2").fadeIn(300);
        $(".overlay__grey").fadeOut(300);
        
      } 
      else if (index == 12 && direction == "down") {    
        
      } 
      else if (index == 13 && direction == "up") {    
        
      } 
      else if (index == 13 && direction == "down") {    
        $(".overlay__halfblack2").fadeIn(300);
        $(".overlay__grey").fadeOut(300);
        
      } 
      else if (index == 14 && direction == "up") {    
        $(".overlay__halfblack2").fadeOut(300);
        $(".overlay__grey").fadeIn(300);
        
      } 
      else if (index == 14 && direction == "down") {    
        $(".overlay__halfblack2").fadeOut(300);
        $(".page__static__tambang").addClass("moveUp");  
        $(".page__static__produksi").addClass("moveDown");
      } 
      else if (index == 15 && direction == "up") {    
        $(".page__static__tambang").removeClass("moveUp");  
        $(".page__static__produksi").removeClass("moveDown");
        $(".overlay__halfblack2").fadeIn(300);
        
      } 
      else if (index == 15 && direction == "down") {    
        
      } 
      else if (index == 16 && direction == "up") {    

      } 
      else if (index == 16 && direction == "down") {    
        $(".page__static__produksi").addClass("moveUp");  
        $(".page__static__eksplo").addClass("moveDown");
      } 
      else if (index == 17 && direction == "up") {    
        $(".page__static__produksi").removeClass("moveUp");  
        $(".page__static__eksplo").removeClass("moveDown");
      } 
      else if (index == 17 && direction == "down") {    

      } 
      else if (index == 18 && direction == "up") {    

      } 
      else if (index == 18 && direction == "down") {    
        $(".page__static__eksplo").addClass("moveUp");  
        $(".page__static__discuss").addClass("moveDown");
        $(".page__animation__discuss--people").velocity({right: "0%"}, {delay: 100, duration: 1000});
      } 
      else if (index == 19 && direction == "up") {    
        $(".page__static__eksplo").removeClass("moveUp");  
        $(".page__static__discuss").removeClass("moveDown");
      } 
      else if (index == 19 && direction == "down") {    
        $(".page__static__discuss").addClass("moveLeft");  
        $(".page__static__present").removeClass("scrollSlide");
      } 
      else if (index == 20 && direction == "up") {    
        $(".page__static__discuss").removeClass("moveLeft");  
        $(".page__static__present").addClass("scrollSlide");

      } 
      else if (index == 20 && direction == "down") {    
        $(".page__static__present").addClass("moveUp");   
        $(".page__static__map").addClass("moveDown");
      } 
      else if (index == 21 && direction == "up") {    
        $(".page__static__present").removeClass("moveUp");  
        $(".page__static__map").removeClass("moveDown");
      } 
      else if (index == 21 && direction == "down") {    
        $(".page__static__map").addClass("moveUp");   
        $(".page__static__geo").addClass("moveDown");
      } 
      else if (index == 22 && direction == "up") {    
        $(".page__static__map").removeClass("moveUp");   
        $(".page__static__geo").removeClass("moveDown");
      } 
      else if (index == 22 && direction == "down") {    
        $(".page__static__geo").addClass("moveUp");   
        $(".page__static__tantangan").addClass("moveDown");
      } 
      else if (index == 23 && direction == "up") {    
        $(".page__static__geo").removeClass("moveUp");   
        $(".page__static__tantangan").removeClass("moveDown");
      } 
      else if (index == 23 && direction == "down") {    
        $(".page__static__tantangan").addClass("moveUp");   
        $(".page__static__challenge").addClass("moveDown");
      } 
      else if (index == 24 && direction == "up") {    
        $(".page__static__tantangan").removeClass("moveUp");   
        $(".page__static__challenge").removeClass("moveDown");
      } 
      else if (index == 24 && direction == "down") {    
        $(".page__static__challenge").addClass("moveUp");   
        $(".page__static__invest").addClass("moveDown");

      } 
      else if (index == 25 && direction == "up") {    
        $(".page__static__challenge").removeClass("moveUp");   
        $(".page__static__invest").removeClass("moveDown");        
        
      } 
      else if (index == 25 && direction == "down") {    
        
      } 
      else if (index == 26 && direction == "up") {    
      } 
      else if (index == 26 && direction == "down") {    
        $(".page__static__invest").addClass("moveUp");   
        $(".page__static__izin").addClass("moveDown");
      } 
      else if (index == 27 && direction == "up") {    
        $(".page__static__invest").removeClass("moveUp");   
        $(".page__static__izin").removeClass("moveDown");              
      } 
      else if (index == 27 && direction == "down") {    
      } 
      else if (index == 28 && direction == "up") {    
      } 
      else if (index == 28 && direction == "down") {    
        $(".page__static__izin").addClass("moveUp");   
        $(".page__static__teknis").addClass("moveDown");        
      } 
      else if (index == 29 && direction == "up") {    
        $(".page__static__izin").removeClass("moveUp");   
        $(".page__static__teknis").removeClass("moveDown");                
      } 
      else if (index == 29 && direction == "down") {    
        $(".page__static__teknis").addClass("moveUp");   
        $(".page__static__regulasi").addClass("moveDown");        
      } 
      else if (index == 30 && direction == "up") {    
        $(".page__static__teknis").removeClass("moveUp");   
        $(".page__static__regulasi").removeClass("moveDown");        
      } 
      else if (index == 30 && direction == "down") {    
        
      } 
      else if (index == 31 && direction == "up") {         
        
      } 
      else if (index == 31 && direction == "down") {    
        $(".page__static__regulasi").addClass("moveUp");   
        $(".page__static__investor").addClass("moveDown");        
      } 
      else if (index == 32 && direction == "up") {   
        $(".page__static__regulasi").removeClass("moveUp");   
        $(".page__static__investor").removeClass("moveDown");        
         
      } 
      else if (index == 32 && direction == "down") {    
      } 
      else if (index == 33 && direction == "up") {           
      } 
      else if (index == 33 && direction == "down") {    
        $(".page__static__investor").addClass("moveUp");   
        $(".page__static__client").addClass("moveDown");  
      } 
      else if (index == 34 && direction == "up") {    
        $(".page__static__investor").removeClass("moveUp");   
        $(".page__static__client").removeClass("moveDown");  

      } 
      else if (index == 34 && direction == "down") {    

      } 
      else if (index == 35 && direction == "up") {    

      } 
      else if (index == 35 && direction == "down") {    

      } 
      else if (index == 36 && direction == "up") {    
        
      } 
      else if (index == 36 && direction == "down") {    
        $(".number__item--3").fadeOut(300);
        $(".pengeboran").velocity({opacity: "1"}, {delay: 100, duration: 1000});
        $(".text-pengeboran").velocity({opacity: "1"}, {delay: 100, duration: 500});
      } 
      else if (index == 37 && direction == "up") {   
        $(".number__item--3").fadeIn(300);
        $(".pengeboran").velocity({opacity: "0"}, {delay: 100, duration: 500});
        $(".text-pengeboran").velocity({opacity: "0"}, {delay: 100, duration: 500});
        
      } 
      else if (index == 37 && direction == "down") {    
        $(".sumur__1").velocity({opacity: "0"}, {delay: 100, duration: 500});
        $(".sumur__2").velocity({opacity: "1"}, {delay: 100, duration: 500});
        
      } 
      else if (index == 38 && direction == "up") {    
        $(".sumur__1").velocity({opacity: "1"}, {delay: 100, duration: 500});
        $(".sumur__2").velocity({opacity: "0"}, {delay: 100, duration: 500});
        
      } 
      else if (index == 38 && direction == "down") {    
        $(".pengeboran").velocity({opacity: "0"}, {delay: 100, duration: 500});
        $(".text-pengeboran").velocity({opacity: "0"}, {delay: 100, duration: 500});
        
      } 
      else if (index == 39 && direction == "up") {    
        $(".pengeboran").velocity({opacity: "1"}, {delay: 100, duration: 500});
        $(".text-pengeboran").velocity({opacity: "1"}, {delay: 100, duration: 500});
        
      } 
      else if (index == 39 && direction == "down") {    
        $(".credit-chart").velocity({opacity: "0"}, {delay: 100, duration: 500});
        $(".page__static__client").addClass("moveUp");   
        $(".page__static__outro").addClass("moveDown"); 
      } 
      else if (index == 40 && direction == "up") {    
        $(".credit-chart").velocity({opacity: "1"}, {delay: 100, duration: 500});
        $(".page__static__client").removeClass("moveUp");   
        $(".page__static__outro").removeClass("moveDown"); 

      } 
      else if (index == 40 && direction == "down") {    

      } 
      else if (index == 41 && direction == "up") {    

      } 
      else if (index == 41 && direction == "down") {    
        $(".page__static__outro").addClass("moveUp");   
        $(".page__static__credit").addClass("moveDown"); 
      } 
      else if (index == 42 && direction == "up") {    
        $(".page__static__outro").removeClass("moveUp");   
        $(".page__static__credit").removeClass("moveDown"); 
      } 
      else if (index == 42 && direction == "down") {    

      } 
      else if (index == 43 && direction == "up") {    

      } 
      else if (index == 43 && direction == "down") {    

      } 
      else if (index == 44 && direction == "up") {    

      } 
      else if (index == 44 && direction == "down") {    

      } 
      
    }
  });

  // Picture element HTML5 shiv
  document.createElement("picture");
  
});

// Mobile Version
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  $(".cover__background").remove();
} else {
  $(".social__item--wa").hide();
}

