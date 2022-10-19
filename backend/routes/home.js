const router = require('./router');
const auth = require("../middlewares/auth");
const config = require('../modules/config');


module.exports = ( function() {
	router.get('/home', auth.verifyJWT, async function(req, res) {
		try {
			var usuario = await config.dbReturnUsername(req.userID);
			
		} catch {
			res.redirect('/sair');

			return router;
		}
		res.render('inicial', {usuario:usuario});
	});

	

	return router;
})();