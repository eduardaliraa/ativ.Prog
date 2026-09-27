"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const politico_1 = __importDefault(require("./politico"));
class senador extends politico_1.default {
    nomeEstado;
    anoEleito;
    constructor(nome, partido, esfera, poder, localTrabalho, enderecoTrabalho, remuneracao, projetos, nomeEstado, anoEleito) {
        super(nome, partido, esfera, poder, localTrabalho, enderecoTrabalho, remuneracao, projetos);
        this.nomeEstado = nomeEstado;
        this.anoEleito = anoEleito;
    }
    mandato() {
        console.log(`O senador é responsável por legislar sobre assuntos de interesse nacional e fiscalizar o presidente da república.`);
    }
    getnomeEstadual() {
        return this.nomeEstado;
    }
    setnomeEstadual(nomeEstado) {
        this.nomeEstado = nomeEstado;
    }
    getanoEleito() {
        return this.anoEleito;
    }
    setanoEleito(anoEleito) {
        this.anoEleito = anoEleito;
    }
    aprovarAutoridadeAltoEscalao() {
        return (`O senador tem o poder de aprovar ou rejeitar a nomeação de autoridades de alto escalão, como ministros do Supremo Tribunal Federal (STF), ministros do Superior Tribunal de Justiça (STJ) e embaixadores.`);
    }
    julgarCrimesResponsabilidade() {
        return (`O senador tem o poder de julgar crimes de responsabilidade cometidos pelo presidente da república, podendo resultar em impeachment.`);
    }
    representarInteressesEstado() {
        return (`O senador representa os interesses do estado que o elegeu, defendendo suas necessidades e prioridades no âmbito federal.`);
    }
}
exports.default = senador;
//# sourceMappingURL=senador.js.map