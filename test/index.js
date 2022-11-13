const wsplit = require('../');
const test = require('tape');
const isFunction = require('lodash.isfunction');

test('exports a function', (t) => {
  t.plan(1);
  t.ok(isFunction(wsplit));
});
