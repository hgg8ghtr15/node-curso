let express = require('express')

let { v4: uuidv4 } = require("uuid")

let app = express()

app.use(express.json())

let usuarios = []

function usuarioIsvalido (request, response, next) {
  let {cpf} = request.headers
  let usuario = usuarios.find(usuario => usuario.cpf === cpf)

  if (!usuario){
    return response.json({messagem: "Usuário não existe."})
  }

  request.usuario = usuario

  return next()
}


app.get("/usuarios", (request, response) => {
  return response.json({messagem: "Bem vindo.", usuarios})
})

app.post('/usuario', (request, response) => {
  let {nome, cpf, email, password, saldo} = request.body

  let usuario = usuarios.some(usuario => usuario.cpf === cpf)

  if (usuario){
    return response.json({messagem:"Este Cpf já existe"})
  }

  usuarios.push(
    {
      id: uuidv4(),
      nome, 
      cpf, 
      email, 
      password, 
      saldo,
      extrato:[]
    }
  )
  
  return response.json({messagem:"Lista de usuarios", usuarios})
})

app.get('/usuario/myusuario', usuarioIsvalido, (request, response) =>{
  let {usuario} = request
  return response.json({messagem:"Bem vindo.", usuario})
})

app.post("/usuario/editar", usuarioIsvalido, (request, response) => {
  let {usuario} = request
  let {nome, email, password} = request.body

  usuario.nome = nome
  usuario.email = email
  usuario.password = password
  
  response.json({messagem:"Alteração salva com sucesso.", usuario})
})

app.delete("/usuario/deletar", usuarioIsvalido, (request, response) => {
  let {usuario} = request

  usuarios.splice(usuario, 1)
  return response.json({messagem:"Usuario deletedo com sucesso.", usuario})
})

app.post("/depositar", usuarioIsvalido, (request, response) => {
  let {usuario} = request
  let {tipo, data, valor, descricao} = request.body

  let dataformatada = new Date(data + " 00:00")

  usuario.saldo += valor

  usuario.extrato.push(
    {
      tipo,
      valor, 
      data: dataformatada, 
      descricao 
    }
  )

  return response.json({messagem:"Deposito efetuado com sucesso."})
})

app.post("/sacar", usuarioIsvalido, (request, response) => {
  let {usuario} = request
  let {tipo, data, valor, descricao} = request.body

  let dataformatada = new Date(data + " 00:00")

  if (valor > usuario.saldo){
    return response.json({messagem: "Saldo Insuficiente"})
  }

  usuario.saldo -= valor
  usuario.extrato.push(
    {
      tipo,
      valor, 
      data: dataformatada, 
      descricao 
    }
  )

  return response.json({messagem:"Saque efetuado com sucesso."})
})

app.listen(3333)