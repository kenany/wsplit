var wsplit = require('../');
var test = require('tape');
var fs = require('fs');
var path = require('path');
var isPlainObject = require('lodash.isplainobject');

var expected = {
  title: 'Sonic After the Sequel Sonic - Story Mode',
  attempts: 14,
  offset: 0.0,
  size: [152, 25],
  splits: [
    { title: 'Horizon Hoax', time: 589.37, best: 589.37 },
    { title: 'PJSalt Factory', time: 1192.89, best: 603.5200000000001 },
    { title: 'Jester the Hedgehog', time: 1722.99, best: 530.0999999999999 },
    { title: 'Choo Choo', time: 2296.25, best: 573.26 },
    { title: 'Chill Zone', time: 2910.73, best: 614.48 },
    { title: 'Get Your Own Mansion Luigi!', time: 3515.53, best: 604.8000000000002 },
    { title: 'Hot Hot Lava', time: 4165.79, best: 650.2599999999998 },
    { title: 'Snow Sucks', time: 4805.14, best: 639.3500000000004 },
    { title: 'Robotniks Mean Storm Machine ', time: 5639.23, best: 834.0899999999992 },
    { title: 'References Zone/Done!', time: 5951.51, best: 312.28000000000065 }
  ],
  icons: ['', '', '', '', '', '', '', '', '', '']
};

test('parses a sonicats run', function(t) {
  t.plan(3);
  var str = fs.readFileSync(path.resolve(__dirname, 'fixtures', 'sonicats.wsplit'), 'utf8');
  t.doesNotThrow(function() {
    wsplit(str);
  });
  var actual = wsplit(str);
  t.ok(isPlainObject(actual));
  t.deepEqual(actual, expected);
});
