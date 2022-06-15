const leolint = require('@leo/lint');
const path = require('path');

module.exports = {
  builder: {
    name: '@leo/leo-react-builder',
    version: '0.2.0-alpha.5',
    options: {
      entry: ['src/index.js'],
      publicPath: '',
      cssPublicPath: '../',
      template: {
        path: 'public/index.template.html',
      },
      dev: {
        https: false,
        host: 'localhost',
        port: 3000,
      },
      quiet: false,
      zip: true,
      sourceMap: true,
      target: ['web', 'es5'],
    },
  },
  publisher: {
    options: {
      distDir: 'dist/cash-reward',
    },
  },
  async lintAction() {
    const scanRes = await leolint.scan({
      cwd: path.resolve(__dirname),
      include: './src',
      fix: false,
      quiet: false,
      outputReport: false,
    });
    return scanRes.errorCount === 0;
  },
};
