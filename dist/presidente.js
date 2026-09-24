"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const politico_1 = __importDefault(require("./politico"));
class presidente extends politico_1.default {
    qtdMinistros;
    constructor(nome, partido, esfera, poder, localTrabalho, enderecoTrabalho, remuneracao, projetos, qtdMinistros) {
        super(nome, partido, esfera, poder, localTrabalho, enderecoTrabalho, remuneracao, projetos);
        this.qtdMinistros = qtdMinistros;
    }
    mandato() {
        console.log(`O presidente propõe, sanciona e veta
leis e edita medidas provisórias.`);
    }
    getQtdMinistros() {
        return this.qtdMinistros;
    }
    setQtdMinistros(qtdMinistros) {
        this.qtdMinistros = qtdMinistros;
    }
    nomearMinistro(nomeMinistro) {
        return (`O presidente nomeou o ministro ${nomeMinistro}.`);
    }
    exonerarMinistro(nomeMinistro) {
        return (`O presidente demitiu o ministro ${nomeMinistro}.`);
    }
    comandarForcasArmadas() {
        return (`O presidente é o comandante supremo das Forças Armadas.`);
    }
    representarPais() {
        return (`O presidente representa o país em relações internacionais.`);
    }
    elabolarPPA() {
        return (`O presidente elabora o Plano Plurianual (PPA) para definir as diretrizes, objetivos e metas da administração pública federal para um período de quatro anos.`);
    }
    elaborarLOA() {
        return (`O presidente elabora a Lei Orçamentária Anual (LOA) que estima as receitas e fixa as despesas do governo federal para o exercício financeiro.`);
    }
    elaborarLDO() {
        return (`O presidente elabora a Lei de Diretrizes Orçamentárias (LDO) que estabelece as metas e prioridades da administração pública federal, orientando a elaboração da LOA.`);
    }
}
exports.default = presidente;
//# sourceMappingURL=presidente.js.map