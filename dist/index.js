"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const presidente_1 = __importDefault(require("./presidente"));
const governador_1 = __importDefault(require("./governador"));
const deputadoFederal_1 = __importDefault(require("./deputadoFederal"));
const deputadoEstadual_1 = __importDefault(require("./deputadoEstadual"));
const senador_1 = __importDefault(require("./senador"));
const presidenteAtual = new presidente_1.default("Luiz Inácio Lula da Silva", "PT", "Federal", "Executivo", "Palácio do Planalto", "Praça dos Três Poderes, Brasília - DF", 46316.19, ["Projeto de lei sobre o fim da escala 6x1",
    "Projeto de lei sobre a regulamentação do trabalho por aplicativos",
    "Projeto de lei sobre a proteção das mulheres contra a violência",
    "Projeto de lei sobre a proteção de crianças e adolescentes no ambiente digital"], 38);
const governadorPE = new governador_1.default("Raquel Lyra", "PSDB", "Estadual", "Executivo", "Palácio do Campo das Princesas", "Praça da República, Recife - PE", 60800.00, ["Reajuste do piso salarial dos professores da rede estadual",
    "Federalização de trecho da rodovia PE-424",
    "Revisão do Plano Plurianual de Pernambuco",
    "Pernambuco Digital"], 30, "Pernambuco");
const governadorSP = new governador_1.default("Tarcísio de Freitas", "Republicanos", "Estadual", "Executivo", "Palácio dos Bandeirantes", "Avenida Morumbi, São Paulo - SP", 36301.53, ["Lei de Diretrizes Orçamentárias de 2027",
    "Reajuste do salário mínimo paulista",
    "Reformulação da carreira do magistério paulista",
    "Reestruturação do Fundo de Aval"], 25, "São Paulo");
const deputadoFederalPE1 = new deputadoFederal_1.default("Maria Leal Arraes de Alencar", "PSB", "Federal", "Legislativo", "Gabinete 654 - Anexo IV - Câmara dos Deputados", "Avenida Brasília, Brasília - DF", 46366.19, ["Pensão Alimentícia e Abandono Afetivo (PL 2121/2025)",
    "Saúde Mental nas Empresas (PL 4358/2023)",
    "Assistência a Policiais (PL 5422/2026)",
    "Redução da Mortalidade Materna (PL 2112/2024)"], "Bancada: Governista ");
const deputadoFederalPE2 = new deputadoFederal_1.default("Túlio Gadêlha Sales de Melo", "PSD", "Federal", "Legislativo", "Gabinete 360 - Anexo IV - Câmara dos Deputados", "Avenida Brasília, Brasília - DF", 46366.19, ["Ampliação da Meia-Entrada (PL 1076/24)",
    "Política Nacional para Conservação do Sistema Costeiro-Marinho (PNGCMar) PL 6969/2013",
    "Selo de Engenharia ou Arquitetura Solidária PL 4553/23",
    "Redução da Mortalidade Materna (PL 2112/2024)"], "Bancada: Ambientalista");
const deputadoFederalPE3 = new deputadoFederal_1.default("Iza Paula de Deus e Mello Albuquerque Arruda", "MDB", "Federal", "Legislativo", "Gabinete 828 - Anexo IV - Câmara dos Deputados", "Avenida Brasília, Brasília - DF", 46366.19, ["Salas de Acolhimento (PL 2221/2023)",
    "Inclusão do Autismo (PL 5813/2023)",
    "Estupro Marital (PL 3470/2023)",
    "Fisioterapia em Partos (PL 4631/2024)"], "Bancada: Identitárias e Sociais");
const deputadoFederalRJ1 = new deputadoFederal_1.default("Glauber de Medeiros Braga ", "PSOL", "Federal", "Legislativo", "Gabinete 362 - Anexo IV - Câmara dos Deputados", "Avenida Brasília, Brasília - DF", 46366.19, ["Sistema de Monitoramento de Desastres (PL 1450/2015) ",
    "Trabalho do Preso (PL 10142/2018)",
    "Audiências Públicas Obrigatórias (PL 180/2011)",
    " Plano Nacional de Desestatização (PND) (PL 3163/2026)"], "Bancada: Identitárias e Sociais");
const deputadoFederalRJ2 = new deputadoFederal_1.default("Benedita Sousa da Silva Sampaio", "PT", "Federal", "Legislativo", "Gabinete 330 - Anexo IV - Câmara dos Deputados", "Avenida Brasília, Brasília - DF", 46366.19, ["Proteção de Serviços Básicos e Renda ( PL 1651/2021) ",
    "Justiça Tributária e Social (PL 3375/2025)",
    "Defesa da Soberania Nacional (PL 3375/2025)",
    "Reconheceu oficialmente manifestações artísticas urbanas (PL 24/2020)"], "Bancada: Identitárias e Sociais");
const deputadoEstadualPE1 = new deputadoEstadual_1.default("Danielle Gondim Portela", "PT", "Estadual", "Legislativo", "Gabinete 108 - Assembleia Legislativa do Estado de Pernambuco", "Rua da União, 397, Boa Vista, Recife - PE", 347746.4, ["Atendimento por Mulheres em Abrigos (PL 1910/2024)",
    "Proteção a Pesquisadoras Gestantes (PL 1937/2024)",
    "Valorização da Parentalidade no Trabalho (PL 4125/2026)"], "Pernambuco", [
    "Comissão de Cidadania e Direitos Humanos",
    "Comissão de Defesa dos Direitos da Mulher"
]);
const deputadoEstadualPE2 = new deputadoEstadual_1.default("Rosa Karina Souza de Amorim", "PT", "Estadual", "Legislativo", "Gabinete  205 - Assembleia Legislativa do Estado de Pernambuco", "Rua da União, 397, Boa Vista, Recife - PE", 347746.4, ["Fortalece a segurança alimentar ao atualizar diretrizes de apoio à agricultura urbana e periurbana (PL 2533/2025)",
    "Propõe Passe Livre Estudantil intermunicipal para universitários e técnicos da rede pública, incluindo deslocamentos para estágio e pesquisa (PL 3983/2026)",
    "Determina a divulgação da plataforma digital MEC Livros nas redes de ensino pública e privada (PL 3974/2026:)",
    "Tratam da prevenção de desastres nas escolas, do Dia Estadual para Ação Climática e Combate ao Racismo Ambiental, e do mapeamento dos impactos climáticos sobre mulheres e meninas PLs de 2025 (nº 3521, 3524 e 3507)"], "Pernambuco", [
    "Comissão de Agricultura, Pecuária e Desenvolvimento Rural ",
    "Comissão de Cidadania, Direitos Humanos e Participação Popular",
    "Comissão de Educação, Cultura, Esporte e Lazer"
]);
const deputadoEstadualPE3 = new deputadoEstadual_1.default("Simone Alice de Oliveira Santana", "PSB", "Estadual", "Legislativo", "Gabinete  103 - Assembleia Legislativa do Estado de Pernambuco", "Rua da União, 397, Boa Vista, Recife - PE", 347746.4, ["Altera as diretrizes das políticas públicas estaduais voltadas à Primeira Infância (PL 3627/2025)",
    "Fortalece o Relatório Anual Socioeconômico da Primeira Infância, incluindo o monitoramento e a qualidade dos espaços urbanos destinados ao direito de brincar em áreas vulneráveis (PL 3055/2025)",
    "Institui a Política Estadual de Educação Digital Escolar no âmbito das escolas de Pernambuco (PL 3810/2026)",
    "Altera a legislação para incluir a obrigatoriedade de cursos de primeiros socorros para funcionários também em instituições privadas da rede básica de ensino (PL 1900/2024)"], "Pernambuco", [
    "Comissão de Defesa dos Direitos da Mulher",
    "Comissão de Assuntos Municipais"
]);
const deputadoEstadualRJ1 = new deputadoEstadual_1.default("Lúcia Marina dos Santos", "PT", "Estadual", "Legislativo", "Gabinete  1305 - Assembleia Legislativa Legislativa do Rio de Janeiro", "Rua da Ajuda, nº 05, Centro, Rio de Janeiro - RJ", 347746.4, ["Estabelece a Política Estadual de Salvaguarda Laboral e Segurança do Trabalho para proteger trabalhadores durante eventos climáticos extremos (PL 7749/2026)",
    "Institui a Política Estadual de Atenção à Diversidade Dermatológica no Rio de Janeiro (PL 7709/2026)",
    "Define diretrizes para o fomento de produções culturais voltadas à representatividade e à diversidade de peles (dermatológica) no estado (PL 7710/2026)",
    "Cria o Programa Estadual de Recuperação Econômica Emergencial voltado para pequenos empreendimentos, feirantes, trabalhadores informais e agricultores familiares afetados por desastres climáticos (PL 8034/2026)"], "Rio de Janeiro", [
    "Comissão de Defesa dos Direitos da Mulher",
    "Comissão de Cultura"
]);
const deputadoEstadualRJ2 = new deputadoEstadual_1.default("Célia Cristina Amorim Silva Jordão", "PSD", "Estadual", "Legislativo", "Gabinete  411 - Assembleia Legislativa Legislativa do Rio de Janeiro", "Rua da Ajuda, nº 05, Centro, Rio de Janeiro - RJ", 347746.4, ["Institui a Política Estadual de Formação e Inserção Profissional na Economia do Mar (PL 7432/2026)",
    "Cria o Observatório Estadual da Economia Criativa (PL 7613/2026)",
    "Cria a Política Estadual de Promoção da Cultura Oceânica, voltada à conscientização e preservação ambiental marinha (PL 4.257/2024)",
    "Prevê a aplicação de multas indenizatórias por parte de concessionárias aos usuários afetados por falhas recorrentes e prolongadas no fornecimento de energia elétrica (PL 5.685/2022)"], "Rio de Janeiro", [
    "Comissão de Complexo Econômico-Industrial da Saúde",
    "Comissão de Combate à Pedofilia e Enfrentamento à Exploração Sexual de Crianças e Adolescentes"
]);
const senadorPE1 = new senador_1.default("Maria Teresa Leitão de Melo", "PT", "Federal", "Legislativo", "Gabinete 03, localizado na Ala Ruy Carneiro, Anexo 2 do Senado Federal", "Praça dos Três Poderes, Brasília - DF", 46366.19, ["Educação Midiática e Digital : Cria normas nacionais para implementar a educação digital nas escolas de ensino fundamental e médio (PL 1.010/2025) ",
    "Inscreve o nome das Heroínas de Tejucupapo (mulheres que lideraram a resistência contra invasores holandeses em Pernambuco, no século XVII) no Livro dos Heróis e Heroínas da Pátria (PL 1.393/2023)",
    "Combate à Discriminação nas Escolas : Cria um protocolo de acolhimento obrigatório para lidar com episódios de racismo, misoginia, homofobia e outras opressões no ambiente de ensino (PL 4.403/2024)",
    "Inclusão no Ensino Superior : Institui a Política Nacional de Inclusão nas Universidades (públicas e privadas) (PL 4.641/2024)"], "Pernambuco", 2023);
const senadorPE2 = new senador_1.default("Humberto Sérgio Costa Lima", "PT", "Federal", "Legislativo", "Gabinete 01, localizado na Ala Ruy Carneiro, Anexo 2 do Senado Federal", "Praça dos Três Poderes, Brasília - DF", 46366.19, ["Institui a Política de Conscientização e Incentivo à Doação de Órgãos e Tecidos no Brasil, visando aumentar o engajamento social e as taxas de transplantes no país (PL 2.839/2019)",
    "Responsabilidade Sanitária : Altera a Lei Orgânica da Saúde para definir de forma clara as responsabilidades administrativas e sanitárias dos gestores do SUS (nas esferas municipal, estadual e federal) e os mecanismos de prestação de contas (PL 7.585/2014)",
    "Restrição de Bets : Cria regras rigorosas para o mercado de apostas esportivas por quota fixa. O projeto aumenta a idade mínima de 18 para 21 anos para poder apostar ou ser alvo de anúncios (PL 3.754/2025)",
    "Isenção do Imposto de Renda: Atua em projetos voltados à ampliação da faixa de isenção do Imposto de Renda para pessoas físicas, buscando aliviar a carga tributária sobre a classe trabalhadora e a população de menor renda (PL 1.087/2025)"], "Pernambuco", 2018);
const senadorSP1 = new senador_1.default("Mara Cristina Gabrilli", "PSD", "Federal", "Legislativo", "Gabinete 05, localizado na Ala Antônio Carlos Magalhães, Edifício Principal do Senado Federal", "Praça dos Três Poderes, Brasília - DF", 46366.19, ["Acessibilidade e Inclusão: Atua em projetos relacionados aos direitos das pessoas com deficiência, acessibilidade e inclusão social, incluindo propostas relacionadas ao desenho universal e à Lei Brasileira de Inclusão (PLS 279/2016)",
    "Doenças Raras: Atua na defesa de políticas públicas voltadas à prevenção, diagnóstico precoce, tratamento e melhoria da qualidade de vida das pessoas com doenças raras, incluindo a participação na Subcomissão Permanente de Direitos das Pessoas com Doenças Raras",
    "Cannabis Medicinal: Atua em debates e projetos sobre cultivo, produção, comercialização, prescrição e utilização de Cannabis e medicamentos à base de Cannabis para fins medicinais (PL 5.511/2023)",
    "Saneamento Básico: Apoia propostas relacionadas à inclusão do saneamento básico entre os direitos sociais previstos na Constituição Federal (PEC 2/2016)"], "São Paulo", 2018);
console.log(presidenteAtual.getNome());
console.log(presidenteAtual.getPartido());
console.log(presidenteAtual.getEsfera());
console.log(presidenteAtual.getPoder());
console.log(presidenteAtual.getLocalTrabalho());
console.log(presidenteAtual.getEnderecoTrabalho());
console.log(presidenteAtual.getRemuneracao());
console.log(presidenteAtual.getProjetos());
console.log(presidenteAtual.getQtdMinistros());
"<br>";
console.log(governadorPE.getNome());
console.log(governadorPE.getPartido());
console.log(governadorPE.getEsfera());
console.log(governadorPE.getPoder());
console.log(governadorPE.getLocalTrabalho());
console.log(governadorPE.getEnderecoTrabalho());
console.log(governadorPE.getRemuneracao());
console.log(governadorPE.getProjetos());
console.log(governadorPE.getQtdSecretarios());
"<br>";
console.log(governadorSP.getNome());
console.log(governadorSP.getPartido());
console.log(governadorSP.getEsfera());
console.log(governadorSP.getPoder());
console.log(governadorSP.getLocalTrabalho());
console.log(governadorSP.getEnderecoTrabalho());
console.log(governadorSP.getRemuneracao());
console.log(governadorSP.getProjetos());
console.log(governadorSP.getQtdSecretarios());
"<br>";
console.log(deputadoFederalPE1.getNome());
console.log(deputadoFederalPE1.getPartido());
console.log(deputadoFederalPE1.getEsfera());
console.log(deputadoFederalPE1.getPoder());
console.log(deputadoFederalPE1.getLocalTrabalho());
console.log(deputadoFederalPE1.getEnderecoTrabalho());
console.log(deputadoFederalPE1.getRemuneracao());
console.log(deputadoFederalPE1.getProjetos());
console.log(deputadoFederalPE1.getBancada());
"<br>";
console.log(deputadoFederalPE2.getNome());
console.log(deputadoFederalPE2.getPartido());
console.log(deputadoFederalPE2.getEsfera());
console.log(deputadoFederalPE2.getPoder());
console.log(deputadoFederalPE2.getLocalTrabalho());
console.log(deputadoFederalPE2.getEnderecoTrabalho());
console.log(deputadoFederalPE2.getRemuneracao());
console.log(deputadoFederalPE2.getProjetos());
console.log(deputadoFederalPE2.getBancada());
"<br>";
console.log(deputadoFederalPE3.getNome());
console.log(deputadoFederalPE3.getPartido());
console.log(deputadoFederalPE3.getEsfera());
console.log(deputadoFederalPE3.getPoder());
console.log(deputadoFederalPE3.getLocalTrabalho());
console.log(deputadoFederalPE3.getEnderecoTrabalho());
console.log(deputadoFederalPE3.getRemuneracao());
console.log(deputadoFederalPE3.getProjetos());
console.log(deputadoFederalPE3.getBancada());
"<br>";
console.log(deputadoFederalRJ1.getNome());
console.log(deputadoFederalRJ1.getPartido());
console.log(deputadoFederalRJ1.getEsfera());
console.log(deputadoFederalRJ1.getPoder());
console.log(deputadoFederalRJ1.getLocalTrabalho());
console.log(deputadoFederalRJ1.getEnderecoTrabalho());
console.log(deputadoFederalRJ1.getRemuneracao());
console.log(deputadoFederalRJ1.getProjetos());
console.log(deputadoFederalRJ1.getBancada());
"<br>";
console.log(deputadoFederalRJ2.getNome());
console.log(deputadoFederalRJ2.getPartido());
console.log(deputadoFederalRJ2.getEsfera());
console.log(deputadoFederalRJ2.getPoder());
console.log(deputadoFederalRJ2.getLocalTrabalho());
console.log(deputadoFederalRJ2.getEnderecoTrabalho());
console.log(deputadoFederalRJ2.getRemuneracao());
console.log(deputadoFederalRJ2.getProjetos());
console.log(deputadoFederalRJ2.getBancada());
"<br>";
console.log(deputadoEstadualPE1.getNome());
console.log(deputadoEstadualPE1.getPartido());
console.log(deputadoEstadualPE1.getEsfera());
console.log(deputadoEstadualPE1.getPoder());
console.log(deputadoEstadualPE1.getLocalTrabalho());
console.log(deputadoEstadualPE1.getEnderecoTrabalho());
console.log(deputadoEstadualPE1.getRemuneracao());
console.log(deputadoEstadualPE1.getProjetos());
console.log(deputadoEstadualPE1.getnomeEstadual());
console.log(deputadoEstadualPE1.getcomissoes());
"<br>";
console.log(deputadoEstadualPE2.getNome());
console.log(deputadoEstadualPE2.getPartido());
console.log(deputadoEstadualPE2.getEsfera());
console.log(deputadoEstadualPE2.getPoder());
console.log(deputadoEstadualPE2.getLocalTrabalho());
console.log(deputadoEstadualPE2.getEnderecoTrabalho());
console.log(deputadoEstadualPE2.getRemuneracao());
console.log(deputadoEstadualPE2.getProjetos());
console.log(deputadoEstadualPE2.getnomeEstadual());
console.log(deputadoEstadualPE2.getcomissoes());
"<br>";
console.log(deputadoEstadualPE3.getNome());
console.log(deputadoEstadualPE3.getPartido());
console.log(deputadoEstadualPE3.getEsfera());
console.log(deputadoEstadualPE3.getPoder());
console.log(deputadoEstadualPE3.getLocalTrabalho());
console.log(deputadoEstadualPE3.getEnderecoTrabalho());
console.log(deputadoEstadualPE3.getRemuneracao());
console.log(deputadoEstadualPE3.getProjetos());
console.log(deputadoEstadualPE3.getnomeEstadual());
console.log(deputadoEstadualPE3.getcomissoes());
"<br>";
console.log(deputadoEstadualRJ1.getNome());
console.log(deputadoEstadualRJ1.getPartido());
console.log(deputadoEstadualRJ1.getEsfera());
console.log(deputadoEstadualRJ1.getPoder());
console.log(deputadoEstadualRJ1.getLocalTrabalho());
console.log(deputadoEstadualRJ1.getEnderecoTrabalho());
console.log(deputadoEstadualRJ1.getRemuneracao());
console.log(deputadoEstadualRJ1.getProjetos());
console.log(deputadoEstadualRJ1.getnomeEstadual());
console.log(deputadoEstadualRJ1.getcomissoes());
"<br>";
console.log(deputadoEstadualRJ2.getNome());
console.log(deputadoEstadualRJ2.getPartido());
console.log(deputadoEstadualRJ2.getEsfera());
console.log(deputadoEstadualRJ2.getPoder());
console.log(deputadoEstadualRJ2.getLocalTrabalho());
console.log(deputadoEstadualRJ2.getEnderecoTrabalho());
console.log(deputadoEstadualRJ2.getRemuneracao());
console.log(deputadoEstadualRJ2.getProjetos());
console.log(deputadoEstadualRJ2.getnomeEstadual());
console.log(deputadoEstadualRJ2.getcomissoes());
"<br>";
console.log(senadorPE1.getNome());
console.log(senadorPE1.getPartido());
console.log(senadorPE1.getEsfera());
console.log(senadorPE1.getPoder());
console.log(senadorPE1.getLocalTrabalho());
console.log(senadorPE1.getEnderecoTrabalho());
console.log(senadorPE1.getRemuneracao());
console.log(senadorPE1.getProjetos());
console.log(senadorPE1.getnomeEstadual());
console.log(senadorPE1.getanoEleito());
"<br>";
console.log(senadorPE2.getNome());
console.log(senadorPE2.getPartido());
console.log(senadorPE2.getEsfera());
console.log(senadorPE2.getPoder());
console.log(senadorPE2.getLocalTrabalho());
console.log(senadorPE2.getEnderecoTrabalho());
console.log(senadorPE2.getRemuneracao());
console.log(senadorPE2.getProjetos());
console.log(senadorPE2.getnomeEstadual());
console.log(senadorPE2.getanoEleito());
"<br>";
console.log(senadorSP1.getNome());
console.log(senadorSP1.getPartido());
console.log(senadorSP1.getEsfera());
console.log(senadorSP1.getPoder());
console.log(senadorSP1.getLocalTrabalho());
console.log(senadorSP1.getEnderecoTrabalho());
console.log(senadorSP1.getRemuneracao());
console.log(senadorSP1.getProjetos());
console.log(senadorSP1.getnomeEstadual());
console.log(senadorSP1.getanoEleito());
//# sourceMappingURL=index.js.map