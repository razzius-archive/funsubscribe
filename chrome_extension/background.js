chrome.browserAction.onClicked.addListener(action);

var action = function(t) {
  chrome.tabs.create({
    'url': 'http://www.penncycle.org/welcome'
  }, function(tab) {
    var headless = tab;
    chrome.tabs.executeScript(tab.id, {
      file: 'script.js'
    }, function () {
      setTimeout(function() {
        chrome.tabs.remove(headless.id);
      }, 2000);
    });
  });
};

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.greeting == "hello") {
      action(sender.tab);
      sendResponse({farewell: "goodbye"});
    }
  });
