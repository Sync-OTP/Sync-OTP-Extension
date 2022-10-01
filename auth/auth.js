const wrapper = document.querySelector(".wrapper"),
    qrInput = (Math.random() + 1).toString(36).substring(7),
    qrImg = wrapper.querySelector(".qr-code img");
let preValue;

const generateBtn = document.querySelector('.qrbutton');
generateBtn.addEventListener('click', () => {
    let qrValue = qrInput;
    if (!qrValue || preValue === qrValue) return;
    preValue = qrValue;
    generateBtn.innerText = "Generating QR Code...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active");
        generateBtn.innerText = "Generate QR Code";
    });
});

qrInput.addEventListener("keyup", () => {
    if (!qrInput.value.trim()) {
        wrapper.classList.remove("active");
        preValue = "";
    }
});
///
////////////////////////////////
//  PERSISTENT Storage - Globally
//  Save data to storage across their browsers...

chrome.storage.sync.set({ "yourBody": "myBody" }, function(){
    //  A data saved callback omg so fancy
});

chrome.storage.sync.get(/* String or Array */["yourBody"], function(items){
    //  items = [ { "yourBody": "myBody" } ]
});

//  LOCAL Storage

// Save data to storage locally, in just this browser...

chrome.storage.local.set({ "phasersTo": "awesome" }, function(){
    //  Data's been saved boys and girls, go on home
});

chrome.storage.local.get(/* String or Array */["phasersTo"], function(items){
    //  items = [ { "phasersTo": "awesome" } ]
});