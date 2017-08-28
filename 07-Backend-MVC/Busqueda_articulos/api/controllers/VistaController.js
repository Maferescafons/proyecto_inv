module.exports = {
    vistaOculta: function (req, res) {
        return res.view('Oculto/sorpresa');
    },
    biblioteca: function (req, res) {
        var parametros = req.allParams();
        sails.log.info("Parametros", parametros);
        if (!parametros.biblioteca) {
            parametros.biblioteca = '';
        }
        Articulo
            .find()
            .where({
            title: {
                contains: parametros.biblioteca
            }
        })
            .exec(function (err, articulos) {
            if (err)
                return res.negotiate(err);
            sails.log.info("Articulos", articulos);
            return res.view('biblioteca', {
                articulos: articulos
            });
        });
    },
    crearArticulo: function (req, res) {
        return res.view('busqueda');
    }
};
