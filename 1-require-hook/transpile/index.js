const fs = require('fs');
const babel = require('@babel/core');

const oldJSloader = require.extensions['.js'];
require.extensions['.js'] = function (module, filename) {
    const content = fs.readFileSync(filename, 'utf-8');

    if (filename.includes('esnext')) {
        const transpiled = babel.transformSync(content, {
            plugins: ['@babel/plugin-proposal-do-expressions']
        });

        module._compile(transpiled.code, filename);
    } else {
       oldJSloader(module, filename);
    }
}

require('./test.esnext.js');
