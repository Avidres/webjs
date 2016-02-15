app.factory('ingredientesFactory', ['$resource', function ($resource) {

    var factory = $resource(
        'http://localhost:1337/Pastel/:idPastel', {
            idUsuario: '@idPastel'
        }, {
            actualizar: {
                method: 'POST',
                params: {
                    idPastel: '@idPastel'
                }

            },

        });

    return factory;

}]);