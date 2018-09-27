//highlight function

function hiLite(searchWords){
    
    // users 
    //autopay
    // stripe
    //batch edit
    //payroll
    // wait list
    //embedded schedule
    //group charge
    //features
    //login
    //cancel
    //web store
    //point of sale
    //reg fee
    //discounts
    //donation
    //registration
    //data
    //reports
    //email feature
    
    if(searchWords){
        
        if (searchWords === "user"){
    
            $(".user").addClass("highlight");
            
        }
        
        if(searchWords === "autopay"){
            
            $(".autopay").addClass("highlight");
            
        }
    
        if(searchWords === "stripe"){
            
            $(".stripe").addClass("highlight");
            
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

