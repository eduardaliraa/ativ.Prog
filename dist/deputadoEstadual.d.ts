import Politico from "./politico";
export default class deputadoEstadual extends Politico {
    private nomeEstado;
    private comissoes;
    constructor(nome: string, partido: string, esfera: string, poder: string, localTrabalho: string, enderecoTrabalho: string, remuneracao: number, projetos: string[], nomeEstado: string, comissoes: string[]);
    mandato(): void;
    getnomeEstadual(): string;
    setnomeEstadual(nomeEstado: string): void;
    getcomissoes(): string[];
    setcomissoes(comissoes: string[]): void;
    fiscalizarGovernado(): string;
    votatPPA(): string;
    votarLDO(): string;
    votarLOA(): string;
    proporEmenda(): string;
    criarCPI(): string;
}
//# sourceMappingURL=deputadoEstadual.d.ts.map