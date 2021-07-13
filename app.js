import angular from 'angular';
import '@uirouter/angularjs';

// Import your app stylesheets
import './style.css';

// Import your app functionality
import './home'

// Create and bootstrap application
const requires = [
  'ui.router',
  'home'
];

window.app = angular.module('app', requires);


// see also: https://github.com/ded/script.js
import f from "./test/testik.js"
console.log(f())

angular.bootstrap(document.getElementById('app'), ['app']);

// import "~/test/vizone.js"