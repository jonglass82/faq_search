$("#searchBar").on("keyup", function(){
    
   var userInput = $(this).val().toLowerCase();
    
    
    $(".q-and-a").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(userInput) > -1);
  });
    
    
});



