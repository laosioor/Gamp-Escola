const url = "http://localhost:3000/ListarUsuarios"

function getUsers(){
  axios.get(url)
    .then(response => {
      console.log(response)
      const data = response.data
    })
    .catch(error => console.log(error))
}

getUsers()