app.controller('homeController', ['$scope', 'usuarioFactory', 'toastr', function ($scope, usuarioFactory, toastr) {
    console.log('Entraste a home');
    usuarioFactory.query().$promise.then(
        function correctoLlamoUsuarios(respuesta) {
            console.log(respuesta);
            //toastr.success('Exito', 'Se recobraron: ' + respuesta.length + ' Usuarios');
            // $scope.entrenadores = respuesta.data;
            $scope.usuarios = respuesta;

            //console.log($scope.usuarios);
        },
        function errorNoLlamoUsuarios(error) {
            console.log(error);
            //toastr.error('Error', 'Error inesperado del servidor');
        });
}]);