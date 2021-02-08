---
date: '2019-05-07'
title: 'Can I send HTTP GET request with body from browser?'
tags: ['web']
lang: 'en'
tweetId: '1358803248690388995'
---

TLDR; No.

Despite the fact that HTTP/1.1 spec seems to not restrict GET requests with body any longer accordingly to this [thread](https://stackoverflow.com/questions/978061/http-get-with-request-body), this seems to be still not supported by browsers nowadays. Doesn't matter whether you use `XMLHttpRequest` or `fetch` api. The following browsers were tested: Chrome 74, Firefox 66, Safari 12. Below are examples with output for `fetch` api:

## Chrome 74

```
TypeError: Failed to execute 'fetch' on 'Window': Request with GET/HEAD method cannot have body
```

## Firefox 66

```
TypeError: HEAD or GET Request cannot have a body
```

## Safari 12

```
TypeError: Request has method 'GET' and cannot have a body
```

Just consider this when designing your public api endpoints.
