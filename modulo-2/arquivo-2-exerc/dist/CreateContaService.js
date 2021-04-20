"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CreateContaService = /** @class */ (function () {
    function CreateContaService() {
    }
    CreateContaService.prototype.criar = function (_a) {
        var nome = _a.nome, email = _a.email, cpf = _a.cpf;
        console.log(nome, email, cpf);
    };
    return CreateContaService;
}());
exports.default = new CreateContaService();
