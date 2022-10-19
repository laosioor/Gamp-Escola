const config = require("../modules/config");
const auth = require("../middlewares/auth");
const router = require("./router");

module.exports = ( function() {
    router.get('/comunidades', auth.verifyJWT, async function(req,res) {
        try {
			var usuario = await config.dbReturnUsername(req.userID);

		} catch {
			res.redirect('/sair');
			return router;
		}


		res.render('comunidades', {usuario:usuario});
    })

    return router;
})();