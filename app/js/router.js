var app = angular.module('SFMarvel');
app.config(['$routeProvider',router]);
    function router ($routeProvider) {
    $routeProvider
    .when('/login', {
        templateUrl: '/template/login/login.html',
        controller: 'loginController as vm'
    })
    .when('/personagens', {
        templateUrl: '/template/listagem-geral.html',
        controller: 'testeSafraController as vm'
    })
    .when('/personagem/:id', {
        templateUrl: '/template/personagem-especifico.html',
        controller: 'personagemController as vm'
    })
    .otherwise('/personagens');
};

app.run(['$cookies','$rootScope', '$location', function($cookies,$rootScope, $location) {
    $rootScope.$on('$routeChangeStart', function(){
        var tokenValidado = $cookies.get('tokenValidado');
        if (!tokenValidado) {
            $location.path('login');
        }
    });
}]);