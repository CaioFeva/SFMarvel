var app = angular.module('SFMarvel');
app.config(['$routeProvider',router]);
    function router ($routeProvider) {
    $routeProvider
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