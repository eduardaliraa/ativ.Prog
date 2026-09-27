"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const politico_1 = __importDefault(require("./politico"));
class deputadoFederal extends politico_1.default {
    Bancada;
    constructor(nome, partido, esfera, poder, localTrabalho, enderecoTrabalho, remuneracao, projetos, Bancada) {
        super(nome, partido, esfera, poder, localTrabalho, enderecoTrabalho, remuneracao, projetos);
        this.Bancada = Bancada;
    }
    mandato() {
        console.log(`O deputado federal é responsável por legislar sobre o código penal, sobre o código tributário e sobre as leis trabalhistas e fiscaliza o presidente da república.`);
    }
    getBancada() {
        return this.Bancada;
    }
    setBancada(Bancada) {
        this.Bancada = Bancada;
    }
    fiscalizarPresidente() {
        return (`O deputado federal é responsável porfiscalizar o presidente da república.`);
    }
    votarPEC() {
        return (`O deputado federal tem o poder de votar em Propostas de Emenda à Constituição (PECs) que podem alterar a Constituição do país.`);
    }
    criarCPINacional() {
        return (`O deputado federal tem o poder de criar Comissões Parlamentares de Inquérito (CPIs) para investigar fatos reelevantes de interesse nacional,podendo convocar autoridades, requisitar documentos e ouvir testemunhas.`);
    }
    votarPPA() {
        return (`O deputado federal tem o poder de votar no Plano Plurianual (PPA) que define as diretrizes, objetivos e metas.`);
    }
    votarLDO() {
        return (`O deputado federal tem o poder de votar na Lei de Diretrizes Orçamentárias (LDO) que estabelece as metas e prioridade de administração púlica federal, orientando a elaboração da LOA.`);
    }
    votarLOA() {
        return (`O deputado federal tem o poder de votar na Lei Orçamentária (LOA) que estabelece o plano de execução da receita e da despesa do governo federal.`);
    }
    proporLeiComplementar() {
        return (`O deputado federal tem o poder de propor leis complementares que regulamentam a Constituição e tratam de assuntos específicos, como tributação, direitos fundamentais e organização do Estado.`);
    }
}
exports.default = deputadoFederal;
//# sourceMappingURL=deputadoFederal.js.map