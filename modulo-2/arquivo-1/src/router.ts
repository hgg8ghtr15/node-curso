import { Request, Response } from "express"
import CreateCursoServico from "./CreateCursoServico"

export function criarCurso(request: Request, response: Response) {

  CreateCursoServico.execute(
    {
      nome: "Curso de React",
      duracao: 10,
      educador: "Fabio Lucas Marconi"
    }
  )

  return response.send("Curso Criado com sucesso.")
}