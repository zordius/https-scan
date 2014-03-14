https-scan
==========

A https validation tool based on phantomjs.

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

Show options.

```
https-scan
```
