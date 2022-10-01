import "./socket.io-client.js"
chrome.runtime.onInstalled.addListener(() => {
    console.log("onInstalled...");
    chrome.alarms.create("startRequest", { periodInMinutes: 30 });
    startRequest();
});

chrome.alarms.onAlarm.addListener((alarm) => {
    startRequest();
});

async function startRequest() {
    const response = await fetch("https://api.quotable.io/random");
    const newData = await response.json();
    const data = `${newData.content} —${newData.author}`;

    var options = {
        title: "Your OTP is",
        message: data,
        iconUrl: "/images/favicon-16x16.png",
        type: "basic",
        // requireInteraction: true
    };
    chrome.notifications.create("", options);
}

const socket = io("http://3.109.56.163:8080/")
socket.on("connect",() => {
    console.log(`connected with id: ${socket.id} `)
})