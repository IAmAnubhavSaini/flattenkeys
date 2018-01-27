# flattenkeys

Flatten out keys of an object - node module

## Usage

```javascript

  const flattenkeys = require('flattenkeys')

  flattenkeys({ a: 'a', b: { c: 'c', e: { f: 'f', g: 'g', h: { i: 'i'}} }, d: 'd' })
  [ 'a', 'b.c', 'b.e.f', 'b.e.g', 'b.e.h.i', 'd' ]

  flattenkeys({ a: 'a', b: { c: 'c', e: { f: 'f', g: 'g'} }, d: 'd' })
  [ 'a', 'b.c', 'b.e.f', 'b.e.g', 'd' ]

  flattenkeys({ a: 'a', b: { c: 'c', e: { f: 'f'} }, d: 'd' })
  [ 'a', 'b.c', 'b.e.f', 'd' ]

  flattenkeys({ a: 'a', b: { c: 'c' }, d: 'd' })
  [ 'a', 'b.c', 'd' ]

```

## License

MIT &copy; Git Faf 2018
