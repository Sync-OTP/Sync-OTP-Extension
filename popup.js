let textElement = document.getElementById("text-to-copy");

//remove selection of text before copying. We can also call this after copying
window.getSelection().removeAllRanges();

//create a Range object
let range = document.createRange();

//set the Range to contain a text node.
range.selectNode(textElement);

//Select the text node
window.getSelection().addRange(range);

try {
    //copy text
    document.execCommand('copy');
} catch (err) {
    console.log("Not able to copy ");
}