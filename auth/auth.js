const wrapper = document.querySelector(".wrapper"),
    // qrInput = wrapper.querySelector(".form input"),
    // generateBtn = document.querySelector(".button"),
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

chrome.storage.local.set({ "data": "awesome" }, function () {
    //  Data's been saved boys and girls, go on home
});

chrome.storage.local.get(/* String or Array */["phasersTo"], function (items) {
    qrInput = [ { "phasersTo": "awesome" } ]
});