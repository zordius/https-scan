https-scan
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

Show me more final detail.

```
https-scan --file url_list_file --debug
```

Show me more testing detail.

```
https-scan --file url_list_file --verbose
```

Lower the concurrent level to 1 (test 1 after 1) .

```
https-scan --fil  url_list_file --verbose --queue 1
```

Do crazy concourrent scan (May drain lots of memory) .

```
https-scan --fil  url_list_file --verbose --queue 999
```

Show options.

```
https-scan
```
