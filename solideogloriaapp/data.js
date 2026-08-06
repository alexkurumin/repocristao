// ============================================================
// SOLI DEO GLORIA — Regra de Vida Cristã Reformada
// Base de dados dos 30 princípios bíblicos
// ============================================================

const THEMES = [
  { id: "deus",       nome: "Deus e Sua Glória",        selo: "I",    cor: "burgundy" },
  { id: "palavra",    nome: "A Palavra de Deus",         selo: "II",   cor: "gold" },
  { id: "salvacao",   nome: "Salvação pela Graça",       selo: "III",  cor: "sage" },
  { id: "santidade",  nome: "Santidade",                 selo: "IV",   cor: "burgundy" },
  { id: "oracao",     nome: "Vida de Oração e Adoração", selo: "V",    cor: "gold" },
  { id: "igreja",     nome: "Igreja",                    selo: "VI",   cor: "sage" },
  { id: "proximo",    nome: "Amor ao Próximo",           selo: "VII",  cor: "burgundy" },
  { id: "vidacrista", nome: "Vida Cristã",                selo: "VIII", cor: "gold" },
  { id: "missao",     nome: "Missão",                    selo: "IX",   cor: "sage" },
  { id: "perseveranca", nome: "Perseverança",             selo: "X",    cor: "burgundy" },
];

const PRINCIPIOS = [
  // I. DEUS E SUA GLÓRIA
  { id:1, tema:"deus", titulo:"Glorifique a Deus em tudo", ref:"1 Coríntios 10:31",
    texto:"Quer coma, quer beba, quer faça qualquer outra coisa, o crente reformado entende que não há esfera neutra da vida. O trabalho, o descanso, a conversa e o silêncio pertencem a Deus e devem refletir Seu valor supremo.",
    devocional:"Antes de começar a tarefa mais comum do seu dia, pare por um instante e pergunte: 'isto, do jeito que vou fazer agora, engrandece a Deus aos olhos de quem me vê?' A glória de Deus não é um adendo religioso à vida — é o fio que costura cada ação.",
    desafio:"Escolha uma atividade rotineira de hoje (uma refeição, um e-mail, uma conversa) e faça-a deliberadamente 'como para o Senhor'." },
  { id:2, tema:"deus", titulo:"Reconheça a soberania absoluta de Deus", ref:"Salmo 115:3; Daniel 4:35",
    texto:"Nosso Deus está nos céus; faz tudo o que Lhe apraz. Nenhuma circunstância — boa ou dolorosa — escapa ao Seu domínio e ao Seu propósito sábio e bom.",
    devocional:"A soberania de Deus não é uma doutrina fria de sala de aula; é o travesseiro sob a cabeça do crente ansioso. Se Deus reina sobre reis e reinos, Ele reina também sobre o seu dia de amanhã.",
    desafio:"Escreva uma preocupação atual e, ao lado, escreva 'Deus reina sobre isto' — entregue-a a Ele em oração específica." },
  { id:3, tema:"deus", titulo:"Ame a Deus acima de todas as coisas", ref:"Mateus 22:37",
    texto:"O primeiro e maior mandamento exige coração, alma e mente inteiros. Todo outro amor — por cônjuge, filhos, vocação ou conforto — deve ser subordinado a este amor primário.",
    devocional:"Pergunte-se sinceramente: se Deus fosse removido do quadro, o que ainda restaria como o centro gravitacional da sua vida? Aquilo, provavelmente, disputa o primeiro lugar que só a Ele pertence.",
    desafio:"Identifique um afeto que hoje compete com o amor a Deus e ofereça-o a Ele conscientemente em oração." },
  { id:4, tema:"deus", titulo:"Confie plenamente na providência divina", ref:"Romanos 8:28",
    texto:"Sabemos que todas as coisas cooperam para o bem daqueles que amam a Deus. Isso não promete ausência de dor, mas garante propósito redentor mesmo na aflição.",
    devocional:"A providência não elimina as lágrimas, mas as coloca dentro de uma história que termina em glória. Você pode chorar e confiar ao mesmo tempo — isso é fé madura, não contradição.",
    desafio:"Relembre uma dificuldade passada em que, olhando para trás, você já pode ver o bem que Deus operou nela." },

  // II. A PALAVRA DE DEUS
  { id:5, tema:"palavra", titulo:"Submeta-se às Escrituras como única regra infalível", ref:"2 Timóteo 3:16-17",
    texto:"Toda a Escritura é inspirada por Deus e útil para ensinar, redarguir, corrigir e instruir em justiça. Nenhuma tradição, sentimento ou experiência tem autoridade igual à Palavra escrita.",
    devocional:"Sola Scriptura significa que, quando a Bíblia fala claramente contra o que eu prefiro, é a minha preferência que deve ceder — não o texto sagrado.",
    desafio:"Ao ler as Escrituras hoje, anote uma área da sua vida que precisa se submeter ao que o texto ensina." },
  { id:6, tema:"palavra", titulo:"Medite na Palavra diariamente", ref:"Salmo 1:1-3",
    texto:"Bem-aventurado o homem cujo prazer está na lei do Senhor, e nela medita de dia e de noite. Tal pessoa é como árvore plantada junto a ribeiros de águas.",
    devocional:"Meditar não é apenas ler rápido — é ruminar, como o boi que mastiga o alimento repetidas vezes até extrair todo o seu proveito. A alma também precisa desse tempo lento.",
    desafio:"Escolha um versículo lido hoje e repita-o mentalmente três vezes ao longo do dia, em momentos diferentes." },
  { id:7, tema:"palavra", titulo:"Obedeça à Palavra, e não apenas a ouça", ref:"Tiago 1:22",
    texto:"Sede cumpridores da palavra e não somente ouvintes, enganando-vos com falsos raciocínios. Conhecimento bíblico sem obediência é auto-engano religioso.",
    devocional:"É possível ter uma Bíblia sublinhada e um coração intacto. A prova de que a Palavra realmente penetrou não é o quanto sabemos, mas o quanto mudamos.",
    desafio:"Aplique hoje mesmo, de forma concreta, o último mandamento bíblico que você leu — antes de ler o próximo." },

  // III. SALVAÇÃO PELA GRAÇA
  { id:8, tema:"salvacao", titulo:"Reconheça que a salvação é somente pela graça", ref:"Efésios 2:8-9",
    texto:"Pela graça sois salvos, mediante a fé; e isto não vem de vós, é dom de Deus; não de obras, para que ninguém se glorie. A salvação exclui toda jactância humana.",
    devocional:"Se a salvação dependesse, ainda que em 1%, do seu esforço, você jamais teria certeza segura dela. Mas por ser 100% graça, ela é 100% garantida em Cristo.",
    desafio:"Agradeça a Deus hoje, em oração específica, listando três formas como Sua graça — não seu mérito — sustentou você esta semana." },
  { id:9, tema:"salvacao", titulo:"Descanse somente em Cristo para a salvação", ref:"João 14:6",
    texto:"Eu sou o caminho, e a verdade, e a vida; ninguém vem ao Pai senão por mim. Não há mediador, sacerdote ou obra que complemente a suficiência de Cristo.",
    devocional:"Solus Christus significa deixar de tentar apaziguar a própria consciência com desempenho religioso e simplesmente descansar na obra acabada do Salvador.",
    desafio:"Identifique algo que você tem usado, mesmo inconscientemente, para se sentir 'aceitável' diante de Deus além de Cristo — e renuncie a isso em oração." },
  { id:10, tema:"salvacao", titulo:"Viva em gratidão pela obra consumada de Cristo", ref:"Colossenses 2:6-7",
    texto:"Assim como recebestes a Cristo Jesus, o Senhor, assim também andai nele, arraigados e edificados nele, e confirmados na fé, transbordando em ação de graças.",
    devocional:"A obediência cristã que nasce da gratidão é leve; a que nasce do medo é escravizante. Pergunte-se: estou obedecendo por amor ao que Cristo já fez, ou por medo do que Ele fará?",
    desafio:"Escreva um bilhete curto de gratidão a Deus por sua salvação e guarde-o em um lugar visível esta semana." },

  // IV. SANTIDADE
  { id:11, tema:"santidade", titulo:"Busque a santificação continuamente", ref:"1 Pedro 1:15-16",
    texto:"Como é santo aquele que vos chamou, sede vós também santos em todo o vosso procedimento; porque escrito está: Sereis santos, porque eu sou santo.",
    devocional:"A santificação é obra de toda a vida, não um evento único. Você não se torna santo de uma vez, mas é chamado a caminhar, dia após dia, na direção da semelhança com Cristo.",
    desafio:"Escolha um único hábito pecaminoso recorrente e ore especificamente contra ele hoje, pedindo graça para resistir." },
  { id:12, tema:"santidade", titulo:"Mortifique o pecado diariamente", ref:"Romanos 8:13",
    texto:"Se viverdes segundo a carne, morrereis; mas, se pelo Espírito mortificardes os feitos do corpo, vivereis. A luta contra o pecado é ativa, não passiva.",
    devocional:"John Owen escreveu: 'mate o pecado ou ele matará você'. Não se trata de gerenciar o pecado com moderação, mas de combatê-lo com violência espiritual, pelo poder do Espírito.",
    desafio:"Nomeie por escrito um pecado específico que precisa ser 'mortificado' hoje e ore pedindo o poder do Espírito para resistir a ele nas próximas 24 horas." },
  { id:13, tema:"santidade", titulo:"Fuja das tentações e busque a pureza", ref:"1 Coríntios 10:13",
    texto:"Não veio sobre vós tentação, senão humana; mas fiel é Deus, que não deixará que sejais tentados acima do que podeis suportar, dando também juntamente com a tentação a saída.",
    devocional:"Deus promete a saída, mas frequentemente essa saída exige que fujamos com os pés, não apenas resistamos com a vontade. Sabedoria é evitar a situação, não apenas confiar na força de vontade dentro dela.",
    desafio:"Identifique um ambiente, hábito ou conteúdo que costuma alimentar sua tentação recorrente e tome hoje uma medida prática para evitá-lo." },

  // V. VIDA DE ORAÇÃO E ADORAÇÃO
  { id:14, tema:"oracao", titulo:"Ore sem cessar", ref:"1 Tessalonicenses 5:17",
    texto:"A oração ininterrupta descreve uma disposição constante de dependência de Deus, tecida ao longo do dia — não apenas momentos formais isolados.",
    devocional:"Orar sem cessar não significa estar de joelhos o dia todo, mas manter o coração em conversa aberta com Deus enquanto trabalha, dirige, espera na fila ou lava a louça.",
    desafio:"Estabeleça três 'gatilhos' do seu dia (acordar, almoçar, deitar) para orações breves e específicas." },
  { id:15, tema:"oracao", titulo:"Adore a Deus conforme Sua Palavra", ref:"João 4:23-24",
    texto:"Deus é Espírito, e importa que os que o adoram o adorem em espírito e em verdade. A adoração aceitável é regulada pela Escritura, não inventada pela preferência humana.",
    devocional:"O 'princípio regulador do culto' reformado lembra que Deus, não nós, define como deseja ser adorado. Isso liberta a igreja da tirania da inovação constante.",
    desafio:"Antes do próximo culto que você participar, ore pedindo que seu coração venha preparado para adorar 'em espírito e em verdade', não apenas presente fisicamente." },
  { id:16, tema:"oracao", titulo:"Guarde o Dia do Senhor para culto e descanso santo", ref:"Êxodo 20:8-11",
    texto:"Lembra-te do dia de sábado, para o santificar. O quarto mandamento chama o povo de Deus a um ritmo semanal de descanso e adoração que antecipa o descanso eterno.",
    devocional:"Guardar o domingo não é legalismo — é receber um presente. Deus, que não precisa de descanso, ordenou o descanso para criaturas finitas que constantemente esquecem seus próprios limites.",
    desafio:"Planeje deliberadamente o seu próximo Dia do Senhor: separe tempo para culto público e reduza atividades que competem com o descanso e a adoração." },

  // VI. IGREJA
  { id:17, tema:"igreja", titulo:"Comprometa-se com uma igreja local fiel", ref:"Hebreus 10:24-25",
    texto:"Consideremo-nos uns aos outros, para nos estimularmos ao amor e às boas obras, não deixando de congregar-nos, como é costume de alguns, mas exortando-nos.",
    devocional:"A vida cristã bíblica não é solitária. O cristianismo do 'só eu e Deus', sem compromisso concreto com um corpo local, contradiz o padrão apostólico de vida em comunhão.",
    desafio:"Entre em contato hoje com um membro da sua igreja local que você não fala há algum tempo, para estimulá-lo ao amor e às boas obras." },
  { id:18, tema:"igreja", titulo:"Participe fielmente dos sacramentos", ref:"Mateus 28:19; 1 Coríntios 11:23-26",
    texto:"O Batismo e a Ceia do Senhor são sinais e selos da graça de Deus, ordenados por Cristo para fortalecer a fé do crente e proclamar o evangelho visivelmente à igreja.",
    devocional:"A Ceia não é um ritual vazio, mas um meio de graça em que, pela fé, nos alimentamos espiritualmente de Cristo crucificado e ressurreto. Aproxime-se dela com fé, não com rotina.",
    desafio:"Antes da próxima celebração da Ceia do Senhor, reserve um tempo de exame pessoal e confissão, conforme 1 Coríntios 11:28." },
  { id:19, tema:"igreja", titulo:"Submeta-se aos presbíteros que governam biblicamente", ref:"Hebreus 13:17",
    texto:"Obedecei a vossos pastores, e sede-lhes sujeitos; porque velam por vossas almas, como quem há de dar conta delas. O governo bíblico protege o rebanho do erro e do isolamento.",
    devocional:"A submissão aos presbíteros não é sobre poder humano, mas sobre proteção pastoral. Um cristão que rejeita toda autoridade eclesiástica se expõe a perigos que o rebanho, sob pastores fiéis, evitaria.",
    desafio:"Ore hoje especificamente pelos pastores/presbíteros da sua igreja, nomeando-os e pedindo sabedoria e proteção para eles." },

  // VII. AMOR AO PRÓXIMO
  { id:20, tema:"proximo", titulo:"Ame o próximo como a si mesmo", ref:"Mateus 22:39",
    texto:"O segundo mandamento, semelhante ao primeiro, resume toda a Lei em relação ao próximo. Amor genuíno busca ativamente o bem do outro, não apenas evita o mal.",
    devocional:"Amar o próximo como a si mesmo pressupõe que você já cuida de si com atenção e cuidado — a pergunta reformada é: você estende esse mesmo padrão de cuidado a quem está ao seu lado?",
    desafio:"Identifique uma necessidade concreta de alguém próximo a você hoje e supra-a de forma prática, sem esperar reconhecimento." },
  { id:21, tema:"proximo", titulo:"Perdoe como Deus o perdoou em Cristo", ref:"Efésios 4:32",
    texto:"Sede uns para com os outros benignos, misericordiosos, perdoando-vos uns aos outros, como também Deus vos perdoou em Cristo. O padrão do nosso perdão é a cruz.",
    devocional:"Guardar rancor contra quem nos ofendeu, enquanto recebemos perdão infinito de Deus por nossa rebelião contra Ele, é uma inconsistência que a graça não tolera silenciosamente.",
    desafio:"Se há alguém que você ainda não perdoou de coração, ore hoje pedindo a Deus graça para começar esse processo — mesmo que a reconciliação leve tempo." },
  { id:22, tema:"proximo", titulo:"Sirva aos outros com humildade", ref:"Filipenses 2:3-4",
    texto:"Nada façais por contenda ou por vanglória, mas por humildade; cada um considere os outros superiores a si mesmo. O modelo é a própria humilhação de Cristo.",
    devocional:"Humildade genuína não é pensar mal de si mesmo, mas pensar menos em si mesmo — liberando espaço mental e afetivo para de fato enxergar as necessidades ao redor.",
    desafio:"Realize hoje um ato de serviço deliberadamente 'invisível' — algo que ninguém saberá que você fez." },

  // VIII. VIDA CRISTÃ
  { id:23, tema:"vidacrista", titulo:"Seja íntegro em todas as áreas da vida", ref:"Provérbios 11:3",
    texto:"A integridade dos retos os guiará, mas a perversidade dos aleivosos os destruirá. Integridade é a coerência entre o que se professa e o que se pratica em segredo.",
    devocional:"Pergunte-se: a pessoa que sou quando ninguém está olhando é a mesma pessoa que apresento em público? Essa lacuna, se existir, é onde a integridade precisa crescer.",
    desafio:"Identifique uma área da sua vida em que existe diferença entre sua conduta pública e privada, e traga-a diante de Deus em oração de confissão." },
  { id:24, tema:"vidacrista", titulo:"Trabalhe diligentemente para a glória de Deus", ref:"Colossenses 3:23",
    texto:"E tudo quanto fizerdes, fazei-o de todo o coração, como ao Senhor, e não aos homens. O trabalho comum, feito com excelência, é adoração diante de Deus.",
    devocional:"A ética protestante do trabalho, corretamente entendida, não é sobre produtividade a qualquer custo, mas sobre reconhecer que Deus vê e valoriza o trabalho feito com fidelidade, mesmo quando ninguém mais percebe.",
    desafio:"Escolha a tarefa do seu trabalho ou estudo que você mais tende a fazer com desleixo e faça-a hoje com excelência deliberada, como oferta ao Senhor." },
  { id:25, tema:"vidacrista", titulo:"Administre fielmente os recursos que Deus lhe confiou", ref:"1 Pedro 4:10",
    texto:"Cada um administre aos outros o dom como o recebeu, como bons despenseiros da multiforme graça de Deus. Tempo, dinheiro e dons são recursos emprestados, não posse absoluta.",
    devocional:"A mordomia bíblica começa com a confissão de que nada realmente nos pertence — somos administradores temporários daquilo que é de Deus, e um dia prestaremos contas.",
    desafio:"Revise seus gastos ou seu uso do tempo da última semana e identifique um ajuste concreto para administrar melhor o que Deus lhe confiou." },

  // IX. MISSÃO
  { id:26, tema:"missao", titulo:"Proclame o evangelho de Cristo", ref:"Mateus 28:18-20",
    texto:"Portanto, ide, fazei discípulos de todas as nações, batizando-os e ensinando-os a guardar tudo o que vos tenho ordenado. A Grande Comissão não é opcional para o cristão fiel.",
    devocional:"Você não precisa ter todas as respostas teológicas para começar a testemunhar — precisa apenas amar o suficiente para não guardar em silêncio a melhor notícia que já recebeu.",
    desafio:"Pense em uma pessoa que ainda não conhece o evangelho e ore hoje especificamente por uma oportunidade de falar de Cristo com ela." },
  { id:27, tema:"missao", titulo:"Seja sal e luz no mundo", ref:"Mateus 5:13-16",
    texto:"Vós sois o sal da terra... vós sois a luz do mundo. O cristão fiel exerce influência preservadora e reveladora simplesmente por viver de acordo com o evangelho em público.",
    devocional:"Sal que perde o sabor e luz escondida debaixo do alqueire são inúteis para o seu propósito. A pergunta não é apenas 'sou cristão?', mas 'minha vida está de fato temperando e iluminando ao meu redor?'",
    desafio:"Identifique uma esfera da sua vida (trabalho, vizinhança, família) onde sua influência cristã tem estado 'escondida' e tome uma atitude visível de fidelidade nela hoje." },

  // X. PERSEVERANÇA
  { id:28, tema:"perseveranca", titulo:"Persevere na fé até o fim", ref:"Hebreus 12:1-2",
    texto:"Corramos, com paciência, a carreira que nos está proposta, olhando para Jesus, autor e consumador da fé. A vida cristã é uma corrida de longa distância, não um sprint.",
    devocional:"O cansaço espiritual é real e não deve ser negado — mas a solução bíblica não é desistir, é fixar os olhos novamente em Cristo, que já correu a carreira por nós e para nós.",
    desafio:"Identifique um 'peso' que tem atrapalhado sua caminhada espiritual recente e ore pedindo graça para deixá-lo de lado hoje." },
  { id:29, tema:"perseveranca", titulo:"Espere com alegria a volta de Cristo", ref:"Tito 2:13",
    texto:"Aguardando a bem-aventurada esperança e o aparecimento da glória do grande Deus e nosso Salvador Jesus Cristo. A segunda vinda é âncora de esperança, não motivo de ansiedade.",
    devocional:"Viver à luz da volta de Cristo muda prioridades: aquilo que parecerá insignificante diante d'Ele naquele dia, talvez mereça menos do seu coração hoje.",
    desafio:"Reserve alguns minutos para meditar sobre a volta de Cristo e escreva como essa esperança deveria mudar uma decisão que você enfrenta esta semana." },
  { id:30, tema:"perseveranca", titulo:"Viva com os olhos na eternidade", ref:"Colossenses 3:1-4",
    texto:"Se, pois, ressuscitastes com Cristo, buscai as coisas que são de cima... Pensai nas coisas que são de cima, e não nas que são da terra.",
    devocional:"A mentalidade eterna não despreza as responsabilidades terrenas — ela as ordena corretamente, impedindo que o temporário usurpe o lugar que só o eterno merece ocupar no coração.",
    desafio:"Liste três coisas em que você tem investido energia excessiva com valor apenas temporário e reoriente hoje uma delas em direção a algo de valor eterno." },
];

// Categorias do checklist diário (derivadas dos 5 grandes compromissos)
const CHECKLIST_ITENS = [
  { id: "oracao",     texto: "Orei hoje, entregando meu dia a Deus" },
  { id: "biblia",     texto: "Li e/ou meditei nas Escrituras" },
  { id: "pecado",     texto: "Combati um pecado específico conscientemente" },
  { id: "gratidao",   texto: "Agradeci a Deus pela graça em Cristo" },
  { id: "proximo",    texto: "Amei/servi alguém de forma concreta" },
  { id: "integridade",texto: "Fui íntegro em público e em privado" },
  { id: "mordomia",   texto: "Administrei bem meu tempo/recursos" },
  { id: "eternidade", texto: "Lembrei-me da eternidade e da volta de Cristo" },
];

const COMPROMISSOS = [
  { titulo: "Glória de Deus acima de tudo", desc: "Toda esfera da vida — trabalho, descanso, relacionamentos — existe para engrandecer a Deus." },
  { titulo: "Supremacia das Escrituras", desc: "A Bíblia, e somente ela, é a regra infalível de fé e prática do cristão." },
  { titulo: "Centralidade de Cristo e da graça", desc: "A salvação é inteiramente pela graça, somente por Cristo, do início ao fim." },
  { titulo: "Santidade prática em toda a vida", desc: "A fé genuína produz frutos visíveis de obediência em cada área da existência." },
  { titulo: "Perseverança na fé até a glorificação", desc: "Aquele que Deus salva, Deus guarda — até o dia da glória final." },
];
