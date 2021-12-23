//
var app = angular.module('SFMarvel');
app.controller('testeSafraController', ['testeSafraAPIservice', '$location', testeSafraController]);

function testeSafraController(testeSafraAPIservice, $location) {
    var vm = this;

    vm.filtra = filtra;
    vm.inputVazio = inputVazio;
    vm.navegar = navegar;

    vm.listaPersonagens = [];
    vm.personagemFiltrado = [];

    iniciar();

    function iniciar() {
        getPersonagens();
    };

    function getPersonagens() {
        testeSafraAPIservice.buscaTudo().then(function (response) {
            vm.listaPersonagens = response.data.data.results;
            vm.personagemFiltrado = response.data.data.results;
        });
    };

    function filtra(pesquisa) {
        if(pesquisa !== undefined && pesquisa.length > 0){
            vm.personagemFiltrado = [];
            vm.personagemFiltrado = vm.listaPersonagens.filter(p => {
                if (p.name.toLowerCase().includes(pesquisa.toLowerCase())) {
                    return p;
                };
            });
        }
        else{
            vm.personagemFiltrado = vm.listaPersonagens;
        }
    };

    function inputVazio(e) {
        if (e.target.value === '') {
            getPersonagens();
        }
    };

    function navegar(id){
        $location.path('personagem/'+id);
    };
};