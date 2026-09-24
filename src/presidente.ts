import Politico from "./politico";

export default class presidente extends Politico {
 
    private qtdMinistros: number;

    constructor(nome: string, partido: string, esfera: string, poder: string, localTrabalho: string, enderecoTrabalho: string, remuneracao: number, projetos: string[], qtdMinistros: number) {
        super(nome, partido, esfera, poder, localTrabalho, enderecoTrabalho, remuneracao, projetos);
        this.qtdMinistros = qtdMinistros;
    }

    public mandato(): void {
        console.log(`O presidente propõe, sanciona e veta
leis e edita medidas provisórias.`);
    }

    public getQtdMinistros(): number {
        return this.qtdMinistros;
    }

    public setQtdMinistros(qtdMinistros: number): void {
        this.qtdMinistros = qtdMinistros;
    }   

    public nomearMinistro(nomeMinistro: string): string {
       return(`O presidente nomeou o ministro ${nomeMinistro}.`);
    }

    public exonerarMinistro(nomeMinistro: string): string {
        return(`O presidente demitiu o ministro ${nomeMinistro}.`);
    }
    
    public comandarForcasArmadas(): string {
        return(`O presidente é o comandante supremo das Forças Armadas.`);
    }

    public representarPais(): string {
        return(`O presidente representa o país em relações internacionais.`);
    }

    public elabolarPPA(): string {
        return(`O presidente elabora o Plano Plurianual (PPA) para definir as diretrizes, objetivos e metas da administração pública federal para um período de quatro anos.`);
    }

    public elaborarLOA(): string {
        return(`O presidente elabora a Lei Orçamentária Anual (LOA) que estima as receitas e fixa as despesas do governo federal para o exercício financeiro.`);
    }

    public elaborarLDO(): string {
        return(`O presidente elabora a Lei de Diretrizes Orçamentárias (LDO) que estabelece as metas e prioridades da administração pública federal, orientando a elaboração da LOA.`);
    }    


}