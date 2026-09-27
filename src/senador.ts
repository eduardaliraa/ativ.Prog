import Politico from "./politico";

export default class senador extends Politico {

    private nomeEstado: string;
    private anoEleito: number;

     constructor(nome: string, partido: string, esfera: string, poder: string, localTrabalho: string, enderecoTrabalho: string, remuneracao: number, projetos: string[], nomeEstado: string, anoEleito: number) {
     super(nome, partido, esfera, poder, localTrabalho, enderecoTrabalho, remuneracao, projetos);
     this.nomeEstado = nomeEstado;
     this.anoEleito = anoEleito;
     
}

    public mandato(): void {
        console.log(`O senador é responsável por legislar sobre assuntos de interesse nacional e fiscalizar o presidente da república.`);
    }

    public getnomeEstadual(): string {
        return this.nomeEstado;
    }

    public setnomeEstadual(nomeEstado: string): void {
        this.nomeEstado = nomeEstado;
    }

    public getanoEleito(): number {
        return this.anoEleito;
    }

    public setanoEleito(anoEleito: number): void {
        this.anoEleito = anoEleito;
    }

    public aprovarAutoridadeAltoEscalao(): string {
        return(`O senador tem o poder de aprovar ou rejeitar a nomeação de autoridades de alto escalão, como ministros do Supremo Tribunal Federal (STF), ministros do Superior Tribunal de Justiça (STJ) e embaixadores.`);
    }

    public julgarCrimesResponsabilidade(): string {
        return(`O senador tem o poder de julgar crimes de responsabilidade cometidos pelo presidente da república, podendo resultar em impeachment.`);
    }

    public representarInteressesEstado(): string {
        return(`O senador representa os interesses do estado que o elegeu, defendendo suas necessidades e prioridades no âmbito federal.`);
    } 
}