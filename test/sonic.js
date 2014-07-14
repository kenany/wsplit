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
    { title: 'Horizon Hoax', splitTime: 589.37, duration: 589.37 },
    { title: 'PJSalt Factory', splitTime: 1192.89, duration: 603.5200000000001 },
    { title: 'Jester the Hedgehog', splitTime: 1722.99, duration: 530.0999999999999 },
    { title: 'Choo Choo', splitTime: 2296.25, duration: 573.26 },
    { title: 'Chill Zone', splitTime: 2910.73, duration: 614.48 },
    { title: 'Get Your Own Mansion Luigi!', splitTime: 3515.53, duration: 604.8000000000002 },
    { title: 'Hot Hot Lava', splitTime: 4165.79, duration: 650.2599999999998 },
    { title: 'Snow Sucks', splitTime: 4805.14, duration: 639.3500000000004 },
    { title: 'Robotniks Mean Storm Machine ', splitTime: 5639.23, duration: 834.0899999999992 },
    { title: 'References Zone/Done!', splitTime: 5951.51, duration: 312.28000000000065 }
  ],
  icons: ['', '', '', '', '', '', '', '', '', '']
};

test('parses a sonic run', function(t) {
  t.plan(3);
  var str = fs.readFileSync(path.resolve(__dirname, 'fixtures', 'sonic.wsplit'), 'utf8');
  t.doesNotThrow(function() {
    wsplit(str);
  });
  var actual = wsplit(str);
  t.ok(isPlainObject(actual));
  t.deepEqual(actual, expected);
});