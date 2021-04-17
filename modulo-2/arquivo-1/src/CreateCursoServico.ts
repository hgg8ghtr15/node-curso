/*
*       Classe que será passada para rotas
*   Classe curso   
*   nome
*   duracao
*   educador
*/

interface Curso{
    nome:string,
    duracao?:number,
    educador:string
}

class CreateCursoServico{
    
    execute({nome, duracao, educador}:Curso){
        console.log(nome, duracao, educador)
    }

}

export default new CreateCursoServico()