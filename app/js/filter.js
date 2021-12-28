var app = angular.module('SFMarvel');
app.filter('upperCase', function (){
    return function (name){
        return name.toUpperCase();
    };
});
