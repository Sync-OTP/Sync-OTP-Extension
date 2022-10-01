let textElement = document.getElementById("text-to-copy");
window.getSelection().removeAllRanges();
let range = document.createRange();
range.selectNode(textElement);
window.getSelection().addRange(range);
try {
    document.execCommand('copy');
} catch (err) {
    console.log("Not able to copy ");
}