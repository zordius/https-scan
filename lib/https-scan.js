/*
Copyrights for code authored by Yahoo! Inc. is licensed under the following
terms:
MIT License
Copyright (c) 2014 Yahoo! Inc. All Rights Reserved.
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

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
    console.log('HTTPS-SCAN-RESULT>>>' + JSON.stringify(resp));
    phantom.exit();
});
