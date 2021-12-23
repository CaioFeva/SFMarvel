//
var app = angular.module('SFMarvel');
app.controller('personagemController', ['testeSafraAPIservice', '$routeParams', '$location', personagemController]);

function personagemController(testeSafraAPIservice, $routeParams, $location) {
    var vm = this;

    vm.biografia = biografia;
    vm.navegar = navegar;

    vm.listaPersonagemEspecifico = {};
    vm.foto = {};
    vm.resultado = [];
    

    iniciar();

    function iniciar() {
        console.log('chamou', $routeParams.id);
        var id = $routeParams.id;
        buscarPersonagemEspecifico(id);
        buscaHistoriaEspecifica(19947);
    }

    function buscarPersonagemEspecifico(id) {
        testeSafraAPIservice.buscarPersonagemEspecifico(id).then(function (response) {
            vm.listaPersonagemEspecifico = response;
            vm.foto = vm.listaPersonagemEspecifico.data.data.results[0].thumbnail;
            vm.resultado = vm.listaPersonagemEspecifico.data.data.results[0];
        });
    };

    function biografia(){
        console.log('entrou', vm.resultado.urls[1].url); 
        window.open(vm.resultado.urls[1].url);
    }

    function buscaHistoriaEspecifica(id){
        testeSafraAPIservice.buscaHistoriaEspecifica(id).then(function(response){
            console.log('testeeeeeee',response);
        })
    }
    function navegar(){
        $location.path('personagens/');
    };

};