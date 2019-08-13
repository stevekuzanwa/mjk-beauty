$(document).ready(function(){
    
    
    /***************************************************************************/
    /**************************** PORTFOLIO FILTER *****************************/
    /***************************************************************************/
         
         /** Portfolio Filter - Active Menu **
    
         $("li.js-categories").click(function(){
               $(this).addClass("active");
               $("li.js-categories").not(this).removeClass("active");
         });**/
         
         /** Portfolio Filter Active Menu **/
         $("li.js-categories").click(function(){
               $(this).addClass("active");
               $("li.js-categories").not(this).removeClass("active");
         });
         // Instantiate MixItUp:

         $('#showcase-grid').mixItUp();
  
              
});