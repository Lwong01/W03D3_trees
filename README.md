# AJAX

Asynchronous JavaScript and XML

* What data do we send in an HTTP 1.1 request?
  - Answer: Plain text

* It's asynchronous
  - We don't have wait for a response before doing the next thing.
* JavaScript


* `XMLHttpRequest`
  - https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest
  - api kind of sucked, so we have `$.ajax`
* `$.ajax`
```js
$.ajax({
  method: "POST",
  url: "something",
  data: { name: "John", location: "Boston" }
}).done(function( msg ) {
  alert( "Data Saved: " + msg );
});
```

* hijax.
  - hijack the default behavour of a form so we can perform asynchronous requests. 

* Fetch API
  - is the new api that browsers implement by default.

* JSON
  - strings
    - '{"tweet-text": "something cool said by Kanye west"}'
* url encoded
  - "tweet-text=something%20cool%20said%20by%20Kanye%20west"


* html special characters:

* `<` &lt;
* `>` &gt;
