window.onload = function () {
    document.body.style.backgroundColor="green";

    var getLinkByText = function (text) {
        var aTags = document.getElementsByTagName("a");

        for (var i = 0; i < aTags.length; i++) {
            if (aTags[i].textContent == text) {
                return aTags[i];
            }
        }
    };

    function delay(ms) {
        var cur_d = new Date();
        var cur_ticks = cur_d.getTime();
        var ms_passed = 0;
        while(ms_passed < ms) {
            var d = new Date();  // Possible memory leak?
            var ticks = d.getTime();
            ms_passed = ticks - cur_ticks;
            d = null;  // Prevent memory leak?
        }
    }

    // location.href = 'http://www.penncycle.org/logout/';
    // console.log(location);


    var progress = document.createElement('h1');
    progress.style.position = 'absolute';
    progress.style.top = 0;
    progress.style.left = 0;
    progress.style.opacity = 0.9;
    progress.style.backgroundColor = 'white';
    progress.style.height = '100%';
    progress.style.width = '100%';
    progress.style.pointerEvents = 'none';
    progress.style.margin = 0;
    progress.style.padding = '200px';
    progress.innerHTML = 'Automatically syncing your preferences...';

    document.elementFromPoint(0).appendChild(progress);


    setTimeout(function() {
        progress.innerHTML += '<br><br>';
        progress.innerHTML += 'Done.';
    }, 3000);

    // document.getElementsByClassName('icon-remove-sign')[0].click();
};
