import Politico from "./politico";
export default class presidente extends Politico {
    private qtdMinistros;
    constructor(nome: string, partido: string, esfera: string, poder: string, localTrabalho: string, enderecoTrabalho: string, remuneracao: number, projetos: string[], qtdMinistros: number);
    mandato(): void;
    getQtdMinistros(): number;
    setQtdMinistros(qtdMinistros: number): void;
    nomearMinistro(nomeMinistro: string): string;
    exonerarMinistro(nomeMinistro: string): string;
    comandarForcasArmadas(): string;
    representarPais(): string;
    elabolarPPA(): string;
    elaborarLOA(): string;
    elaborarLDO(): string;
}
//# sourceMappingURL=presidente.d.ts.map