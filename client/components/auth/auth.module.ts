'use strict';

angular.module('pollAppApp.auth', [
  'pollAppApp.constants',
  'pollAppApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
