var app = angular.module('prueba', ['ui.router', 'ngAnimate', 'ngResource', 'toastr']);

app.config(function ($stateProvider, $urlRouterProvider) {


    //SI LA URL QUE INGRESA EL USUARIO NO EXISTE SE REDIRIGE AQUI:
    $urlRouterProvider.otherwise("/home");
    //
    // VISTAS DE NUESTRA APLICACION
    $stateProvider
        .state('home', {
            url: '/home',
            controller: 'homeController',
            templateUrl: 'rutas/home.html'
        })

    .state('usuario', {
            url: "/usuario",
            controller: 'usuarioController',
            templateUrl: 'rutas/usuario.html'
        })
        .state('pastel', {
            url: "/:idUsuario/pastel",
            controller: 'pastelController',
            templateUrl: 'rutas/pastel.html'
        })
        /*;


            /*
            .state('cuenta.borrar', {
                url: "/borrar",
                templateUrl: "Angular/Rutas/borrar.html",
                controller: 'borrarcontroller'
            });*/


});