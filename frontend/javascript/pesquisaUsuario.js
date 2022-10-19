function enviaDados(e) {
    const resultadosNome = document.getElementById("resultadosNome");
    let match = e.value.match(/^[\w&.\- ]+$/);
    let match2 = e.value.match(/\s*/);
    if (match2[0] === e.value) {
        resultadosNome.innerHTML =''; 
        return;
    }
    if (match[0] === e.value) {
        fetch('pegaNomes', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({dados: e.value})
        }).then(res => res.json()).then(data => {
            let resultado = data.resultado;
            resultadosNome.innerHTML = '';
            if (resultado.length < 1) {
                resultadosNome.innerHTML = '<p>Nada encontrado.</p>';
                return;
            }
            resultado.forEach((item, index) => {
                if (index > 0) resultadosNome.innerHTML += '<hr>';
                resultadosNome.innerHTML += `<a href='/profile/${item}'><p>${item}</p></a>`;
            });
        });
        return;
    }
    resultadosNome.innerHTML = '';	
}