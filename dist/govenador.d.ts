import Politico from "./politico";
export default class governador extends Politico {
    private qtdSecretarios;
    private nomeEstado;
    constructor(nome: string, partido: string, esfera: string, poder: string, localTrabalho: string, enderecoTrabalho: string, remuneracao: number, projetos: string[], qtdSecretarios: number, nomeEstado: string);
    mandato(): void;
    getQtdSecretarios(): number;
    setQtdSecretarios(qtdSecretarios: number): void;
    getNomeEstado(): string;
    setNomeEstado(nomeEstado: string): void;
    gerirPoliciaMilitar(): string;
    administrarRodovias(): string;
    coodenarEducacaoSaude(): string;
    elaborarPPA(): string;
    elaborarLOA(): string;
    elaborarLDO(): string;
}
//# sourceMappingURL=govenador.d.ts.map