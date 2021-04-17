"use strict";
/*
*       Classe que será passada para rotas
*   Classe curso
*   nome
*   duracao
*   educador
*/
Object.defineProperty(exports, "__esModule", { value: true });
var CreateCursoServico = /** @class */ (function () {
    function CreateCursoServico() {
    }
    CreateCursoServico.prototype.execute = function (_a) {
        var nome = _a.nome, duracao = _a.duracao, educador = _a.educador;
        console.log(nome, duracao, educador);
    };
    return CreateCursoServico;
}());
exports.default = new CreateCursoServico();
