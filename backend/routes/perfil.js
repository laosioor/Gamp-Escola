const config = require("../modules/config");
const router = require("./router");

module.exports = ( function() {
    router.get('/perfil/:usuario', async function(req,res) {
        usuario = req.params.usuario;

        let validar = await config.dbValidateUsername(usuario);
        if (!validar) {
            res.status(404).send({status: 404, error: 'Usuario não encontrado'})

            return router;
        }

        res.render('perfil', {usuario:usuario});
    })

    return router;
})();