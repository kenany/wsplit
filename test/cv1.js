const wsplit = require('../');
const test = require('tape');
const fs = require('fs');
const path = require('path');
const isPlainObject = require('lodash.isplainobject');

const expected = {
  title: 'Castlevania Any%',
  attempts: 52,
  offset: 9.35,
  size: [152, 25],
  splits: [
    { title: 'Bat', time: 98.491084, best: 98.491084 },
    { title: 'Medusa', time: 226.837254, best: 128.34617 },
    { title: 'Mummies', time: 364.584693, best: 137.747439 },
    { title: 'Frankenstien', time: 494.721415, best: 130.13672199999996 },
    { title: 'Death', time: 756.304396, best: 261.582981 },
    { title: 'Dracula', time: 1052.755874, best: 296.45147799999995 }
  ],
  icons: ['', '', '', '', '', '']
};

test('parses a cv1 run', function(t) {
  t.plan(3);
  const str = fs.readFileSync(
    path.resolve(__dirname, 'fixtures', 'cv1.wsplit'),
    'utf8'
  );
  t.doesNotThrow(() => wsplit(str));
  const actual = wsplit(str);
  t.ok(isPlainObject(actual));
  t.deepEqual(actual, expected);
});
