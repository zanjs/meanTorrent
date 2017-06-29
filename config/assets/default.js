'use strict';

/* eslint comma-dangle:[0, "only-multiline"] */

module.exports = {
  client: {
    lib: {
      css: [
        // bower:css
        'public/lib/bootstrap/dist/css/bootstrap.css',
        'public/lib/bootstrap/dist/css/bootstrap-theme.css',
        'public/lib/angular-ui-notification/dist/angular-ui-notification.css',
        'public/lib/Ionicons/css/ionicons.css',
        //img cropper
        'public/lib/ui-cropper/compile/unminified/ui-cropper.css',
        //highlight
        'public/lib/highlightjs/styles/default.css',
        //flag-icon
        'public/lib/flag-icon-css/css/flag-icon.css',
        //json-tree
        'public/lib/angular-json-tree/dist/angular-json-tree.css',
        //side-overlay
        'public/lib/angular-side-overlay/dist/angular-side-overlay.css'
        // endbower
      ],
      js: [
        // bower:js
        'public/lib/jquery/dist/jquery.js',
        'public/lib/bootstrap/dist/js/bootstrap.js',
        'public/lib/angular/angular.js',
        'public/lib/angular-animate/angular-animate.js',
        'public/lib/angular-bootstrap/ui-bootstrap-tpls.js',
        'public/lib/ng-file-upload/ng-file-upload.js',
        'public/lib/angular-messages/angular-messages.js',
        'public/lib/angular-mocks/angular-mocks.js',
        'public/lib/angular-resource/angular-resource.js',
        'public/lib/angular-ui-notification/dist/angular-ui-notification.js',
        'public/lib/angular-ui-router/release/angular-ui-router.js',
        'public/lib/owasp-password-strength-test/owasp-password-strength-test.js',
        'public/lib/bootstrap-filestyle/src/bootstrap-filestyle.js',
        'public/lib/angular-sanitize/angular-sanitize.js',
        //marked
        'public/lib/marked/lib/marked.js',
        'public/lib/angular-marked/dist/angular-marked.js',
        //moment
        'public/lib/moment/min/moment-with-locales.js',
        'public/lib/angular-moment/angular-moment.js',
        //file saver
        'public/lib/angular-file-saver/dist/angular-file-saver.js',
        'public/lib/angular-file-saver/dist/angular-file-saver.bundle.js',
        //img cropper
        'public/lib/ui-cropper/compile/unminified/ui-cropper.js',
        //highlight
        'public/lib/highlightjs/highlight.pack.js',
        //local-storage
        'public/lib/angular-local-storage/dist/angular-local-storage.js',
        //translate
        'public/lib/angular-translate/angular-translate.js',
        //popup overlay
        'public/lib/jquery-popup-overlay/jquery.popupoverlay.js',
        //json-tree
        'public/lib/angular-json-tree/dist/angular-json-tree.js',
        //side-overlay
        'public/lib/angular-side-overlay/dist/angular-side-overlay.js'

        // endbower
      ],
      tests: ['public/lib/angular-mocks/angular-mocks.js']
    },
    css: [
      'modules/*/client/{css,less,scss}/*.css'
    ],
    less: [
      'modules/*/client/less/*.less'
    ],
    sass: [
      'modules/*/client/scss/*.scss'
    ],
    js: [
      'modules/core/client/app/config.js',
      'modules/core/client/app/init.js',
      'modules/core/client/app/trans-string-cn.js',
      'modules/core/client/app/trans-string-en.js',
      'modules/*/client/*.js',
      'modules/*/client/**/*.js'
    ],
    img: [
      'modules/**/*/img/**/*.jpg',
      'modules/**/*/img/**/*.png',
      'modules/**/*/img/**/*.gif',
      'modules/**/*/img/**/*.svg'
    ],
    views: ['modules/*/client/views/**/*.html'],
    templates: ['build/templates.js']
  },
  server: {
    gulpConfig: ['gulpfile.js'],
    allJS: ['server.js', 'config/**/*.js', 'modules/*/server/**/*.js'],
    models: 'modules/*/server/models/**/*.js',
    routes: ['modules/!(core)/server/routes/**/*.js', 'modules/core/server/routes/**/*.js'],
    sockets: 'modules/*/server/sockets/**/*.js',
    config: ['modules/*/server/config/*.js'],
    policies: 'modules/*/server/policies/*.js',
    views: ['modules/*/server/views/*.html']
  }
};
