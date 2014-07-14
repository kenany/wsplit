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
    { title: 'Wharf district', splitTime: 220.575504, duration: 220.575504 },
    { title: 'The workmen ward', splitTime: 298.795961, duration: 78.22045699999998 },
    { title: 'The melting pot', splitTime: 534.950132, duration: 236.15417100000008 },
    { title: 'The sundown path', splitTime: 656.324156, duration: 121.37402399999996 },
    { title: 'The hanging gardens', splitTime: 749.288438, duration: 92.96428200000003 },
    { title: 'Cinderbrick fort', splitTime: 895.178941, duration: 145.89050299999997 },
    { title: 'Pyth orchard', splitTime: 971.952892, duration: 76.77395100000001 },
    { title: 'Langston river', splitTime: 1235.34769, duration: 263.39479800000004 },
    { title: 'Prosper bluff', splitTime: 1347.17819, duration: 111.83050000000003 },
    { title: 'The wild outskirts', splitTime: 1464.612758, duration: 117.4345679999999 },
    { title: 'Jawson bog', splitTime: 1812.313379, duration: 347.70062099999996 },
    { title: 'Roathus lagoon', splitTime: 1960.48141, duration: 148.16803100000016 },
    { title: 'Point lemaign', splitTime: 2231.985804, duration: 271.5043939999998 },
    { title: 'Coulford cauldron', splitTime: 2370.402859, duration: 138.4170549999999 },
    { title: 'Mount zand', splitTime: 2461.867821, duration: 91.46496200000001 },
    { title: 'Burstone quarry', splitTime: 2640.548554, duration: 178.68073300000015 },
    { title: 'Urzenda gate', splitTime: 2883.613746, duration: 243.06519200000002 },
    { title: 'Zultens hollow', splitTime: 3014.972933, duration: 131.35918700000002 },
    { title: 'The tazal terminal', splitTime: 3578.599398, duration: 563.6264649999998 }
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