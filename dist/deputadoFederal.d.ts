import Politico from "./politico";
export default class deputadoFederal extends Politico {
    private Bancada;
    constructor(nome: string, partido: string, esfera: string, poder: string, localTrabalho: string, enderecoTrabalho: string, remuneracao: number, projetos: string[], Bancada: string);
    mandato(): void;
    getBancada(): string;
    setBancada(Bancada: string): void;
    fiscalizarPresidente(): string;
    votarPEC(): string;
    criarCPINacional(): string;
    votarPPA(): string;
    votarLDO(): string;
    votarLOA(): string;
    proporLeiComplementar(): string;
}
//# sourceMappingURL=deputadoFederal.d.ts.map