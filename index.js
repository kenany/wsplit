var parser = require('./lib/parser');

function wsplit(input) {
  var nodes = parser.parse(input.toString());

  nodes['size'][0] = parseInt(nodes['size'][0], 10);
  nodes['size'][1] = parseInt(nodes['size'][1], 10);

  return nodes;
}

module.exports = wsplit;