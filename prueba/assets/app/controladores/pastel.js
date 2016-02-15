app.controller('pastelController', ['$scope', '$http', 'pastelFactory', 'toastr', function ($scope, $http, pastelFactory, toastr) {

    //    $scope.nombrePersonal = "Pepito";

    $scope.nuevoPastel = {
        nombre: '',
        tipo: '',
        foto: '',
        preparacion: '',
        ingredientes: ''


    }

    $scope.agregarNuevoPastel = function () {

            pastelFactory.save({
                    nombre: $scope.nuevoPastel.nombre,
                    tipo: $scope.nuevoPastel.tipo,
                    foto: $scope.nuevoPastel.foto,
                    preparacion: $scope.nuevoPastel.preparacion,
                    ingredientes: $scope.nuevoPastel.ingredientes


                })
                .$promise.then(
                    function correctoLlamoPasteles(respuesta) {
                        console.log(respuesta);
                        //$scope.entrenadores.push(respuesta.data);
                        //$scope.usuarios.push(respuesta);
                        //toastr.warning('Mensaje', 'Hola');

                    },
                    function errorNoLlamoPasteles(error) {
                        console.log(error);
                    });


            //        $http({
            //            method:'POST',
            //            url:'http://localhost:1337/Entrenador',
            //            data:{
            //                nombre: $scope.nuevoUsuario.nombre,
            //                apellido: $scope.nuevoUsuario.apellido,
            //                fechaNacimiento: $scope.nuevoUsuario.fechaNacimiento
            //            }
            //        }).then(
            //        function correctoLlamoEntrenadores(respuesta){
            //            
            //            console.log(respuesta);
            //            
            //            $scope.entrenadores.push(respuesta.data);
            //            
            //            $scope. nuevoUsuario = {
            //                                        nombre:'',
            //                                        apellido:'',
            //                                        fechaNacimiento:''
            //                                    }
            //
            //        },
            //        function errorNoLlamoEntrenadores(error){
            //            console.log(error);
            //        });




        }
        //    usuarioFactory.query().$promise.then(
        //        function correctoLlamoUsuarios(respuesta) {
        //            console.log(respuesta);
        //            toastr.success('Exito', 'Se recobraron: ' + respuesta.length + ' Usuarios');
        //            // $scope.entrenadores = respuesta.data;
        //            $scope.usuarios = respuesta;
        //
        //            console.log($scope.usuarios);
        //        },
        //        function errorNoLlamoUsuarios(error) {
        //            console.log(error);
        //            toastr.error('Error', 'Error inesperado del servidor');
        //        });
    pastelFactory.query().$promise.then(
        function correctoLlamoPasteles(respuesta) {
            console.log(respuesta);
            //toastr.success('Exito', 'Se recobraron: ' + respuesta.length + ' Usuarios');
            // $scope.entrenadores = respuesta.data;
            $scope.pasteles = respuesta;

            //console.log($scope.usuarios);
        },
        function errorNoLlamoPastel(error) {
            console.log(error);
            //toastr.error('Error', 'Error inesperado del servidor');
        });

    $scope.editarPastel = function (pastel) {
        pastelFactory.actualizar({
            idPastel: pastel.id
        }, {
            nombre: pastel.nombre,
            tipo: pastel.tipo,
            foto: pastel.foto,
            preparacion: pastel.preparacion,
            ingredientes: pastel.ingredientes
                //usuario: usuario
        }).$promise.then(
            function success(respuesta) {
                console.log(respuesta);
            },
            function error(error) {
                console.log(error);
            }
        );
    };


    console.log('Entraste a usuario');

    /* EntrenadorFactory.query().$promise.then(
         function correctoLlamoEntrenadores(respuesta) {
             console.log(respuesta);

             // $scope.entrenadores = respuesta.data;
             $scope.entrenadores = respuesta;

             console.log($scope.entrenadores);
         },
         function errorNoLlamoEntrenadores(error) {
             console.log(error);
         });
     /*$http({
         method:'GET',
         url:'http://localhost:1337/Entrenador'
     }).then(
         function correctoLlamoEntrenadores(respuesta){
              console.log(respuesta);
             
             $scope.entrenadores = respuesta.data;
             
             console.log($scope.entrenadores);
         },
         function errorNoLlamoEntrenadores(error){
             console.log(error);
         });
     */

    /* $scope.editarEntrenador = function (entrenador, indice) {
         console.log(entrenador);
         console.log(indice);
         var fecha;

         if (entrenador.nuevaFecha == null) {
             fecha = $scope.entrenadores[indice].fechaNacimiento;
         } else {

             fecha = entrenador.nuevaFecha;

         }

         EntrenadorFactory.actualizar({
             idEntrenador: entrenador.id
         }, {
             nombre: entrenador.nombre,
             apellido: entrenador.apellido,
             fechaNacimiento: fecha
         }).$promise.then(
             function correctoLlamoEntrenadores(respuesta) {
                 console.log(respuesta);
                 $scope.entrenadores[indice].fechaNacimiento = fecha;
             },
             function errorNoLlamoEntrenadores(error) {
                 console.log(error);
             });



         //        $http({
         //            method:'PUT',
         //            url:'http://localhost:1337/Entrenador/'+entrenador.id,
         //            data:{
         //                nombre: entrenador.nombre,
         //                apellido: entrenador.apellido,
         //                fechaNacimiento: fecha
         //            }
         //        }).then(
         //        function correctoLlamoEntrenadores(respuesta){
         //            
         //             console.log(respuesta);
         //            $scope.entrenadores[indice].fechaNacimiento=fecha;
         //            
         //            
         //        },
         //        function errorNoLlamoEntrenadores(error){
         //            console.log(error);
         //        });


     };



    /* $scope.borrarEntrenador = function borrarEntrenador(id, indice) {

         console.log(id);

         EntrenadorFactory.delete({
             idEntrenador: id
         }).$promise.then(
             function success(respuesta) {
                 console.log(respuesta);
                 $scope.entrenadores.splice(indice, 1);
             },
             function error(error) {
                 console.log(error);
             }
         )



     }*/



}]);