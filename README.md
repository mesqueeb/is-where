# is Where? 🙈

<a href="https://www.npmjs.com/package/is-where"><img src="https://img.shields.io/npm/v/is-where.svg" alt="Total Downloads"></a>
<a href="https://www.npmjs.com/package/is-where"><img src="https://img.shields.io/npm/dw/is-where.svg" alt="Latest Stable Version"></a>

Very simple & small JS environment check functions.

```
npm i is-where
```

<!-- Or for deno available at: `"deno.land/x/is_where"` -->

> Also check out [is-what 🙉](https://github.com/mesqueeb/is-what)

## Motivation

I built is-where because I kept Stack Overflowing the same things for every project.

I was looking for:

- A simple way to check which environment (Node, Browser, Deno, ...)
- A simple way to check for which browser (WebKit, Safari, Chrome, Firefox, ...)
- Functions that don't crash when executed in any environment
- 0 dependencies

## Usage

is-where is really easy to use, and most functions work just like you'd expect.

```js
// import functions you want to use like so:
import { isBrowser, isNode, isWebKit } from 'is-where'
```

```js
isBrowser() // true / false
isNode() // true / false
isWebKit() // true / false
```

### List of functions

Environments

- `isNode()`
- `isBrowser()`
- `isWebWorker()`
- `isJsDom()`
- `isDeno()`

Browsers

- `isWebKit()`
- `isSafari()`

## Meet the family

- [is-what 🙉](https://github.com/mesqueeb/is-what)
- [is-where 🙈](https://github.com/mesqueeb/is-where)
- [merge-anything 🥡](https://github.com/mesqueeb/merge-anything)
- [filter-anything ⚔️](https://github.com/mesqueeb/filter-anything)
- [find-and-replace-anything 🎣](https://github.com/mesqueeb/find-and-replace-anything)
- [compare-anything 🛰](https://github.com/mesqueeb/compare-anything)
- [copy-anything 🎭](https://github.com/mesqueeb/copy-anything)
- [flatten-anything 🏏](https://github.com/mesqueeb/flatten-anything)

## Source code

See the full source code [here](https://github.com/mesqueeb/is-where/blob/production/src/index.ts).
