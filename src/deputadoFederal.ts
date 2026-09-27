import Politico from "./politico";

export default class deputadoFederal extends Politico {

    private Bancada: string;

    constructor(nome: string, partido: string, esfera: string, poder: string, localTrabalho: string, enderecoTrabalho: string, remuneracao: number, projetos: string[], Bancada: string) {
    super(nome, partido, esfera, poder, localTrabalho, enderecoTrabalho, remuneracao, projetos);
    this.Bancada = Bancada;

}

    public mandato(): void {
        console.log(`O deputado federal é responsável por legislar sobre o código penal, sobre o código tributário e sobre as leis trabalhistas e fiscaliza o presidente da república.`)
    }

    public getBancada(): string {
        return this.Bancada;
    }

    public setBancada(Bancada: string): void{
        this.Bancada = Bancada;
    }

    public fiscalizarPresidente(): string {
        return(`O deputado federal é responsável porfiscalizar o presidente da república.`);
    }

    public votarPEC(): string {
        return(`O deputado federal tem o poder de votar em Propostas de Emenda à Constituição (PECs) que podem alterar a Constituição do país.`);
    }

    public criarCPINacional(): string {
        return(`O deputado federal tem o poder de criar Comissões Parlamentares de Inquérito (CPIs) para investigar fatos reelevantes de interesse nacional,podendo convocar autoridades, requisitar documentos e ouvir testemunhas.`);
    }   

    public votarPPA(): string{
        return(`O deputado federal tem o poder de votar no Plano Plurianual (PPA) que define as diretrizes, objetivos e metas.`);
    }

    public votarLDO(): string{
        return(`O deputado federal tem o poder de votar na Lei de Diretrizes Orçamentárias (LDO) que estabelece as metas e prioridade de administração púlica federal, orientando a elaboração da LOA.`);
    }

    public votarLOA(): string{
        return(`O deputado federal tem o poder de votar na Lei Orçamentária (LOA) que estabelece o plano de execução da receita e da despesa do governo federal.`);
    }

    public proporLeiComplementar(): string{
        return(`O deputado federal tem o poder de propor leis complementares que regulamentam a Constituição e tratam de assuntos específicos, como tributação, direitos fundamentais e organização do Estado.`);
    }

}