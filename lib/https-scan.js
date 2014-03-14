var page = require('webpage').create(),
    system = require('system'),
    address = system.args[1],
    resp = {
        start_time: (new Date()).toLocaleString(),
        resources: [],
        bad: [],
        good: [],
        console: []
    };

page.onConsoleMessage = function(msg) {
    resp.console.push(msg);
};

page.onResourceRequested = function(request) {
    var url = request.url,
        out = url.replace(/^(.{30,30}).{10,}(.{30,30})$/, '$1 ... $2');

    resp.resources.push(request);

    if (url.match(/^http:\/\//)) {
        resp.bad.push(out);
    } else {
        resp.good.push(out);
    }
};

page.open(address, function(status) {
    resp.stats = status;
    console.log(JSON.stringify(resp));
    phantom.exit();
});
