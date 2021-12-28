//
var app = angular.module('SFMarvel');
app.controller('deslogarController', ['$cookies', '$location', deslogarController]);

function deslogarController($cookies,  $location) {
    var vm = this;
    vm.deslogar = deslogar;


    function deslogar() {
        $cookies.remove('tokenValidado');
        $location.path('login');
    }
};