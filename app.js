'use strict';

import angular from 'angular';
import home from './home/home.config';

function AppCtrl() {
    var that = this;

    that.foo = 'bar';
}

var app = angular.module('app', [home]);
app.controller('AppCtrl', AppCtrl);