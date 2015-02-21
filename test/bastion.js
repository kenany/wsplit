var wsplit = require('../');
var test = require('tape');
var fs = require('fs');
var path = require('path');
var isPlainObject = require('lodash.isplainobject');

var expected = {
  title: 'Bastion ASL',
  attempts: 8,
  offset: 0.0,
  size: [152, 25],
  splits: [
    { title: 'Wharf district', time: 220.575504, best: 220.575504 },
    { title: 'The workmen ward', time: 298.795961, best: 78.22045699999998 },
    { title: 'The melting pot', time: 534.950132, best: 236.15417100000008 },
    { title: 'The sundown path', time: 656.324156, best: 121.37402399999996 },
    { title: 'The hanging gardens', time: 749.288438, best: 92.96428200000003 },
    { title: 'Cinderbrick fort', time: 895.178941, best: 145.89050299999997 },
    { title: 'Pyth orchard', time: 971.952892, best: 76.77395100000001 },
    { title: 'Langston river', time: 1235.34769, best: 263.39479800000004 },
    { title: 'Prosper bluff', time: 1347.17819, best: 111.83050000000003 },
    { title: 'The wild outskirts', time: 1464.612758, best: 117.4345679999999 },
    { title: 'Jawson bog', time: 1812.313379, best: 347.70062099999996 },
    { title: 'Roathus lagoon', time: 1960.48141, best: 148.16803100000016 },
    { title: 'Point lemaign', time: 2231.985804, best: 271.5043939999998 },
    { title: 'Coulford cauldron', time: 2370.402859, best: 138.4170549999999 },
    { title: 'Mount zand', time: 2461.867821, best: 91.46496200000001 },
    { title: 'Burstone quarry', time: 2640.548554, best: 178.68073300000015 },
    { title: 'Urzenda gate', time: 2883.613746, best: 243.06519200000002 },
    { title: 'Zultens hollow', time: 3014.972933, best: 131.35918700000002 },
    { title: 'The tazal terminal', time: 3578.599398, best: 563.6264649999998 }
  ],
  icons: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
};

test('parses a bastion run', function(t) {
  t.plan(3);
  var str = fs.readFileSync(path.resolve(__dirname, 'fixtures', 'bastion.wsplit'), 'utf8');
  t.doesNotThrow(function() {
    wsplit(str);
  });
  var actual = wsplit(str);
  t.ok(isPlainObject(actual));
  t.deepEqual(actual, expected);
});
