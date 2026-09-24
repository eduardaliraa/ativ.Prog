import Politico from "./politico";

export default class governador extends Politico {

private qtdSecretarios: number;
private nomeEstado: string;

constructor(nome: string, partido: string, esfera: string, poder: string, localTrabalho: string, enderecoTrabalho: string, remuneracao: number, projetos: string[], qtdSecretarios: number, nomeEstado: string) {
    super(nome, partido, esfera, poder, localTrabalho, enderecoTrabalho, remuneracao, projetos);
    this.qtdSecretarios = qtdSecretarios;
    this.nomeEstado = nomeEstado;


}


public mandato(): void {
    console.log('sanciona leis estaduais, veta leis estaduais, decreta estado de calamidade e envia PEC - Proposta de Emenda à Constituição à Assembléia Legislativa do Estado -.');

}

public getQtdSecretarios(): number {
    return this.qtdSecretarios;
}

public setQtdSecretarios(qtdSecretarios: number): void {
    this.qtdSecretarios = qtdSecretarios;
}

public getNomeEstado(): string {
    return this.nomeEstado;
}

public setNomeEstado(nomeEstado: string): void {
    this.nomeEstado = nomeEstado;
}

public gerirPoliciaMilitar(): string {
    return(`O governador é o responsável pela Polícia Militar do estado.`);
}

public administrarRodovias( ): string {
    return(`O governador é responsável pela administração das rodovias estaduais.`);
}

public coodenarEducacaoSaude(): string {
    return(`O governador é responsável pela coordenação da educação e saúde no estado.`);
}

public elaborarPPA(): string {
    return(`O governador elabora o Plano Plurianual (PPA) para definir as diretrizes, objetivos e metas da administração pública estadual para um período de quatro anos.`);
}

public elaborarLOA(): string {
    return(`O governador elabora a Lei Orçamentária Anual (LOA) que estima as receitas e fixa as despesas do governo estadual para o exercício financeiro.`);
}

public elaborarLDO(): string {
    return(`O governador elabora a Lei de Diretrizes Orçamentárias (LDO) que estabelece as metas e prioridades da administração pública estadual, orientando a elaboração da LOA.`);
}

}
