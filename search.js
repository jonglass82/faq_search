//highlight function

function searchHighlight(searchWords){
    
    if(searchWords){
    
    var content = $("p").text();
    var regExp = new RegExp(searchWords, "ig");
    var matches = content.match(regExp);
    
    if (matches){
        $("p").html(content.replace(regExp, function(match){
            return "<span class='highlight'>" + match + "</span>";
        }));
    }
}
    
};



$("#searchBar").on("keyup", function(){
    
   var userInput = $(this).val().toLowerCase();
    
    searchHighlight(userInput);
    
    $(".q-and-a, .click-reveal source collapsed, faq-answer click-reveal target collapsed, #faq-intro, h3 ").filter(function() {

$(this).toggle($(this).text().toLowerCase().indexOf(userInput) > -1);
        
        
  });
    
});



