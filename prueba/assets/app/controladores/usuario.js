app.controller('usuarioController', ['$scope', '$http', 'usuarioFactory', 'toastr', function ($scope, $http, usuarioFactory, toastr) {


    $scope.nuevoUsuario = {
        nombre: '',
        apellido: '',
        edad: '',
        correo: '',
        ciudad: '',
        foto: ''

    }

    $scope.agregarNuevoUsuario = function () {

        usuarioFactory.save({
                nombre: $scope.nuevoUsuario.nombre,
                apellido: $scope.nuevoUsuario.apellido,
                edad: $scope.nuevoUsuario.edad,
                correo: $scope.nuevoUsuario.correo,
                ciudad: $scope.nuevoUsuario.ciudad,
                foto: $scope.nuevoUsuario.foto

            })
            .$promise.then(
                function correctoLlamoUsuarios(respuesta) {
                    console.log(respuesta);
                    //$scope.entrenadores.push(respuesta.data);
                    //$scope.usuarios.push(respuesta);
                    //toastr.warning('Mensaje', 'Hola');

                },
                function errorNoLlamoEntrenadores(error) {
                    console.log(error);
                });

    };



    console.log('Entraste a usuario');



    $scope.editarUsuario = function (usuario, indice) {
        console.log(entrenador);
        console.log(indice);
        var fecha;

        usuarioFactory.actualizar({
            idUsuario: usuario.id
        }, {
            nombre: usuario.nombre,
            apellido: usuario.apellido,
            edad: usuario.edad,
            correo: usuario.correo,
            ciudad: usuario.ciudad,
            foto: usuario.foto
        }).$promise.then(
            function correctoLlamoUsuarios(respuesta) {
                console.log(respuesta);

            },
            function errorNoLlamoUsuarios(error) {
                console.log(error);
            });




    };

}]);