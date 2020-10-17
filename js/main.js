$(document).ready(function() {

  // Preload
  if (
    $(window).load(function() {
      $("#preloader").fadeOut("slow", function() {
        $(this).remove();
      });
    })
  );


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
      } 
      else if (index == 2 && direction == "up") {
        $(".social").fadeIn(300);
        $(".backtop").removeClass("show");
        $(".page__animation__cover--build-2").fadeIn(500);
        $(".page__animation__cover--build-3").fadeOut(500);    
        
      }
      else if (index == 2 && direction == "down") {          
                         
      } 
      else if (index == 3 && direction == "up") {                          
        
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
        $(".page__static__cover").addClass("moveLeft");  
        $(".page__static__rec").removeClass("scrollSlide");
      }
      else if (index == 6 && direction == "up") {    
        $(".page__static__rec").addClass("scrollSlide");
        $(".page__static__cover").removeClass("moveLeft");  
      } 
      else if (index == 6 && direction == "down") {    
        $(".page__animation__rec--serti-1").fadeIn(500);
      } 
      else if (index == 7 && direction == "up") {   
        $(".page__animation__rec--serti-1").fadeOut(500);
        
      } 
      else if (index == 7 && direction == "down") {    
        $(".page__animation__rec--serti-2").fadeIn(500);
        
      } 
      else if (index == 8 && direction == "up") {    
        $(".page__animation__rec--serti-2").fadeOut(500);
        
      } 
      else if (index == 8 && direction == "down") { 
        $(".page__animation__rec--serti-3").fadeIn(500);
        
      } 
      else if (index == 9 && direction == "up") {    
        $(".page__animation__rec--serti-3").fadeOut(500);
        
      } 
      else if (index == 9 && direction == "down") {   
        $(".page__animation__rec--serti-4").fadeIn(500);
        
      } 
      else if (index == 10 && direction == "up") {    
        $(".page__animation__rec--serti-4").fadeOut(500);
        
      } 
      else if (index == 10 && direction == "down") { 
        $(".page__animation__rec--serti-5").fadeIn(500);
        
      } 
      else if (index == 11 && direction == "up") {  
        $(".page__animation__rec--serti-5").fadeOut(500);
        
      } 
      else if (index == 11 && direction == "down") { 
        $(".page__static__rec").addClass("moveLeft");  
        $(".page__static__why").removeClass("scrollSlide");
      } 
      else if (index == 12 && direction == "up") { 
        $(".page__static__rec").removeClass("moveLeft");  
        $(".page__static__why").addClass("scrollSlide");                
      } 
      else if (index == 12 && direction == "down") {    
        $(".page__static__why").addClass("moveLeft");  
        $(".page__static__list").removeClass("scrollSlide");
      } 
      else if (index == 13 && direction == "up") {    
        $(".page__static__why").removeClass("moveLeft");  
        $(".page__static__list").addClass("scrollSlide");   
      } 
      else if (index == 13 && direction == "down") { 
        // $(".text-popout--1").velocity({left:"-50%"}, {delay: 10, duration: 300});        
        $(".page__animation__list--tower").velocity({left:"-10%"}, {delay: 10, duration: 300});                
      } 
      else if (index == 14 && direction == "up") {   
                
      } 
      else if (index == 14 && direction == "down") {  
        
      } 
      else if (index == 15 && direction == "up") {  
        
        
      } 
      else if (index == 15 && direction == "down") {    
        
      } 
      else if (index == 16 && direction == "up") {    

      } 
      else if (index == 16 && direction == "down") { 
        
      } 
      else if (index == 17 && direction == "up") {    
      } 
      else if (index == 17 && direction == "down") {    
        $(".page__static__list").addClass("moveLeft");  
        $(".page__static__museum").removeClass("scrollSlide");
      } 
      else if (index == 18 && direction == "up") {    
        $(".page__static__list").removeClass("moveLeft");  
        $(".page__static__museum").addClass("scrollSlide");
      } 
      else if (index == 18 && direction == "down") {    
        $(".page__static__museum").addClass("moveLeft");  
        $(".page__static__kilang").removeClass("scrollSlide");        
        $(".page__color--soon").fadeOut(700);        
        $(".page__color--evening").fadeIn(700);        
      } 
      else if (index == 19 && direction == "up") {    
        $(".page__static__museum").removeClass("moveLeft");  
        $(".page__static__kilang").addClass("scrollSlide");              
        $(".page__color--soon").fadeIn(700);        
        $(".page__color--evening").fadeOut(700);        
      } 
      else if (index == 19 && direction == "down") {    
        $(".page__color--soon").fadeIn(700);        
        $(".page__color--evening").fadeOut(700);         
        $(".page__animation__kilang--hill").fadeOut(700);                 
        $(".page__animation__kilang--building").velocity({bottom:"-100%"}, {delay: 10, duration: 400});                 
        $(".page__animation__kilang--building2").velocity({bottom:"0%"}, {delay: 10, duration: 400});                 
      } 
      else if (index == 20 && direction == "up") {    
        $(".page__color--soon").fadeOut(700);        
        $(".page__color--evening").fadeIn(700);                
        $(".page__animation__kilang--hill").fadeIn(700);         
        $(".page__animation__kilang--building").velocity({bottom:"0%"}, {delay: 10, duration: 400});                 
        $(".page__animation__kilang--building2").velocity({bottom:"-100%"}, {delay: 10, duration: 400});              
      } 
      else if (index == 20 && direction == "down") {   
        
      } 
      else if (index == 21 && direction == "up") {  
        
      } 
      else if (index == 21 && direction == "down") {  
        $(".page__static__kilang").addClass("moveLeft");  
        $(".page__static__invest").removeClass("scrollSlide");
      } 
      else if (index == 22 && direction == "up") {    
        $(".page__static__kilang").removeClass("moveLeft");  
        $(".page__static__invest").addClass("scrollSlide");   
      } 
      else if (index == 22 && direction == "down") {    
        $(".text-popout--3").velocity({marginTop:"-15vw"}, {delay: 10, duration: 500});               
      } 
      else if (index == 23 && direction == "up") {    
        $(".text-popout--3").velocity({marginTop:"0vw"}, {delay: 10, duration: 500});               
        
      } 
      else if (index == 23 && direction == "down") {    
        $(".page__animation__invest--coin").velocity({left:"0%"}, {delay: 100, duration: 650});                       
      } 
      else if (index == 24 && direction == "up") {    
        $(".page__animation__invest--coin").velocity({left:"100%"}, {delay: 100, duration: 500});                       
        
      } 
      else if (index == 24 && direction == "down") {    
        // $(".page__static__challenge").addClass("moveUp");   
        // $(".page__static__invest").addClass("moveDown");

      } 
      else if (index == 25 && direction == "up") {    
        // $(".page__static__challenge").removeClass("moveUp");   
        // $(".page__static__invest").removeClass("moveDown");        
        
      } 
      else if (index == 25 && direction == "down") {    
        
      } 
      else if (index == 26 && direction == "up") {    
      } 
      else if (index == 26 && direction == "down") {  
        
      } 
      else if (index == 27 && direction == "up") {    
                      
      } 
      else if (index == 27 && direction == "down") {    
      } 
      else if (index == 28 && direction == "up") {    
      } 
      else if (index == 28 && direction == "down") { 
               
      } 
      else if (index == 29 && direction == "up") {    
                        
      } 
      else if (index == 29 && direction == "down") {  
               
      } 
      else if (index == 30 && direction == "up") {    
                
      } 
      else if (index == 30 && direction == "down") {    
        
      } 
      else if (index == 31 && direction == "up") {         
        
      } 
      else if (index == 31 && direction == "down") {   
               
      } 
      else if (index == 32 && direction == "up") {   
                
         
      } 
      else if (index == 32 && direction == "down") {    
      } 
      else if (index == 33 && direction == "up") {           
      } 
      else if (index == 33 && direction == "down") {   
         
      } 
      else if (index == 34 && direction == "up") {    
        
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
        
      } 
      else if (index == 37 && direction == "up") {   
        
        
      } 
      else if (index == 37 && direction == "down") {    
        
        
      } 
      else if (index == 38 && direction == "up") {    
        
        
      } 
      else if (index == 38 && direction == "down") {    
        
        
      } 
      else if (index == 39 && direction == "up") {    
        
        
      } 
      else if (index == 39 && direction == "down") {    
        
      } 
      else if (index == 40 && direction == "up") {    
             

      } 
      else if (index == 40 && direction == "down") {    

      } 
      else if (index == 41 && direction == "up") {    

      } 
      else if (index == 41 && direction == "down") {   
        
      } 
      else if (index == 42 && direction == "up") {    
        
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

