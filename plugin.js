// callback=?

function construct(data){

}

jQuery("#btn").on("click", function(){
    jQuery("#list").empty();
 var searchTerm =  window.getSelection().toString()
 console.log(searchTerm)
     jQuery.ajax({
        type: "GET", 
        url: "http://words.bighugelabs.com/api/2/d66993493afaf490e7efa84fd5a62427/" + searchTerm +"/json",
        async: true,
        dataType: "json",
        success: function (data, textStatus, jqXHR) {
            
            for (var i = 0; i < Object.keys(data).length; i++) {
                var keyName = Object.keys(data)[i]
                
                var array = data[keyName].syn
                for (var j = 0; j < array.length; j++) {
                    jQuery("#list").append("<li>" + array[j] + "</li>");
                }
                

            }
            
            // var array = [data.adjective.syn, data.noun.syn, data.verb.syn]
            debugger
         
          
        
        },
        error: function (errorMessage) {
            debugger
        }
    });
})

//get selected word, even in iframe
// window.getSelection().toString()

function replaceSelectedText(replacementText) {
    var sel, range;
    if (window.getSelection) {
        sel = window.getSelection();
        if (sel.rangeCount) {
            range = sel.getRangeAt(0);
            range.deleteContents();
            range.insertNode(document.createTextNode(replacementText));
        }
    } else if (document.selection && document.selection.createRange) {
        range = document.selection.createRange();
        range.text = replacementText;
    }
}

//code take from https://stackoverflow.com/questions/3997659/replace-selected-text-in-contenteditable-div
//will replace higlighted word even in an iframe

replaceSelectedText("text") 

