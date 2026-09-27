import Politico from "./politico";

export default class deputadoEstadual extends Politico{

    private nomeEstado: string;
    private comissoes : string [];

    constructor(nome: string, partido: string, esfera: string, poder: string, localTrabalho: string, enderecoTrabalho: string, remuneracao: number, projetos: string[],nomeEstado: string, comissoes: string[]) {
    super(nome, partido, esfera, poder, localTrabalho, enderecoTrabalho, remuneracao, projetos);
    this.nomeEstado = nomeEstado;
    this.comissoes = comissoes;
    
}

    public mandato(): void {
        console.log(`O deputado estadual é responsável por legislar sobre assuntos de interesse do estado e fiscalizar o governador`)
    }

    public getnomeEstadual(): string {
        return this.nomeEstado;
    }

    public setnomeEstadual(nomeEstado: string): void {
        this.nomeEstado = nomeEstado;
    }

    public getcomissoes(): string[] {
        return this.comissoes;
    }

    public setcomissoes(comissoes: string[]): void {
        this.comissoes = comissoes;
    }

    public fiscalizarGovernador (): string {
        return(`O deputado estadual é reponsável por fiscalizar o governo do estado, incluindo o governador e os secretários estaduais.`);
    }

    public votatPPA(): string {
        return(`O deputado estadual tem o poder de votar no Plano Plurianual (PPA) que define as diretrizes, objetivos e metas da administração pública estadual para um período de quatro anos.`);
    }

    public votarLDO(): string {
        return(`O deputado estadual tem o poder de votar na Lei de Diretrizes Orçamentárias (LOD) que establece as metas e prioridades da adminstração pública estadual, orientando a elaboração da LOA.`);
    }

    public votarLOA(): string {
        return(`O deputado estadual tem o poder de votar na Lei Orçamentária Anual (LOA) que estima as receitas e fixa as despesas do governo estadual para o exercício financeiro.`);
    }

    public proporEmenda(): string {
        return(`O deputado estadual tem o poder de propor emendas à Constituição Estadual, que podem alterar a Constituição do estado.`);
    }

    public criarCPI(): string {
        return(`O deputado estadual tem o poder de criar Comissões Parlamentares de Inquérito (CPIs) para investigar fatos relevantes de interesse estadual, podendo convocar autoridades, requisitar documentos e ouvir testemunhas.`);
    }

}

