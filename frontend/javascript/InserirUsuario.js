const url = "http://localhost:3000/CadastrarUsuario";

const form = document.getElementById('formularioCadastroUsuario');

form.addEventListener('submit', async function(e) {
  e.preventDefault();

  const nomeValor = document.getElementById('IdNome').value;
  const emailValor = document.getElementById('IdEmail').value;
  const senhaValor = document.getElementById('IdSenha').value;

  await axios.post(url, {
      nome: nomeValor ,
      email: emailValor,
      senha: senhaValor
    })
    .then(alert('usuario cadastrado com sucesso'))
    .catch(console.log('erro ao cadastrar usuario'));
});
