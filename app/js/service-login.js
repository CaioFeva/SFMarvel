var app = angular.module('SFMarvel');
app.service('loginService', ['$http', loginService]);

function loginService($http) {

  var loginServiceAPI = {
    login: login
  };
  
  var url = 'https://sf-marvel.herokuapp.com/#!/login' 


  function login(user, senha) {
    return $http.post(url, { user: user, password: senha });
  };

  return loginServiceAPI;
};