function selecionaJogo(e) {
    if (post.style.display === 'block')
    {
        var input = inputJogoE;
        var blocoImg = document.getElementById("blocoImgE");
        var imgJogo = document.getElementById("imgJogoE");
    } 
    if (res.style.display === 'block') {
        var input = inputJogoD;
        var blocoImg = document.getElementById("blocoImgD");
        var imgJogo = document.getElementById("imgJogoD");
    }

    input.value = e.options[e.selectedIndex].text; //define o value de input como sendo o nome do jogo, no caso o texto da opção selecionada.

    fetch('pegaImagem', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({id: e.value})}).then(res => res.json()).then(data => {
            let img = data.resultado;
            
            
            imgJogo.value = img;
            blocoImg.src = img;
            //tem que pegar o input hidden e depois bota img como value dele :)
            //inserir elemento pra adicionar a imagem.appendChild(blocoImg);
        });
}