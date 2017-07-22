callback=?
jQuery("#btn").on("click", function(){
 var searchTerm =   window.getSelection().toString()
 console.log(searchTerm)
     jQuery.ajax({
        type: "GET", 
        url: "http://words.bighugelabs.com/api/2/d66993493afaf490e7efa84fd5a62427/" + searchTerm +"/json",
        async: true,
        dataType: "json",
        success: function (data, textStatus, jqXHR) {
          
        
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

