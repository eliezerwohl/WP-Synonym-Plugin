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

