# now.sh node-server error demo

With `require('jsonapi-server')`:

- https://brettdh-zeit-package-error.now.sh/
- https://brettdh-zeit-package-error.now.sh/_logs/
- https://brettdh-zeit-package-error.now.sh/_src/

```
{ Error: Cannot find module '/var/task/package.json'
    at webpackEmptyContext (/var/task/user/index.js:39005:9)
    at Object.module.exports.s (/var/task/user/index.js:6158:44)
    at __webpack_require__ (/var/task/user/index.js:21:30)
    at Object.module.exports.webpackEmptyContext.keys (/var/task/user/index.js:38989:14)
    at __webpack_require__ (/var/task/user/index.js:21:30)
    at module.exports.Object.defineProperty.value (/var/task/user/index.js:85:18)
    at Object.<anonymous> (/var/task/user/index.js:88:10)
    at Module._compile (module.js:652:30)
    at Object.Module._extensions..js (module.js:663:10)
    at Module.load (module.js:565:32) code: 'MODULE_NOT_FOUND' }
```

Without `require('jsonapi-server')` (and locally), it works fime:

- https://brettdh-zeit-package-no-error.now.sh/
- https://brettdh-zeit-package-no-error.now.sh/_logs/
- https://brettdh-zeit-package-no-error.now.sh/_src/

```
$ node --version
v8.11.4

$ node ./index.js &
[1] 46446

$ curl http://localhost:12345
Hello from Express.js!
```
