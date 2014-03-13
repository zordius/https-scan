var debug = require('debug'),
    debug_load = debug('https-scan:load'),
    debug_fail = debug('https-scan:fail'),
    debug_bad = debug('https-scan:bad'),
    debug_log = debug('https-scan:console');

module.exports = function (webpage, address, done) {
    var page = webpage.create(),
        resp = {
            status: null,
            start: (new Date()).toLocaleString(),
            end: 0,
            reqs: [],
            fails: [],
            log: [],
            bad: []
        };

    page.onUrlChanged = function(url) {
        debug_load(url);
    };

    page.onConsoleMessage = function(msg) {
        debug_log(msg);
        resp.log.push(msg);
    };

    page.onResourceRequested = function(request) {
        var url = request.url;

        resp.reqs.push(url);

        if (url.match(/^http:\/\//)) {
            resp.bad.push(url);
            debug_bad(url);
        }
    };

    page.open(url, function(status) {
        resp.status = status;
        if (status !== 'success') {
            return done(resp);
        }

        page.evaluate(function () {
            window.scrollTo(0, 99999);
        });

        done(resp);
    });
};
