//highlight function

function hiLite(searchWords){

        if(searchWords){
            
        var content = $("h4").text();
        var regExp = new RegExp(searchWords, "ig");
        var matches = content.match(regExp);

       if(matches){
                $("h4").each(function() {
                var highlight = '<span class="highlight">'+searchWords+'</span>';
                var text = $(this).text();
                            
                $(this).html(text.replace(regExp, highlight)); 
                    });
            }
              else{
                $(".highlight").removeClass("highlight");
            }
            
        }
      
        else{
            $(".highlight").removeClass("highlight");
        }
};



    
$("#searchBar").keyup(function(){
    
   var userInput = $(this).val().toLowerCase();
    
    hiLite(userInput);
    
    $(".q-and-a, .click-reveal source collapsed, faq-answer click-reveal target collapsed, #faq-intro, h3 ").filter(function() {

$(this).toggle($(this).text().toLowerCase().indexOf(userInput) > -1);
        
        
});
    
});

