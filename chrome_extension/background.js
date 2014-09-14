chrome.browserAction.onClicked.addListener(action);

var action = function(t, url) {
  console.log('YYYAAAAAAAAAAAA');
  chrome.tabs.create({
    'url': url
  }, function(tab) {
    var headless = tab;
    chrome.tabs.executeScript(tab.id, {
      file: 'script.js'
    }, function () {
      setTimeout(function() {
        chrome.tabs.remove(headless.id);
      }, 6000);
    });
  });
};

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.greeting == "hello") {
      action(sender.tab, request.url);
      // sendResponse({'farewell': 'goodbye'});
    }
  });
