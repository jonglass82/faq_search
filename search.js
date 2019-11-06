// The highlight function

function hiLite(searchWords){

        if(searchWords){
            
        var content = $("h4, .faq-answer").text();
        var regExp = new RegExp(searchWords, "i");
        var matches = content.match(regExp);

           if(matches){
                $("h4, .faq-answer").each(function() {

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


//The filter function

$("#searchBar").keyup(function(){
    
   var userInput = $(this).val().toLowerCase();
    
    $(".q-and-a, .click-reveal source collapsed, .faq-answer click-reveal target collapsed, #faq-intro, h3 ").filter(function() {

        $(this).toggle($(this).text().toLowerCase().indexOf(userInput) > -1);
        hiLite(userInput);
    });
});

