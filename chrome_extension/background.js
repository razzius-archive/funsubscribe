chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.create({
    'url': 'http://www.penncycle.org/welcome'
  }, function(tab) {
    chrome.tabs.executeScript(tab.id, {
      file: 'script.js'
    });
  });
});
