chrome.runtime.onInstalled.addListener(() => {
    console.log("onInstalled...");

    // create alarm after extension is installed / upgraded
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

    // const cocktailName = newData.content;
    // const heading = document.createElement("otpdata");
    // heading.innerHTML = data;
    // otpdataH1.appendChild(heading);

    var options = {
        title: "Your OTP is",
        message: data,
        iconUrl: "/images/favicon-16x16.png",
        type: "basic",
        // requireInteraction: true
    };
    chrome.notifications.create("", options);
}