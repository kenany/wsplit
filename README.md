# wsplit

Wsplit file parser.

## Example

``` javascript
var wsplit = require('wsplit');
var fs = require('fs');

var str = fs.readFileSync('sonic.wsplit', 'utf8');

wsplit(str);
// => {
// =>   title: 'Sonic After the Sequel Sonic - Story Mode',
// =>   attempts: 14,
// =>   offset: 0.0,
// =>   size: [152, 25],
// =>   splits: [
// =>     {
// =>       title: 'Horizon Hoax',
// =>         oldTime: 0,
// =>         runTime: 589.37,
// =>         bestTime: 589.37
// =>     },
// =>     {
// =>       title: 'PJSalt Factory',
// =>       oldTime: 0,
// =>       runTime: 1192.89,
// =>       bestTime: 603.5200000000001
// =>     },
// =>     {
// =>       title: 'Jester the Hedgehog',
// =>       oldTime: 0,
// =>       runTime: 1722.99,
// =>       bestTime: 530.0999999999999
// =>     },
// =>     {
// =>       title: 'Choo Choo',
// =>       oldTime: 0,
// =>       runTime: 2296.25,
// =>       bestTime: 573.26
// =>     },
// =>     {
// =>       title: 'Chill Zone',
// =>       oldTime: 0,
// =>       runTime: 2910.73,
// =>       bestTime: 614.48
// =>     },
// =>     {
// =>       title: 'Get Your Own Mansion Luigi!',
// =>       oldTime: 0,
// =>       runTime: 3515.53,
// =>       bestTime: 604.8000000000002
// =>     },
// =>     {
// =>       title: 'Hot Hot Lava',
// =>       oldTime: 0,
// =>       runTime: 4165.79,
// =>       bestTime: 650.2599999999998
// =>     },
// =>     {
// =>       title: 'Snow Sucks',
// =>       oldTime: 0,
// =>       runTime: 4805.14,
// =>       bestTime: 639.3500000000004
// =>     },
// =>     {
// =>       title: 'Robotniks Mean Storm Machine ',
// =>       oldTime: 0,
// =>       runTime: 5639.23,
// =>       bestTime: 834.0899999999992
// =>     },
// =>     {
// =>       title: 'References Zone/Done!',
// =>       oldTime: 0,
// =>       runTime: 5951.51,
// =>       bestTime: 312.28000000000065
// =>     }
// =>   ],
// =>   icons: ['', '', '', '', '', '', '', '', '', '']
// => }
```

## Installation

``` bash
$ npm install wsplit
```

## API

``` javascript
var wsplit = require('wsplit');
```

### `wsplit(input)`

Parses _String_ `input` and returns an _Object_.