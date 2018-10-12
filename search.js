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




//$("#searchBar").on("keyup", function(){
    
$("#searchBar").keyup(function(){
    
   var userInput = $(this).val().toLowerCase();
    
    hiLite(userInput);
    
    $(".q-and-a, .click-reveal source collapsed, faq-answer click-reveal target collapsed, #faq-intro, h3 ").filter(function() {

$(this).toggle($(this).text().toLowerCase().indexOf(userInput) > -1);
        
        
});
    
});

//function hiLite(searchWords){
//    
//    // users 
//    //autopay
//    // stripe
//    //batch edit
//    //payroll
//    // wait list
//    //embedded schedule
//    //group charge
//    //features
//    //login
//    //cancel
//    //web store
//    //point of sale
//    //reg fee
//    //discounts
//    //donation
//    //registration
//    //data
//    //reports
//    //email feature
//    
//    if(searchWords){
//        
//        if (searchWords === "user"){
//    
//            $(".users").addClass("highlight");
//            
//        }
//        
//        if(searchWords === "autopay"){
//            
//            $(".autopay").addClass("highlight");
//            
//        }
//    
//        if(searchWords === "stripe"){
//            
//            $(".stripe").addClass("highlight");
//            
//        }
//        
//        
//    }
//    else{
//       $(".highlight").removeClass("highlight");
//       
//  }
//    
//};
//
//
//
