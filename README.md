https-scan [![Dependency Status](https://david-dm.org/zordius/https-scan.png)](https://david-dm.org/zordius/https-scan)
==========

A https validation tool based on phantomjs. It can detect more dynamic loaded resources than static HTML analyze.

Install
-------

```
npm install https-scan
```

Usage
-----

**Help you find out bad http:// resources in your https:// page!**

Test on one url.

```
https-scan https://www.yahoo.com/
```

Check on many urls.

```
https-scan https://www.yahoo.com/ https://google.com/
```

Use a file to check more urls (1 url in 1 line).

```
https-scan --file url_list_file
```

Keep slient when testing.

```
https-scan --file url_list_file --slient
```

Show me more final detail.

```
https-scan --file url_list_file --debug
```

Show me more bad resources detail.

```
https-scan --file url_list_file --verbose
```

Lower the concurrent level to 1 (test one after another) .

```
https-scan --fil  url_list_file --verbose --concurrent 1
```

Do crazy concourrent scan (May drain lots of memory) .

```
https-scan --fil  url_list_file --verbose --concurrent 999
```

Show options.

```
https-scan
```
