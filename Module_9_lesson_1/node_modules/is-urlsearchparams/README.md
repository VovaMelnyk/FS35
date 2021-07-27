# is-urlsearchparams [![NPM Version][npm-image]][npm-url] ![File Size][filesize-image] [![Build Status][travis-image]][travis-url] [![Dependency Monitor][greenkeeper-image]][greenkeeper-url]

> Determines whether a value is a [`URLSearchParams`](https://mdn.io/URLSearchParams) instance.


Works cross-realm/iframe and despite `Symbol.toStringTag`.


## Installation

[Node.js](https://nodejs.org) `>= 8` is required. To install, type this at the command line:
```shell
npm install is-urlsearchparams
```


## Usage

```js
const isURLSearchParams = require('is-urlsearchparams');

isURLSearchParams('param=value');  //-> false
isURLSearchParams(new URLSearchParams('param=value'));  //-> true
```

Optionally, acceptance can be extended to incomplete `URLSearchParams` implementations that lack `entries`, `sort` and `values` methods (which are common in many modern web browsers):
```js
const params = new URLSearchParams('param=value');

console.log(params.sort);  //-> undefined

isURLSearchParams.lenient(params);  //-> true
```


[npm-image]: https://img.shields.io/npm/v/is-urlsearchparams.svg
[npm-url]: https://npmjs.com/package/is-urlsearchparams
[filesize-image]: https://img.shields.io/badge/bundle-3kB%20gzipped-blue.svg
[travis-image]: https://img.shields.io/travis/stevenvachon/is-urlsearchparams.svg
[travis-url]: https://travis-ci.org/stevenvachon/is-urlsearchparams
[greenkeeper-image]: https://badges.greenkeeper.io/stevenvachon/is-urlsearchparams.svg
[greenkeeper-url]: https://greenkeeper.io/
