export default abstract class Politico {
    private nome;
    private partido;
    private esfera;
    private poder;
    private localTrabalho;
    private enderecoTrabalho;
    private remuneracao;
    private projetos;
    constructor(nome: string, partido: string, esfera: string, poder: string, localTrabalho: string, enderecoTrabalho: string, remuneracao: number, projetos: string[]);
    abstract mandato(): void;
    getNome(): string;
    getPartido(): string;
    getEsfera(): string;
    getPoder(): string;
    getLocalTrabalho(): string;
    getEnderecoTrabalho(): string;
    getRemuneracao(): number;
    getProjetos(): string[];
}
//# sourceMappingURL=politico.d.ts.map