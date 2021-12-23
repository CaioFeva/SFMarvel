var app = angular.module('SFMarvel');
  app.service('testeSafraAPIservice',['$http', testeSafraAPIservice]);

   function testeSafraAPIservice($http) {

    var ergastAPI = {
      buscaTudo: buscaTudo,
      buscarPersonagemEspecifico: buscarPersonagemEspecifico,
      buscaHistoriaEspecifica: buscaHistoriaEspecifica
    };
    const config = {
      params:{
        apikey:'5a237863b3cc2061003cbbc4fe20dc06', 
        hash:'bd4b447a65ef5d6b174f87cf9db6d2db', 
        ts: 1
      },
      headers:{Accept: '*/*'}
    };

    function buscaTudo() {
      return $http.get('https://gateway.marvel.com/v1/public/characters', config);
    }
    
    function buscarPersonagemEspecifico(id) {
      return $http.get('https://gateway.marvel.com/v1/public/characters/'+id, config);
    }
    
    function buscaHistoriaEspecifica(id) {
      return $http.get(`https://gateway.marvel.com/v1/public/stories/${id}?ts=${config.params.ts}&apikey=${config.params.apikey}&hash=${config.params.hash}`);
    }
    return ergastAPI;
  };