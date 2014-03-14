var page = require('webpage').create(),
    system = require('system'),
    address = system.args[1],
    start = (new Date()).toLocaleString(),
    fails = 0,
    bads = 0;

page.onConsoleMessage = function(msg) {
    console.warn('console:' + msg);
};

page.onResourceRequested = function(request) {
    var url = request.url,
        out = url.replace(/^(.{30,30}).{10,}(.{30,30})$/, '$1 ... $2');

    if (url.match(/^http:\/\//)) {
        bads++;
        console.warn('BAD: ' + out);
    } else {
        console.log('good:' + out);
    }
};

page.open(address, function(status) {
    console.log('PAGE STATUS:' + status);
    console.log('BAD:' + bads);
    phantom.exit(bads);
});
