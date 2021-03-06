//
var app = angular.module('SFMarvel');
app.controller('loginController', ['$cookies', 'loginService', '$location', loginController]);

function loginController($cookies, loginService, $location) {
    var vm = this;

    vm.login = login;

    iniciar();

    function iniciar() {
        vm.handleLogin = false;
        vm.token = $cookies.get('tokenValidado');
        if (vm.token) {
            $location.path('/personagens');
        }
        else{
            vm.handleLogin = true;
        };

    };

    function login(user, senha) {
        
        loginService.login(user, senha).then(function (response) {
            $cookies.put('tokenValidado', response.data.token);
            vm.token = response.data.token;
            if (vm.token){
                $location.path('/personagens');
            }
        });
    };
};