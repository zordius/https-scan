https-scan
==========

A https validation tool based on phantomjs.

Install
=======

```
npm install https-scan
```

Usage
=====

Help you find out bad http:// resources in your https:// page!

```
https-scan https://www.yahoo.com/
```

Check on many urls.

```
https-scan https://www.yahoo.com/ https://google.com/
```

Use a file to check more than 1 url (1 url in 1 line)

```
https-scan --file url_list_file
```
