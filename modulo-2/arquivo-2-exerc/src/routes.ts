import { Request, Response } from "express"
import CreateContaService from "./CreateContaService"

export function createUsuario(request: Request, response: Response) {
  // let { nome, email, cpf } = request.body
  // console.log(nome, email, cpf)
  CreateContaService.criar(
    {
      nome: "a",
      email: "b",
      cpf: "C"
    }

  )
  return response.send("Usuário Criado com sucesso")
}