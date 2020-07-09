const fs = require('fs');
const yaml = require('yaml');

require.extensions['.yml'] = function (module, filename) {
    const content = fs.readFileSync(filename, 'utf-8');
    module.exports = yaml.parse(content);
}

require('./test');