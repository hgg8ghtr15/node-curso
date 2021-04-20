"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUsuario = void 0;
var CreateContaService_1 = __importDefault(require("./CreateContaService"));
function createUsuario(request, response) {
    // let { nome, email, cpf } = request.body
    // console.log(nome, email, cpf)
    CreateContaService_1.default.criar({
        nome: "a",
        email: "b",
        cpf: "C"
    });
    return response.send("Usuário Criado com sucesso");
}
exports.createUsuario = createUsuario;
