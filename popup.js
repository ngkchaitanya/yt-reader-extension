chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
  var pageUrl = tabs[0].url;
  let watchString = "https://www.youtube.com";

  if (pageUrl.includes(watchString)) {
    var url = new URL(pageUrl);
    var ytId = url.searchParams.get("v");
    chrome.tabs.create({ url: "http://localhost:3000/v/" + ytId });
    chrome.popup;
  } else {
    var textElement = document.getElementById("messageText");
    textElement.innerHTML = "Kindly provide a valid youtube page";
  }
});
