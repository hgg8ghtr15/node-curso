interface Usuario{
    nome:string,
    email:string,
    cpf:string
}

class CreateContaService {

    criar({nome, email, cpf}:Usuario){
        console.log(nome, email, cpf)
    }

} 
export default new CreateContaService()