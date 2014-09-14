$(document).on('click', '.btn-danger', function(e) {
  $(".btn-danger").removeClass("btn-danger").addClass("btn-success").text("Renew");
  console.log("YES EYS");
  var $btn = $(e.target);
  var url = $btn.data('url');
  console.log(url);
  chrome.extension.sendMessage({'url': url, 'greeting': 'hello'}, function(response) {
    // console.log(response.farewell);
  });
});

console.log(":D)");
