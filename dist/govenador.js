"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const politico_1 = __importDefault(require("./politico"));
class governador extends politico_1.default {
    qtdSecretarios;
    nomeEstado;
    constructor(nome, partido, esfera, poder, localTrabalho, enderecoTrabalho, remuneracao, projetos, qtdSecretarios, nomeEstado) {
        super(nome, partido, esfera, poder, localTrabalho, enderecoTrabalho, remuneracao, projetos);
        this.qtdSecretarios = qtdSecretarios;
        this.nomeEstado = nomeEstado;
    }
    mandato() {
        console.log('sanciona leis estaduais, veta leis estaduais, decreta estado de calamidade e envia PEC - Proposta de Emenda à Constituição à Assembléia Legislativa do Estado -.');
    }
    getQtdSecretarios() {
        return this.qtdSecretarios;
    }
    setQtdSecretarios(qtdSecretarios) {
        this.qtdSecretarios = qtdSecretarios;
    }
    getNomeEstado() {
        return this.nomeEstado;
    }
    setNomeEstado(nomeEstado) {
        this.nomeEstado = nomeEstado;
    }
    gerirPoliciaMilitar() {
        return (`O governador é o responsável pela Polícia Militar do estado.`);
    }
    administrarRodovias() {
        return (`O governador é responsável pela administração das rodovias estaduais.`);
    }
    coodenarEducacaoSaude() {
        return (`O governador é responsável pela coordenação da educação e saúde no estado.`);
    }
    elaborarPPA() {
        return (`O governador elabora o Plano Plurianual (PPA) para definir as diretrizes, objetivos e metas da administração pública estadual para um período de quatro anos.`);
    }
    elaborarLOA() {
        return (`O governador elabora a Lei Orçamentária Anual (LOA) que estima as receitas e fixa as despesas do governo estadual para o exercício financeiro.`);
    }
    elaborarLDO() {
        return (`O governador elabora a Lei de Diretrizes Orçamentárias (LDO) que estabelece as metas e prioridades da administração pública estadual, orientando a elaboração da LOA.`);
    }
}
exports.default = governador;
//# sourceMappingURL=govenador.js.map