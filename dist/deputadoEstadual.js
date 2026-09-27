"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const politico_1 = __importDefault(require("./politico"));
class deputadoEstadual extends politico_1.default {
    nomeEstado;
    comissoes;
    constructor(nome, partido, esfera, poder, localTrabalho, enderecoTrabalho, remuneracao, projetos, nomeEstado, comissoes) {
        super(nome, partido, esfera, poder, localTrabalho, enderecoTrabalho, remuneracao, projetos);
        this.nomeEstado = nomeEstado;
        this.comissoes = comissoes;
    }
    mandato() {
        console.log(`O deputado estadual é responsável por legislar sobre assuntos de interesse do estado e fiscalizar o governador`);
    }
    getnomeEstadual() {
        return this.nomeEstado;
    }
    setnomeEstadual(nomeEstado) {
        this.nomeEstado = nomeEstado;
    }
    getcomissoes() {
        return this.comissoes;
    }
    setcomissoes(comissoes) {
        this.comissoes = comissoes;
    }
    fiscalizarGovernado() {
        return (`O deputado estadual é reponsável por fiscalizar o governo do estado, incluindo o governador e os secretários estaduais.`);
    }
    votatPPA() {
        return (`O deputado estadual tem o poder de votar no Plano Plurianual (PPA) que define as diretrizes, objetivos e metas da administração pública estadual para um período de quatro anos.`);
    }
    votarLDO() {
        return (`O deputado estadual tem o poder de votar na Lei de Diretrizes Orçamentárias (LOD) que establece as metas e prioridades da adminstração pública estadual, orientando a elaboração da LOA.`);
    }
    votarLOA() {
        return (`O deputado estadual tem o poder de votar na Lei Orçamentária Anual (LOA) que estima as receitas e fixa as despesas do governo estadual para o exercício financeiro.`);
    }
    proporEmenda() {
        return (`O deputado estadual tem o poder de propor emendas à Constituição Estadual, que podem alterar a Constituição do estado.`);
    }
    criarCPI() {
        return (`O deputado estadual tem o poder de criar Comissões Parlamentares de Inquérito (CPIs) para investigar fatos relevantes de interesse estadual, podendo convocar autoridades, requisitar documentos e ouvir testemunhas.`);
    }
}
exports.default = deputadoEstadual;
//# sourceMappingURL=deputadoEstadual.js.map