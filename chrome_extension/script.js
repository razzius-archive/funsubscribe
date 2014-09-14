document.body.style.backgroundColor="green";

var getLinkByText = function (text) {
    var aTags = document.getElementsByTagName("a");

    for (var i = 0; i < aTags.length; i++) {
        if (aTags[i].textContent == text) {
            return aTags[i];
        }
    }
};


// location.href = 'http://www.penncycle.org/logout/';
// console.log(location);

document.getElementsByClassName('icon-remove-sign')[0].click();
