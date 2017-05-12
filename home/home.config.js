'use strict';

import HomeCtrl from './home.controller';
import angular from 'angular';

function HomeConfig($stateProvider) {
    $stateProvider.state('home', {
        url: '/home',
        views: {
            app: {
                controller: 'HomeCtrl',
                template: require('./home.html'),
                controllerAs: 'home'
            }
        }
    });
}

export default angular.module('home', ['ui.router'])
    .config(HomeConfig)
    .controller('HomeCtrl', HomeCtrl)
    .name;
