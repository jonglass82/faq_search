//highlight function

function hiLite(searchWords){
    
    var keyWords = ["free"];
    
    if(searchWords){
        
        if (searchWords == keyWords){
    
       $("span").addClass("highlight");
    }
    else{
        $(".highlight").removeClass(".highlight");
    }
        
    }
    else{
       $(".highlight").removeClass("highlight");
  }
    
};




$("#searchBar").on("keyup", function(){
    
   var userInput = $(this).val().toLowerCase();
    
    hiLite(userInput);
    
    $(".q-and-a, .click-reveal source collapsed, faq-answer click-reveal target collapsed, #faq-intro, h3 ").filter(function() {

$(this).toggle($(this).text().toLowerCase().indexOf(userInput) > -1);
        
        
});
    
});

