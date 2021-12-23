//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: './app',

    files: [
      'app/spec/view2.spec.js',
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['PhantonJS'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-phantomjs-launcher'
    ]

  });
};


