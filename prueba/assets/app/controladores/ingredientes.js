app.controller('usuarioController', ['$scope', '$http', 'ingredientesFactory', 'toastr', function ($scope, $http, ingredientesFactory, toastr) {


    $scope.nuevoIngrediente = {
        nombre: ''

    }

    $scope.agregarIngrediente = function () {

        ingredientesFactory.save({
                nombre: $scope.nuevoIngrediente.nombre

            })
            .$promise.then(
                function correctoLlamoIngredientes(respuesta) {
                    console.log(respuesta);
                    //$scope.entrenadores.push(respuesta.data);
                    //$scope.usuarios.push(respuesta);
                    //toastr.warning('Mensaje', 'Hola');

                },
                function errorNoLlamoIngredientes(error) {
                    console.log(error);
                });

    };

    ingredientesFactory.query().$promise.then(
        function correctoLlamoIngredientes(respuesta) {
            console.log(respuesta);
            //toastr.success('Exito', 'Se recobraron: ' + respuesta.length + ' Usuarios');
            // $scope.entrenadores = respuesta.data;
            $scope.ingredientes = respuesta;

            //console.log($scope.usuarios);
        },
        function errorNoLlamoPastel(error) {
            console.log(error);
            //toastr.error('Error', 'Error inesperado del servidor');
        });

    console.log('Entraste a ingredientes');


}]);