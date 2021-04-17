"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.criarCurso = void 0;
var CreateCursoServico_1 = __importDefault(require("./CreateCursoServico"));
function criarCurso(request, response) {
    CreateCursoServico_1.default.execute({
        nome: "Curso de React",
        duracao: 10,
        educador: "Fabio Lucas Marconi"
    });
    return response.send("Curso Criado com sucesso.");
}
exports.criarCurso = criarCurso;
