console.log(":D)");
chrome.extension.sendMessage({greeting: "hello"}, function(response) {
  console.log(response.farewell);
});
