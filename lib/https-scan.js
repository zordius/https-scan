var page = require('webpage').create(),
    system = require('system'),
    address = system.args[1],
    start = (new Date()).toLocaleString(),
    fails = 0,
    bads = 0;

page.onConsoleMessage = function(msg) {
    console.log('console:' + msg);
};

page.onResourceRequested = function(request) {
    var url = request.url,
        bad = url.match(/^http:\/\//);

    console.log((bad ? 'BAD: ' : 'good:') + url.replace(/^.{35,35}(.+).{35,35}$/, ' ... '));
    bads += bad ? 1 : 0;
};

page.open(address, function(status) {
    console.log('DONE!');
    if (status !== 'success') {
        console.log('PAGE STATUS:' + status);
    }
    phantom.exit(bads);
});
