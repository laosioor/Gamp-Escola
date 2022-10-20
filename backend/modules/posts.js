const fs = require('fs');
const config = require('./config');

module.exports = {
    pegaPosts: async function() {
        var posts = await config.dbQuery("select (idPublicador) as usuario, nomeJogo, comentario, estado, imgJogo from posts");

        for(let i = 0; i < Object.keys(posts).length; i++) {
            posts[i].usuario = await config.dbReturnUsername(posts[i].usuario);
        }
        return posts;
    }
}