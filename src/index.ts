import presidente from "./presidente";
import Governador from "./govenador";           

const presidenteAtual = new presidente(
    "Luiz Inácio Lula da Silva",
    "PT",
    "Federal",
    "Executivo",
    "Palácio do Planalto",
    "Praça dos Três Poderes, Brasília - DF",
    46316.19,
    ["Projeto de lei sobre o fim da escala 6x1",
    "Projeto de lei sobre a regulamentação do trabalho por aplicativos",
    "Projeto de lei sobre a proteção das mulheres contra a violência",
    "Projeto de lei sobre a proteção de crianças e adolescentes no ambiente digital"],
    38
);

const governadorPE = new Governador(
    "Raquel Lyra",
    "PSDB",
    "Estadual",
    "Executivo",
    "Palácio do Campo das Princesas",
    "Praça da República, Recife - PE",
    60800.00,
    [ "Reajuste do piso salarial dos professores da rede estadual",
    "Federalização de trecho da rodovia PE-424",
    "Revisão do Plano Plurianual de Pernambuco",
    "Pernambuco Digital"],
    30,
    "Pernambuco"
    );

const governadorSP = new Governador(
    "Tarcísio de Freitas",
    "Republicanos",
    "Estadual",
    "Executivo",
    "Palácio dos Bandeirantes",
    "Avenida Morumbi, São Paulo - SP",
    36301.53,
    [ "Lei de Diretrizes Orçamentárias de 2027",
    "Reajuste do salário mínimo paulista",
    "Reformulação da carreira do magistério paulista",
    "Reestruturação do Fundo de Aval"],
    25,
    "São Paulo"
);




console.log(presidenteAtual.getNome());
console.log(presidenteAtual.getPartido());
console.log(presidenteAtual.getEsfera());
console.log(presidenteAtual.getPoder());
console.log(presidenteAtual.getLocalTrabalho());
console.log(presidenteAtual.getEnderecoTrabalho());
console.log(presidenteAtual.getRemuneracao());
console.log(presidenteAtual.getProjetos());
console.log(presidenteAtual.getQtdMinistros());

"<br>"

console.log(governadorPE.getNome());
console.log(governadorPE.getPartido());
console.log(governadorPE.getEsfera());
console.log(governadorPE.getPoder());
console.log(governadorPE.getLocalTrabalho());
console.log(governadorPE.getEnderecoTrabalho());
console.log(governadorPE.getRemuneracao());
console.log(governadorPE.getProjetos());
console.log(governadorPE.getQtdSecretarios());

"<br>"

console.log(governadorSP.getNome());
console.log(governadorSP.getPartido());
console.log(governadorSP.getEsfera());
console.log(governadorSP.getPoder());
console.log(governadorSP.getLocalTrabalho());
console.log(governadorSP.getEnderecoTrabalho());
console.log(governadorSP.getRemuneracao());
console.log(governadorSP.getProjetos());
console.log(governadorSP.getQtdSecretarios());
