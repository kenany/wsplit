var wsplit = require('../');
var test = require('tape');
var fs = require('fs');
var path = require('path');
var isPlainObject = require('lodash.isplainobject');

var expected = {
  title: 'Castlevania Any%',
  attempts: 52,
  offset: 9.35,
  size: [152, 25],
  splits: [
    { title: 'Bat', splitTime: 98.491084, duration: 98.491084 },
    { title: 'Medusa', splitTime: 226.837254, duration: 128.34617 },
    { title: 'Mummies', splitTime: 364.584693, duration: 137.747439 },
    { title: 'Frankenstien', splitTime: 494.721415, duration: 130.13672199999996 },
    { title: 'Death', splitTime: 756.304396, duration: 261.582981 },
    { title: 'Dracula', splitTime: 1052.755874, duration: 296.45147799999995 }
  ],
  icons: ['', '', '', '', '', '']
};

test('parses a cv1 run', function(t) {
  t.plan(3);
  var str = fs.readFileSync(path.resolve(__dirname, 'fixtures', 'cv1.wsplit'), 'utf8');
  t.doesNotThrow(function() {
    wsplit(str);
  });
  var actual = wsplit(str);
  t.ok(isPlainObject(actual));
  t.deepEqual(actual, expected);
});