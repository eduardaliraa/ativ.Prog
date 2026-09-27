import Politico from "./politico";
export default class senador extends Politico {
    private nomeEstado;
    private anoEleito;
    constructor(nome: string, partido: string, esfera: string, poder: string, localTrabalho: string, enderecoTrabalho: string, remuneracao: number, projetos: string[], nomeEstado: string, anoEleito: number);
    mandato(): void;
    getnomeEstadual(): string;
    setnomeEstadual(nomeEstado: string): void;
    getanoEleito(): number;
    setanoEleito(anoEleito: number): void;
    aprovarAutoridadeAltoEscalao(): string;
    julgarCrimesResponsabilidade(): string;
    representarInteressesEstado(): string;
}
//# sourceMappingURL=senador.d.ts.map