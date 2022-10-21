const config = require('./config');
const posts = require('./posts');

module.exports = {
    pegaResenhas: async function() {
        var resenhas = await config.dbQuery("select (idPublicador) as usuario, nomeJogo, comentario, nota, imgJogo from resenhas");

        for(let i = 0; i<Object.keys(resenhas).length; i++) {
            resenhas[i].usuario = await config.dbReturnUsername(resenhas[i].usuario);
        }
        return resenhas;
    }
}