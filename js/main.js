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
        $(".kincir-fade").fadeOut(300);    
      } 
      else if (index == 2 && direction == "up") {
        $(".social").fadeIn(300);
        $(".backtop").removeClass("show");
        $(".page__animation__cover--build-2").fadeIn(500);
        $(".page__animation__cover--build-3").fadeOut(500);    
        $(".kincir-fade").fadeIn(300);    
        
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
        // $(".page__animation__list--tower").velocity({left:"-10%"}, {delay: 10, duration: 300});                
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
        $(".page__animation__kilang--buildingasap").velocity({bottom:"-100%"}, {delay: 10, duration: 400});                 
        $(".page__animation__kilang--building2").velocity({bottom:"0%"}, {delay: 10, duration: 400});                 
      } 
      else if (index == 20 && direction == "up") {    
        $(".page__color--soon").fadeOut(700);        
        $(".page__color--evening").fadeIn(700);                
        $(".page__animation__kilang--hill").fadeIn(700);         
        $(".page__animation__kilang--building").velocity({bottom:"0%"}, {delay: 10, duration: 400});                 
        $(".page__animation__kilang--buildingasap").velocity({bottom:"0%"}, {delay: 10, duration: 400});                 
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
        $(".text-popout--3").velocity({marginTop:"-20vw"}, {delay: 10, duration: 500});               
      } 
      else if (index == 23 && direction == "up") {    
        $(".text-popout--3").velocity({marginTop:"0vw"}, {delay: 10, duration: 500});               
        
      } 
      else if (index == 23 && direction == "down") {    
        $(".page__animation__invest--coin").velocity({left:"0%"}, {delay: 100, duration: 650});                       
        $(".page__animation__invest--text2").velocity({top:"0%"}, {delay: 300, duration: 650});                       
      } 
      else if (index == 24 && direction == "up") {    
        $(".page__animation__invest--coin").velocity({left:"100%"}, {delay: 100, duration: 500});                       
        $(".page__animation__invest--text2").velocity({top:"100%"}, {delay: 300, duration: 650});                       
        
      } 
      else if (index == 24 && direction == "down") {    
        $(".page__animation__invest--build").velocity({left:"6%"}, {delay: 100, duration: 650});                       
        $(".page__animation__invest--text3").velocity({top:"0%"}, {delay: 300, duration: 650});                       
        
      } 
      else if (index == 25 && direction == "up") {    
        $(".page__animation__invest--build").velocity({left:"100%"}, {delay: 100, duration: 650});                       
        $(".page__animation__invest--text3").velocity({top:"100%"}, {delay: 300, duration: 650});                       
        
      } 
      else if (index == 25 && direction == "down") {    
        $(".page__static__invest").addClass("moveUp");   
        $(".page__static__outlet").addClass("moveDown");        
      } 
      else if (index == 26 && direction == "up") { 
        $(".page__static__invest").removeClass("moveUp");   
        $(".page__static__outlet").removeClass("moveDown");        
      } 
      else if (index == 26 && direction == "down") {  
        $(".page__animation__outlet--bubble").fadeIn(400);                
        $(".page__animation__outlet--bubble2").velocity({opacity: "1"}, {delay: 700, duration: 400});                
      } 
      else if (index == 27 && direction == "up") {    
        $(".page__animation__outlet--bubble").fadeOut(400);                                      
        $(".page__animation__outlet--bubble2").velocity({opacity: "0"}, {delay: 100, duration: 400});                
      } 
      else if (index == 27 && direction == "down") {    
        $(".page__animation__outlet--bubble").fadeOut(400);                                      
        $(".page__animation__outlet--bubble2").velocity({opacity: "0"}, {delay: 100, duration: 400});                
        $(".page__animation__outlet--loop").velocity({bottom:"0%"}, {duration: 400});                                      
        $(".page__animation__outlet--loopMobile").velocity({bottom:"0%"}, {duration: 400});                                      
      } 
      else if (index == 28 && direction == "up") {    
        $(".page__animation__outlet--bubble").fadeIn(400);                
        $(".page__animation__outlet--bubble2").velocity({opacity: "1"}, {delay: 700, duration: 400});                
        $(".page__animation__outlet--loop").velocity({bottom:"-100%"}, {duration: 400});                                      
        $(".page__animation__outlet--loopMobile").velocity({bottom:"-100%"}, {duration: 400});                                      
      } 
      else if (index == 28 && direction == "down") { 
        
      } 
      else if (index == 29 && direction == "up") {    
        
      } 
      else if (index == 29 && direction == "down") {  
        // $(".page__animation__outlet--loop").addClass("leftMove");                                                     
        $(".page__animation__outlet--loop").velocity({left:"30%"}, {duration: 500});                                                     
      } 
      else if (index == 30 && direction == "up") {                                                                     
        // $(".page__animation__outlet--loop").removeClass("leftMove");                                                     
        $(".page__animation__outlet--loop").velocity({left:"0%"}, {duration: 500});                                                                     
      } 
      else if (index == 30 && direction == "down") {    
        
      } 
      else if (index == 31 && direction == "up") {         
        
      } 
      else if (index == 31 && direction == "down") {   
        $(".page__static__outlet").addClass("moveLeft");  
        $(".page__static__listrik").removeClass("scrollSlide");
      } 
      else if (index == 32 && direction == "up") {   
        $(".page__static__outlet").removeClass("moveLeft");  
        $(".page__static__listrik").addClass("scrollSlide");                         
      } 
      else if (index == 32 && direction == "down") {   
        $(".page__static__listrik").addClass("moveUp");   
        $(".page__static__skema").addClass("moveDown");  
        
      } 
      else if (index == 33 && direction == "up") {           
        $(".page__static__listrik").removeClass("moveUp");   
        $(".page__static__skema").removeClass("moveDown");  
      } 
      else if (index == 33 && direction == "down") {   
        $(".page__static__skema").addClass("moveUp");  
        $(".page__static__potensi").addClass("moveDown");        
      } 
      else if (index == 34 && direction == "up") {    
        $(".page__static__skema").removeClass("moveUp");  
        $(".page__static__potensi").removeClass("moveDown");        
      } 
      else if (index == 34 && direction == "down") {    
        $(".page__static__potensi").addClass("moveUp");        
        $(".page__static__pabrik").addClass("moveDown");        
      } 
      else if (index == 35 && direction == "up") {    
        $(".page__static__potensi").removeClass("moveUp");        
        $(".page__static__pabrik").removeClass("moveDown");        
      } 
      else if (index == 35 && direction == "down") {    
        $(".page__static__pabrik").addClass("moveUp");        
        $(".page__static__air").addClass("moveDown"); 
      } 
      else if (index == 36 && direction == "up") {    
        $(".page__static__pabrik").removeClass("moveUp");        
        $(".page__static__air").removeClass("moveDown");         
      } 
      else if (index == 36 && direction == "down") {    
        $(".page__static__air").addClass("moveUp");        
        $(".page__static__surya").addClass("moveDown");         
      } 
      else if (index == 37 && direction == "up") {   
        $(".page__static__air").removeClass("moveUp");        
        $(".page__static__surya").removeClass("moveDown");         
      } 
      else if (index == 37 && direction == "down") {    
        $(".page__static__surya").addClass("moveUp");        
        $(".page__static__bayu").addClass("moveDown");                 
      } 
      else if (index == 38 && direction == "up") {    
        $(".page__static__surya").removeClass("moveUp");        
        $(".page__static__bayu").removeClass("moveDown");                 
      } 
      else if (index == 38 && direction == "down") {    
        $(".page__static__bayu").addClass("moveUp");        
        $(".page__static__ombak").addClass("moveDown");                         
      } 
      else if (index == 39 && direction == "up") {    
        $(".page__static__bayu").removeClass("moveUp");        
        $(".page__static__ombak").removeClass("moveDown");                         
      } 
      else if (index == 39 && direction == "down") {    
        $(".page__static__ombak").addClass("moveUp");        
        $(".page__static__energi").addClass("moveDown"); 
      } 
      else if (index == 40 && direction == "up") {    
        $(".page__static__ombak").removeClass("moveUp");        
        $(".page__static__energi").removeClass("moveDown");              
      } 
      else if (index == 40 && direction == "down") {    
        $(".bg-color--1").fadeOut(500);       
        $(".bg-color--2").fadeIn(500);       
      } 
      else if (index == 41 && direction == "up") {    
        $(".bg-color--1").fadeIn(500);       
        $(".bg-color--2").fadeOut(500);       
      } 
      else if (index == 41 && direction == "down") {   
        $(".bg-color--2").fadeOut(500);       
        $(".bg-color--3").fadeIn(500);       
        
      } 
      else if (index == 42 && direction == "up") {    
        $(".bg-color--2").fadeIn(500);       
        $(".bg-color--3").fadeOut(500);       
        
      } 
      else if (index == 42 && direction == "down") {    
        $(".bg-color--3").fadeOut(500);       
        $(".bg-color--4").fadeIn(500);       
        
      } 
      else if (index == 43 && direction == "up") {    
        $(".bg-color--3").fadeIn(500);       
        $(".bg-color--4").fadeOut(500);       

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

