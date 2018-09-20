$("#searchBar").on("keyup", function(){
    
   var userInput = $(this).val().toLowerCase();
    
    
    $(".q-and-a, .click-reveal source collapsed, faq-answer click-reveal target collapsed, #faq-intro, h3 ").filter(function() {
        
    $(this).toggle($(this).text().toLowerCase().indexOf(userInput) > -1);
        
      
  });
    
    
});



