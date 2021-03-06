// Karma configuration
// Generated on Wed Nov 02 2016 16:38:14 GMT+0800 (中国标准时间)

module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '.',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        /*frameworks: ['jasmine'],*/
        frameworks: ['mocha', 'chai'],

        // Plugin specific config
        client: {
            mocha: {
                //reporter: 'spec', // or html
                ui: 'bdd' // or tdd, etc
            }
        },


        // list of files / patterns to load in the browser
        files: [
            './bower_components/angular/angular.js',
            './bower_components/angular-mocks/angular-mocks.js',
            './multi-select.css',
            './multi-select.js',
            'test/testSpec/*.js',
            'test/*.html'
        ],


        // list of files to exclude
        exclude: [],

        plugins: [
            'karma-*'
        ],
        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: { /*'multi-select.htm': ['ng-html2js']*/
            '**/test/*.js': 'coverage'
         },



        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress','coverage'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    })
}
