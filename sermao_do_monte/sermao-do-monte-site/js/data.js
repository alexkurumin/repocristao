/* ==================================================================
   O SERMÃO DO MONTE — dados das páginas
   - PAGE_META: o que não muda com o idioma (número da página e imagens).
   - PAGE_TEXT[lang][i]: o texto de cada página (título, legenda,
     versículos) em cada idioma. O texto em português é o original,
     extraído fielmente da fonte (NTLH). As versões em inglês, espanhol
     e italiano são uma tradução própria do mesmo conteúdo, mantendo o
     sentido e a numeração dos versículos.
   ================================================================== */

const PAGE_META = [
  { num: 1,  images: ["page01.png"] },
  { num: 2,  images: [] },
  { num: 3,  images: ["page03.png"] },
  { num: 4,  images: ["page04.png"] },
  { num: 5,  images: ["page05.png"] },
  { num: 6,  images: ["page06.png"] },
  { num: 7,  images: ["page07.png"] },
  { num: 8,  images: ["page08.png"] },
  { num: 9,  images: ["page09.png"] },
  { num: 10, images: ["page10.png"] },
  { num: 11, images: ["page11.png"] },
  { num: 12, images: ["page12.png"] },
  { num: 13, images: ["page13.png"] },
  { num: 14, images: ["page14.png"] },
  { num: 15, images: ["page15.png"] },
  { num: 16, images: ["page16.png"] },
  { num: 17, images: ["page17.png"] },
  { num: 18, images: ["page18.png"] },
  { num: 19, images: ["page19.png"] },
  { num: 20, images: ["page20.png"] },
  { num: 21, images: ["page21a.png", "page21b.png"] },
  { num: 22, images: ["page22.png"] },
  { num: 23, images: ["page23.png"] },
  { num: 24, images: ["page24.png"] },
  { num: 25, images: [] }
];

const TOTAL_PAGES = PAGE_META.length;

const PAGE_TEXT = {

  /* =====================  PORTUGUÊS (original / NTLH)  ===================== */
  pt: [
    { kicker: "Mateus capítulos (5,6,7)", section: "PALAVRAS DE JESUS",
      paragraphs: [
        "1 Quando Jesus viu aquelas multidões, subiu um monte e sentou-se. Os seus discípulos chegaram perto dele,",
        "2 e ele começou a ensiná-los. Jesus disse:"
      ] },
    { paragraphs: [
        "3 — Felizes as pessoas que sabem que são espiritualmente pobres, pois o Reino do Céu é delas.",
        "4 — Felizes as pessoas que choram, pois Deus as consolará.",
        "5 — Felizes as pessoas humildes, pois receberão o que Deus tem prometido.",
        "6 — Felizes as pessoas que têm fome e sede de fazer a vontade de Deus, pois ele as deixará completamente satisfeitas.",
        "7 — Felizes as pessoas que têm misericórdia dos outros, pois Deus terá misericórdia delas.",
        "8 — Felizes as pessoas que têm o coração puro, pois elas verão a Deus.",
        "9 — Felizes as pessoas que trabalham pela paz, pois Deus as tratará como seus filhos.",
        "10 — Felizes as pessoas que sofrem perseguições por fazerem a vontade de Deus, pois o Reino do Céu é delas.",
        "11 — Felizes são vocês quando os insultam, perseguem e dizem todo tipo de calúnia contra vocês por serem meus seguidores.",
        "12 Fiquem alegres e felizes, pois uma grande recompensa está guardada no céu para vocês. Porque foi assim mesmo que perseguiram os profetas que viveram antes de vocês."
      ] },
    { section: "JESUS DISSE", paragraphs: [
        "13 — Vocês são o sal para a humanidade; mas, se o sal perde o gosto, deixa de ser sal e não serve para mais nada. É jogado fora e pisado pelas pessoas que passam.",
        "14 — Vocês são a luz para o mundo. Não se pode esconder uma cidade construída sobre um monte.",
        "15 Ninguém acende uma lamparina para colocá-la debaixo de um cesto. Pelo contrário, ela é colocada no lugar próprio para que ilumine todos os que estão na casa."
      ] },
    { section: "A LEI DE MOISÉS", paragraphs: [
        "17 — Não pensem que eu vim para acabar com a Lei de Moisés ou com os ensinamentos dos Profetas. Não vim para acabar com eles, mas para dar o seu sentido completo.",
        "18 Eu afirmo a vocês que isto é verdade: enquanto o céu e a terra durarem, nada será tirado da Lei — nem a menor letra, nem qualquer acento. E assim será até o fim de todas as coisas.",
        "19 Portanto, qualquer um que desobedecer ao menor mandamento e ensinar os outros a fazerem o mesmo será considerado o menor no Reino do Céu. Por outro lado, quem obedecer à Lei e ensinar os outros a fazerem o mesmo será considerado grande no Reino do Céu.",
        "20 Pois eu afirmo a vocês que só entrarão no Reino do Céu se forem mais fiéis em fazer a vontade de Deus do que os mestres da Lei e os fariseus."
      ] },
    { section: "O TRIBUNAL DE DEUS", paragraphs: [
        "21 — Vocês ouviram o que foi dito aos seus antepassados: “Não mate. Quem matar será julgado.”",
        "22 Mas eu lhes digo que qualquer um que ficar com raiva do seu irmão será julgado. Quem disser ao seu irmão: “Você não vale nada” será julgado pelo tribunal. E quem chamar o seu irmão de idiota estará em perigo de ir para o fogo do inferno.",
        "23 Portanto, se você estiver oferecendo no altar a sua oferta a Deus e lembrar que o seu irmão tem alguma queixa contra você,",
        "24 deixe a sua oferta ali, na frente do altar, e vá logo fazer as pazes com o seu irmão. Depois volte e ofereça a sua oferta a Deus.",
        "25 — Se alguém fizer uma acusação contra você e levá-lo ao tribunal, entre em acordo com essa pessoa enquanto ainda é tempo, antes de chegarem lá. Porque, depois de chegarem ao tribunal, você será entregue ao juiz, o juiz o entregará ao carcereiro, e você será jogado na cadeia.",
        "26 Eu afirmo a você que isto é verdade: você não sairá dali enquanto não pagar a multa toda."
      ] },
    { section: "O ADULTÉRIO", paragraphs: [
        "27 — Vocês ouviram o que foi dito: “Não cometa adultério.”",
        "28 Mas eu lhes digo: quem olhar para uma mulher e desejar possuí-la já cometeu adultério no seu coração.",
        "29 Portanto, se o seu olho direito faz com que você peque, arranque-o e jogue-o fora. Pois é melhor perder uma parte do seu corpo do que o corpo inteiro ser atirado no inferno.",
        "30 Se a sua mão direita faz com que você peque, corte-a e jogue-a fora. Pois é melhor perder uma parte do seu corpo do que o corpo inteiro ir para o inferno."
      ] },
    { section: "O DIVÓRCIO", paragraphs: [
        "31 — Foi dito também: “Quem mandar a sua esposa embora deverá dar a ela um documento de divórcio.”",
        "32 Mas eu lhes digo: todo homem que mandar a sua esposa embora, a não ser em caso de adultério, será culpado de fazer com que ela se torne adúltera, se ela casar de novo. E o homem que casar com ela também cometerá adultério."
      ] },
    { section: "OS JURAMENTOS", paragraphs: [
        "33 — Vocês ouviram o que foi dito aos seus antepassados: “Não quebre a sua promessa, mas cumpra o que você jurou ao Senhor que ia fazer.”",
        "34 Mas eu lhes digo: não jurem de jeito nenhum. Não jurem pelo céu, pois é o trono de Deus;",
        "35 nem pela terra, pois é o estrado onde ele descansa os seus pés; nem por Jerusalém, pois é a cidade do grande Rei.",
        "36 Não jurem nem mesmo pela sua cabeça, pois vocês não podem fazer com que um só fio dos seus cabelos fique branco ou preto.",
        "37 Que o “sim” de vocês seja sim, e o “não”, não, pois qualquer coisa a mais que disserem vem do Maligno ."
      ] },
    { section: "A VINGANÇA", paragraphs: [
        "38 — Vocês ouviram o que foi dito: “Olho por olho, dente por dente.”",
        "39 Mas eu lhes digo: não se vinguem dos que fazem mal a vocês. Se alguém lhe der um tapa na cara, vire o outro lado para ele bater também.",
        "40 Se alguém processar você para tomar a sua túnica, deixe que leve também a capa.",
        "41 Se um dos soldados estrangeiros forçá-lo a carregar uma carga um quilômetro, carregue-a dois quilômetros.",
        "42 Se alguém lhe pedir alguma coisa, dê; e, se alguém lhe pedir emprestado, empreste."
      ] },
    { section: "AMAR OS INIMIGOS", paragraphs: [
        "43 — Vocês ouviram o que foi dito: “Ame os seus amigos e odeie os seus inimigos.”",
        "44 Mas eu lhes digo: amem os seus inimigos e orem pelos que perseguem vocês,",
        "45 para que vocês se tornem filhos do Pai de vocês, que está no céu. Porque ele faz com que o sol brilhe sobre os bons e sobre os maus e dá chuvas tanto para os que fazem o bem como para os que fazem o mal.",
        "46 Se vocês amam somente aqueles que os amam, por que esperam que Deus lhes dê alguma recompensa? Até os cobradores de impostos amam as pessoas que os amam!",
        "47 Se vocês falam somente com os seus amigos, o que é que estão fazendo de mais? Até os pagãos fazem isso!",
        "48 Portanto, sejam perfeitos, assim como é perfeito o Pai de vocês, que está no céu."
      ] },
    { kicker: "Mateus 6", section: "A CARIDADE", paragraphs: [
        "1 — Tenham o cuidado de não praticarem os seus deveres religiosos em público a fim de serem vistos pelos outros. Se vocês agirem assim, não receberão nenhuma recompensa do Pai de vocês, que está no céu.",
        "2 — Quando você der alguma coisa a uma pessoa necessitada, não fique contando o que fez, como os hipócritas fazem nas sinagogas e nas ruas. Eles fazem isso para serem elogiados pelos outros. Eu afirmo a vocês que isto é verdade: eles já receberam a sua recompensa.",
        "3 Mas você, quando ajudar alguma pessoa necessitada, faça isso de tal modo que nem mesmo o seu amigo mais íntimo fique sabendo do que você fez.",
        "4 Isso deve ficar em segredo; e o seu Pai, que vê o que você faz em segredo, lhe dará a recompensa."
      ] },
    { section: "A ORAÇÃO", paragraphs: [
        "5 — Quando vocês orarem, não sejam como os hipócritas. Eles gostam de orar de pé nas sinagogas e nas esquinas das ruas para serem vistos pelos outros. Eu afirmo a vocês que isto é verdade: eles já receberam a sua recompensa.",
        "6 Mas você, quando orar, vá para o seu quarto, feche a porta e ore ao seu Pai, que não pode ser visto. E o seu Pai, que vê o que você faz em segredo, lhe dará a recompensa.",
        "7 — Nas suas orações, não fiquem repetindo o que vocês já disseram, como fazem os pagãos. Eles pensam que Deus os ouvirá porque fazem orações compridas.",
        "8 Não sejam como eles, pois, antes de vocês pedirem, o Pai de vocês já sabe o que vocês precisam."
      ] },
    { section: "A ORAÇÃO", paragraphs: [
        "9 Portanto, orem assim: “Pai nosso, que estás no céu, que todos reconheçam que o teu nome é santo.",
        "10 Venha o teu Reino. Que a tua vontade seja feita aqui na terra como é feita no céu!",
        "11 Dá-nos hoje o alimento que precisamos.",
        "12 Perdoa as nossas ofensas como também nós perdoamos as pessoas que nos ofenderam.",
        "13 E não deixes que sejamos tentados, mas livra-nos do mal. [Pois teu é o Reino, o poder e a glória, para sempre. Amém!]”",
        "14 — Porque, se vocês perdoarem as pessoas que ofenderem vocês, o Pai de vocês, que está no céu, também perdoará vocês.",
        "15 Mas, se não perdoarem essas pessoas, o Pai de vocês também não perdoará as ofensas de vocês."
      ] },
    { section: "O JEJUM", paragraphs: [
        "16 — Quando vocês jejuarem, não façam uma cara triste como fazem os hipócritas, pois eles fazem isso para todos saberem que eles estão jejuando. Eu afirmo a vocês que isto é verdade: eles já receberam a sua recompensa.",
        "17 Mas você, quando jejuar, lave o rosto e penteie o cabelo",
        "18 para os outros não saberem que você está jejuando. E somente o seu Pai, que não pode ser visto, saberá que você está jejuando. E o seu Pai, que vê o que você faz em segredo, lhe dará a recompensa."
      ] },
    { section: "RIQUEZAS DO CÉU", paragraphs: [
        "19 — Não ajuntem riquezas aqui na terra, onde as traças e a ferrugem destroem, e onde os ladrões arrombam e roubam.",
        "20 Pelo contrário, ajuntem riquezas no céu, onde as traças e a ferrugem não podem destruí-las, e os ladrões não podem arrombar e roubá-las.",
        "21 Pois onde estiverem as suas riquezas, aí estará o coração de vocês."
      ] },
    { section: "A RIQUEZA É COMER E VESTIR", caption: "Valemos mais que lírios passarinhos.", paragraphs: [
        "24 — Um escravo não pode servir a dois donos ao mesmo tempo, pois vai rejeitar um e preferir o outro; ou será fiel a um e desprezará o outro. Vocês não podem servir a Deus e também servir ao dinheiro.",
        "25 — Por isso eu digo a vocês: não se preocupem com a comida e com a bebida que precisam para viver nem com a roupa que precisam para se vestir. Afinal, será que a vida não é mais importante do que a comida? E será que o corpo não é mais importante do que as roupas?"
      ] },
    { section: "A RIQUEZA É COMER E VESTIR", caption: "Valemos mais que lírios passarinhos.", paragraphs: [
        "26 Vejam os passarinhos que voam pelo céu: eles não semeiam, não colhem, nem guardam comida em depósitos. No entanto, o Pai de vocês, que está no céu, dá de comer a eles. Será que vocês não valem muito mais do que os passarinhos?",
        "27 E nenhum de vocês pode encompridar a sua vida, por mais que se preocupe com isso.",
        "28 — E por que vocês se preocupam com roupas? Vejam como crescem as flores do campo: elas não trabalham, nem fazem roupas para si mesmas.",
        "29 Mas eu afirmo a vocês que nem mesmo Salomão, sendo tão rico, usava roupas tão bonitas como essas flores."
      ] },
    { section: "A RIQUEZA É COMER E VESTIR", caption: "Valemos mais que lírios passarinhos.", paragraphs: [
        "30 É Deus quem veste a erva do campo, que hoje dá flor e amanhã desaparece, queimada no forno. Então é claro que ele vestirá também vocês, que têm uma fé tão pequena!",
        "31 Portanto, não fiquem preocupados, perguntando: “Onde é que vamos arranjar comida?” ou “Onde é que vamos arranjar bebida?” ou “Onde é que vamos arranjar roupas?”",
        "32 Pois os pagãos é que estão sempre procurando essas coisas. O Pai de vocês, que está no céu, sabe que vocês precisam de tudo isso.",
        "33 Portanto, ponham em primeiro lugar na sua vida o Reino de Deus e aquilo que Deus quer, e ele lhes dará todas essas coisas.",
        "34 Por isso, não fiquem preocupados com o dia de amanhã, pois o dia de amanhã trará as suas próprias preocupações. Para cada dia bastam as suas próprias dificuldades."
      ] },
    { kicker: "Mateus 7", section: "NÃO JULGUE OS OUTROS", paragraphs: [
        "1 — Não julguem os outros para vocês não serem julgados por Deus.",
        "2 Porque Deus julgará vocês do mesmo modo que vocês julgarem os outros e usará com vocês a mesma medida que vocês usarem para medir os outros.",
        "3 Por que é que você vê o cisco que está no olho do seu irmão e não repara na trave de madeira que está no seu próprio olho?",
        "4 Como é que você pode dizer ao seu irmão: “Me deixe tirar esse cisco do seu olho”, quando você está com uma trave no seu próprio olho?",
        "5 Hipócrita! Tire primeiro a trave que está no seu olho e então poderá ver bem para tirar o cisco que está no olho do seu irmão.",
        "6 — Não deem para os cachorros o que é sagrado, pois eles se virarão contra vocês e os atacarão; não joguem as suas pérolas para os porcos, pois eles as pisarão."
      ] },
    { section: "A BONDADE DE DEUS", paragraphs: [
        "7 — Peçam e vocês receberão; procurem e vocês acharão; batam, e a porta será aberta para vocês.",
        "8 Porque todos aqueles que pedem recebem; aqueles que procuram acham; e a porta será aberta para quem bate.",
        "9 Por acaso algum de vocês, que é pai, será capaz de dar uma pedra ao seu filho, quando ele pede pão?",
        "10 Ou lhe dará uma cobra, quando ele pede um peixe?",
        "11 Vocês, mesmo sendo maus, sabem dar coisas boas aos seus filhos. Quanto mais o Pai de vocês, que está no céu, dará coisas boas aos que lhe pedirem!",
        "12 — Façam aos outros o que querem que eles façam a vocês; pois isso é o que querem dizer a Lei de Moisés e os ensinamentos dos Profetas."
      ] },
    { blocks: [
        { section: "OS DOIS CAMINHOS", paragraphs: [
            "13 - Entrem pela porta estreita porque a porta larga e o caminho fácil levam para o inferno, e há muitas pessoas que andam por esse caminho.",
            "14 - A porta estreita e o caminho difícil levam para a vida, e poucas pessoas encontram esse caminho.",
            "ESCOLHA DO CAMINHO: Estreito para o céu ou o largo para perdição."
          ] },
        { section: "OS FALSOS PROFETAS", caption: "A árvore boa produz bons frutos", paragraphs: [
            "15 - Cuidado com os falsos profetas! Eles chegam disfarçados de ovelhas, mas por dentro são lobos selvagens.",
            "16 - Vocês os conhecerão pelo que eles fazem. Os espinheiros não dão uvas, e os pés de urtiga não dão figos.",
            "17 - Assim, toda árvore boa dá frutas boas, e a árvore que não presta dá frutas ruins.",
            "18 - A árvore boa não pode dar frutas ruins, e a árvore que não presta não pode dar frutas boas.",
            "19 - Toda árvore que não dá frutas boas é cortada e jogada no fogo.",
            "20 - Portanto, vocês conhecerão os falsos profetas pelas coisas que eles fazem"
          ] }
      ] },
    { section: "QUEM ENTRA NO REINO DO CÉU", paragraphs: [
        "21 — Não é toda pessoa que me chama de “Senhor, Senhor” que entrará no Reino do Céu, mas somente quem faz a vontade do meu Pai, que está no céu.",
        "22 Quando aquele dia chegar, muitas pessoas vão me dizer: “Senhor, Senhor, pelo poder do seu nome anunciamos a mensagem de Deus e pelo seu nome expulsamos demônios e fizemos muitos milagres!”",
        "23 Então eu direi claramente a essas pessoas: “Eu nunca conheci vocês! Afastem-se de mim, vocês que só fazem o mal!”"
      ] },
    { section: "OS DOIS ALICERCES", paragraphs: [
        "24 - Quem ouve esses meus ensinamentos e vive de acordo com eles é como um homem sábio que construiu a sua casa na rocha.",
        "25 - Caiu a chuva, vieram as enchentes, e o vento soprou com força contra aquela casa. Porém ela não caiu porque havia sido construída na rocha.",
        "26 - Quem ouve esses meus ensinamentos e não vive de acordo com eles é como um homem sem juízo que construiu a sua casa na areia.",
        "27 - Caiu a chuva, vieram as enchentes, e o vento soprou com força contra aquela casa. Ela caiu e ficou totalmente destruída."
      ] },
    { section: "A AUTORIDADE DE DEUS", paragraphs: [
        "28 Quando Jesus acabou de falar, as multidões estavam admiradas com a sua maneira de ensinar.",
        "29 Ele não era como os mestres da Lei; pelo contrário, ensinava com a autoridade dele mesmo."
      ] },
    { section: "O QUE EU DEVO FAZER PARA SEGUIR A JESUS?", paragraphs: [
        "O que eu devo fazer para seguir a Jesus? A bíblia nos diz em Mateus 16:24-25 o que fazer se quiser seguir a Jesus: “Se alguém quer ser meu seguidor, negue a si mesmo, tome sua cruz e siga-me. Se tentar se apegar à sua vida, a perderá. Mas, se abrir mão de sua vida por minha causa, a encontrará.”",
        "Se estiver disposto a dar este passo de fé faça esta oração de todo teu coração:",
        "\"Senhor meu Deus eu entrego a minha vida ao Senhor, perdoa os meus pecados, te aceito como único é suficiente Salvador, escreve meu nome no livro da vida amém!”"
      ] }
  ],

  /* =====================  ENGLISH (translation)  ===================== */
  en: [
    { kicker: "Matthew, chapters 5, 6 and 7", section: "WORDS OF JESUS",
      paragraphs: [
        "1 When Jesus saw the crowds, he went up a hill and sat down. His disciples came to him,",
        "2 and he began to teach them. Jesus said:"
      ] },
    { paragraphs: [
        "3 Happy are those who know they are spiritually poor, for the Kingdom of Heaven belongs to them.",
        "4 Happy are those who mourn, for God will comfort them.",
        "5 Happy are the humble, for they will receive what God has promised.",
        "6 Happy are those who hunger and thirst to do God's will, for he will fully satisfy them.",
        "7 Happy are those who are merciful to others, for God will be merciful to them.",
        "8 Happy are those who are pure in heart, for they will see God.",
        "9 Happy are those who work for peace, for God will treat them as his children.",
        "10 Happy are those who suffer persecution for doing God's will, for the Kingdom of Heaven belongs to them.",
        "11 Happy are you when people insult you, persecute you, and tell all kinds of lies against you because you follow me.",
        "12 Be glad and joyful, for a great reward is kept for you in heaven. This is how they persecuted the prophets who lived before you."
      ] },
    { section: "JESUS SAID", paragraphs: [
        "13 You are the salt of humanity; but if salt loses its taste, it is no longer salt and is no longer good for anything. It is thrown out and trampled underfoot.",
        "14 You are the light for the world. A city built on a hill cannot be hidden.",
        "15 No one lights a lamp and puts it under a basket. Instead, it is placed where it belongs, so that it may give light to everyone in the house."
      ] },
    { section: "THE LAW OF MOSES", paragraphs: [
        "17 Do not think that I came to do away with the Law of Moses or the teaching of the Prophets. I did not come to do away with them, but to give them their complete meaning.",
        "18 I tell you this, and it is true: as long as heaven and earth last, nothing will be taken away from the Law, not the smallest letter, not even a stroke of a pen. It will remain until the end of all things.",
        "19 So then, whoever disobeys even the least of these commandments and teaches others to do the same will be least in the Kingdom of Heaven. But whoever obeys the Law and teaches others to do the same will be great in the Kingdom of Heaven.",
        "20 For I tell you that you will enter the Kingdom of Heaven only if your righteousness is greater than that of the teachers of the Law and the Pharisees."
      ] },
    { section: "GOD'S TRIBUNAL", paragraphs: [
        "21 You have heard that it was said to your ancestors: 'Do not kill. Whoever kills will be brought to judgment.'",
        "22 But I tell you that whoever is angry with a brother or sister will be brought to judgment. Whoever says to a brother or sister, 'You are worthless,' will be brought before the council. And whoever calls a brother or sister a fool will be in danger of the fire of hell.",
        "23 So then, if you are offering your gift at the altar and remember that a brother or sister has something against you,",
        "24 leave your gift there in front of the altar, and go at once to make peace with that person. Then come back and offer your gift to God.",
        "25 If someone brings an accusation against you and takes you to court, settle the matter with that person quickly, while there is still time, before you get to court. Because once you get to court, you will be handed over to the judge, the judge will hand you over to the jailer, and you will be thrown into prison.",
        "26 I tell you this, and it is true: you will not get out until you have paid the last penny of your fine."
      ] },
    { section: "ADULTERY", paragraphs: [
        "27 You have heard that it was said: 'Do not commit adultery.'",
        "28 But I tell you: whoever looks at a woman and wants to possess her has already committed adultery with her in his heart.",
        "29 So then, if your right eye causes you to sin, gouge it out and throw it away. It is better to lose one part of your body than to have your whole body thrown into hell.",
        "30 And if your right hand causes you to sin, cut it off and throw it away. It is better to lose one part of your body than to have your whole body go to hell."
      ] },
    { section: "DIVORCE", paragraphs: [
        "31 It was also said: 'Whoever divorces his wife must give her a certificate of divorce.'",
        "32 But I tell you: any man who divorces his wife, except for sexual immorality, makes her an adulteress if she marries again. And whoever marries a divorced woman also commits adultery."
      ] },
    { section: "OATHS", paragraphs: [
        "33 You have heard that it was said to your ancestors: 'Do not break your promise, but keep whatever vow you make to the Lord.'",
        "34 But I tell you: do not swear at all. Do not swear by heaven, for it is God's throne;",
        "35 nor by the earth, for it is his footstool; nor by Jerusalem, for it is the city of the great King.",
        "36 And do not swear by your own head, for you cannot make even one hair white or black.",
        "37 Simply let your 'Yes' be yes and your 'No,' no; anything more than this comes from the evil one."
      ] },
    { section: "REVENGE", paragraphs: [
        "38 You have heard that it was said: 'An eye for an eye, and a tooth for a tooth.'",
        "39 But I tell you: do not take revenge on those who wrong you. If someone slaps you on the cheek, turn the other one to be slapped too.",
        "40 If someone sues you to take your shirt, let him have your coat as well.",
        "41 If a soldier forces you to carry a load for one mile, carry it two miles.",
        "42 If someone asks you for something, give it; and if someone wants to borrow, lend to them."
      ] },
    { section: "LOVE YOUR ENEMIES", paragraphs: [
        "43 You have heard that it was said: 'Love your friends and hate your enemies.'",
        "44 But I tell you: love your enemies and pray for those who persecute you,",
        "45 so that you may become children of your Father in heaven. For he makes his sun rise on the good and the evil, and sends rain on the righteous and the unrighteous alike.",
        "46 If you love only those who love you, why should God reward you for that? Even the tax collectors love those who love them!",
        "47 And if you greet only your friends, what more are you doing than others? Even the pagans do that!",
        "48 So then, be perfect, just as your Father in heaven is perfect."
      ] },
    { kicker: "Matthew 6", section: "GIVING TO THE NEEDY", paragraphs: [
        "1 Be careful not to perform your religious duties in public just to be seen by others. If you do, you will have no reward from your Father in heaven.",
        "2 So when you give to someone in need, do not announce it, as the hypocrites do in the synagogues and in the streets. They do this to be praised by others. I tell you this, and it is true: they have already been paid in full.",
        "3 But when you help someone in need, do it so quietly that not even your closest friend knows what you have done.",
        "4 Keep it secret; and your Father, who sees what is done in secret, will reward you."
      ] },
    { section: "PRAYER", paragraphs: [
        "5 When you pray, do not be like the hypocrites. They love to stand and pray in the synagogues and on the street corners so that people will see them. I tell you this, and it is true: they have already been paid in full.",
        "6 But when you pray, go into your room, close the door, and pray to your Father, who is unseen. And your Father, who sees what is done in secret, will reward you.",
        "7 And when you pray, do not keep repeating what you have already said, as the pagans do. They think God will hear them because of their many words.",
        "8 Do not be like them, for your Father already knows what you need before you ask him."
      ] },
    { section: "PRAYER", paragraphs: [
        "9 So then, pray like this: 'Our Father in heaven, may your name be kept holy.",
        "10 May your Kingdom come. May your will be done on earth as it is done in heaven!",
        "11 Give us today the food we need.",
        "12 Forgive us our sins, as we forgive those who have sinned against us.",
        "13 And do not let us fall into temptation, but deliver us from evil. [For yours is the Kingdom, the power, and the glory, forever. Amen!]'",
        "14 Because if you forgive those who wrong you, your Father in heaven will also forgive you.",
        "15 But if you do not forgive them, your Father will not forgive your wrongs either."
      ] },
    { section: "FASTING", paragraphs: [
        "16 When you fast, do not put on a sad face like the hypocrites, for they do this so that everyone will know they are fasting. I tell you this, and it is true: they have already been paid in full.",
        "17 But when you fast, wash your face and comb your hair,",
        "18 so that others will not know you are fasting. Only your Father, who is unseen, will know you are fasting. And your Father, who sees what is done in secret, will reward you."
      ] },
    { section: "TREASURES IN HEAVEN", paragraphs: [
        "19 Do not store up riches here on earth, where moths and rust destroy, and where thieves break in and steal.",
        "20 Instead, store up riches in heaven, where moths and rust cannot destroy them, and thieves cannot break in and steal them.",
        "21 For wherever your riches are, there your heart will be also."
      ] },
    { section: "RICHES ARE FOOD AND CLOTHING", caption: "We are worth more than lilies and little birds.", paragraphs: [
        "24 A servant cannot serve two masters at the same time, for he will hate one and love the other, or be loyal to one and despise the other. You cannot serve God and money at the same time.",
        "25 That is why I tell you: do not worry about the food and drink you need to live, or about the clothes you need to wear. Isn't life worth more than food? And isn't the body worth more than clothing?"
      ] },
    { section: "RICHES ARE FOOD AND CLOTHING", caption: "We are worth more than lilies and little birds.", paragraphs: [
        "26 Look at the birds flying in the sky: they do not sow, do not reap, and do not store food in barns. Yet your Father in heaven feeds them. Aren't you worth much more than the birds?",
        "27 Can any of you add a single hour to your life by worrying about it?",
        "28 And why do you worry about clothes? See how the wildflowers grow: they do not work, and they do not make clothes for themselves.",
        "29 But I tell you that not even Solomon, with all his wealth, was dressed as beautifully as one of these flowers."
      ] },
    { section: "RICHES ARE FOOD AND CLOTHING", caption: "We are worth more than lilies and little birds.", paragraphs: [
        "30 It is God who clothes the wild grass, which blooms today and tomorrow is thrown into the fire. So then, it is certain that he will clothe you too, you of little faith!",
        "31 So do not worry, asking, 'Where will we get food?' or 'Where will we get drink?' or 'Where will we get clothes?'",
        "32 For the pagans are always chasing after these things. Your Father in heaven knows that you need all of this.",
        "33 So then, put God's Kingdom and what God wants first in your life, and he will give you all these other things as well.",
        "34 Therefore, do not worry about tomorrow, for tomorrow will bring worries of its own. Each day has enough trouble of its own."
      ] },
    { kicker: "Matthew 7", section: "DO NOT JUDGE OTHERS", paragraphs: [
        "1 Do not judge others, so that you will not be judged by God.",
        "2 For God will judge you in the same way you judge others, and he will use the same measure you use to measure others.",
        "3 Why do you look at the speck in your brother's eye, and pay no attention to the plank in your own eye?",
        "4 How can you say to your brother, 'Let me take that speck out of your eye,' when you have a plank in your own eye?",
        "5 You hypocrite! First take the plank out of your own eye, and then you will see clearly to take the speck out of your brother's eye.",
        "6 Do not give to dogs what is sacred, for they will turn and attack you; do not throw your pearls before pigs, for they will trample them underfoot."
      ] },
    { section: "GOD'S KINDNESS", paragraphs: [
        "7 Ask, and you will receive; search, and you will find; knock, and the door will be opened to you.",
        "8 For everyone who asks receives; whoever searches finds; and the door is opened to the one who knocks.",
        "9 Would any of you who are a father give your child a stone when he asks for bread?",
        "10 Or give him a snake when he asks for a fish?",
        "11 As bad as you are, you still know how to give good things to your children. How much more, then, will your Father in heaven give good things to those who ask him!",
        "12 Do to others what you want them to do to you; this is what the Law of Moses and the teaching of the Prophets mean."
      ] },
    { blocks: [
        { section: "THE TWO ROADS", paragraphs: [
            "13 Go in through the narrow gate, for the wide gate and the easy road lead to hell, and many people go that way.",
            "14 The narrow gate and the hard road lead to life, and only a few people find it.",
            "CHOOSING THE ROAD: narrow, to heaven, or wide, to destruction."
          ] },
        { section: "FALSE PROPHETS", caption: "A good tree produces good fruit", paragraphs: [
            "15 Watch out for false prophets! They come to you disguised as sheep, but on the inside they are wild wolves.",
            "16 You will know them by what they do. Thorn bushes do not bear grapes, and thistles do not bear figs.",
            "17 In the same way, every good tree bears good fruit, and a bad tree bears bad fruit.",
            "18 A good tree cannot bear bad fruit, and a bad tree cannot bear good fruit.",
            "19 Any tree that does not bear good fruit is cut down and thrown into the fire.",
            "20 So then, you will know the false prophets by what they do."
          ] }
      ] },
    { section: "WHO ENTERS THE KINGDOM OF HEAVEN", paragraphs: [
        "21 Not everyone who calls me 'Lord, Lord' will enter the Kingdom of Heaven, but only the one who does the will of my Father in heaven.",
        "22 When that day comes, many will say to me, 'Lord, Lord, in your name we proclaimed God's message, and in your name we drove out demons and performed many miracles!'",
        "23 Then I will tell them plainly, 'I never knew you! Get away from me, you who do nothing but evil!'"
      ] },
    { section: "THE TWO FOUNDATIONS", paragraphs: [
        "24 Whoever hears these teachings of mine and lives by them is like a wise man who built his house on rock.",
        "25 The rain fell, the floods came, and the wind blew hard against that house. But it did not fall, because it was built on rock.",
        "26 Whoever hears these teachings of mine and does not live by them is like a foolish man who built his house on sand.",
        "27 The rain fell, the floods came, and the wind blew hard against that house. It fell, and was completely destroyed."
      ] },
    { section: "GOD'S AUTHORITY", paragraphs: [
        "28 When Jesus finished speaking, the crowds were amazed at the way he taught.",
        "29 He was not like the teachers of the Law; instead, he taught with authority of his own."
      ] },
    { section: "WHAT MUST I DO TO FOLLOW JESUS?", paragraphs: [
        "What must I do to follow Jesus? The Bible tells us in Matthew 16:24-25 what to do if you want to follow Jesus: 'If anyone wants to be my follower, let him deny himself, take up his cross, and follow me. If you try to cling to your life, you will lose it. But if you give up your life for my sake, you will find it.'",
        "If you are willing to take this step of faith, pray this prayer with all your heart:",
        "'Lord my God, I give my life to you. Forgive my sins. I accept you as my one and sufficient Savior. Write my name in the book of life. Amen!'"
      ] }
  ],

  /* =====================  ESPAÑOL (traducción)  ===================== */
  es: [
    { kicker: "Mateo, capítulos 5, 6 y 7", section: "PALABRAS DE JESÚS",
      paragraphs: [
        "1 Cuando Jesús vio a aquellas multitudes, subió a un monte y se sentó. Sus discípulos se acercaron a él,",
        "2 y él comenzó a enseñarles. Jesús dijo:"
      ] },
    { paragraphs: [
        "3 Felices los que saben que son pobres en espíritu, porque de ellos es el Reino de los Cielos.",
        "4 Felices los que lloran, porque Dios los consolará.",
        "5 Felices los humildes, porque recibirán lo que Dios ha prometido.",
        "6 Felices los que tienen hambre y sed de hacer la voluntad de Dios, porque él los saciará por completo.",
        "7 Felices los que tienen misericordia de los demás, porque Dios tendrá misericordia de ellos.",
        "8 Felices los de corazón puro, porque ellos verán a Dios.",
        "9 Felices los que trabajan por la paz, porque Dios los tratará como hijos suyos.",
        "10 Felices los que sufren persecución por hacer la voluntad de Dios, porque de ellos es el Reino de los Cielos.",
        "11 Felices ustedes cuando los insulten, los persigan y digan toda clase de calumnias contra ustedes por seguirme a mí.",
        "12 Alégrense y llénense de gozo, porque una gran recompensa les espera en el cielo. Así persiguieron también a los profetas que vivieron antes de ustedes."
      ] },
    { section: "JESÚS DIJO", paragraphs: [
        "13 Ustedes son la sal para la humanidad; pero si la sal pierde su sabor, ya no sirve para nada. Se tira afuera y la gente la pisa al pasar.",
        "14 Ustedes son la luz para el mundo. No se puede esconder una ciudad construida sobre un monte.",
        "15 Nadie enciende una lámpara para ponerla debajo de un cesto. Al contrario, la coloca en su lugar, para que alumbre a todos los que están en la casa."
      ] },
    { section: "LA LEY DE MOISÉS", paragraphs: [
        "17 No piensen que vine a acabar con la Ley de Moisés o con las enseñanzas de los Profetas. No vine a acabar con ellas, sino a darles su sentido completo.",
        "18 Les aseguro que esto es verdad: mientras existan el cielo y la tierra, no se quitará de la Ley ni la letra más pequeña, ni una sola tilde. Y así será hasta que todo se cumpla.",
        "19 Por eso, cualquiera que desobedezca el más pequeño de los mandamientos y enseñe a otros a hacer lo mismo, será considerado el más pequeño en el Reino de los Cielos. En cambio, el que obedezca la Ley y enseñe a otros a hacerlo será considerado grande en el Reino de los Cielos.",
        "20 Porque les aseguro que solo entrarán en el Reino de los Cielos si son más fieles en cumplir la voluntad de Dios que los maestros de la Ley y los fariseos."
      ] },
    { section: "EL TRIBUNAL DE DIOS", paragraphs: [
        "21 Ustedes oyeron que se dijo a los antepasados: 'No mates. El que mate será llevado a juicio.'",
        "22 Pero yo les digo que cualquiera que se enoje con su hermano será llevado a juicio. El que le diga a su hermano: 'No vales nada', será llevado ante el tribunal. Y el que llame idiota a su hermano quedará expuesto al fuego del infierno.",
        "23 Por eso, si estás presentando tu ofrenda en el altar y te acuerdas de que tu hermano tiene algo contra ti,",
        "24 deja tu ofrenda allí, delante del altar, y ve primero a reconciliarte con tu hermano. Después vuelve y presenta tu ofrenda a Dios.",
        "25 Si alguien te acusa y te lleva ante el tribunal, ponte de acuerdo con esa persona lo antes posible, mientras aún estés a tiempo, antes de llegar allí. Porque una vez que llegues ante el tribunal, serás entregado al juez, el juez te entregará al carcelero, y serás echado en la cárcel.",
        "26 Te aseguro que esto es verdad: no saldrás de allí hasta que hayas pagado hasta el último centavo de la multa."
      ] },
    { section: "EL ADULTERIO", paragraphs: [
        "27 Ustedes oyeron que se dijo: 'No cometas adulterio.'",
        "28 Pero yo les digo: cualquiera que mire a una mujer deseándola ya cometió adulterio con ella en su corazón.",
        "29 Por eso, si tu ojo derecho te hace pecar, arráncalo y tíralo. Es mejor que pierdas una parte de tu cuerpo y no que todo tu cuerpo sea arrojado al infierno.",
        "30 Y si tu mano derecha te hace pecar, córtala y tírala. Es mejor que pierdas una parte de tu cuerpo y no que todo tu cuerpo vaya al infierno."
      ] },
    { section: "EL DIVORCIO", paragraphs: [
        "31 También se dijo: 'Cualquiera que se divorcie de su esposa debe darle un certificado de divorcio.'",
        "32 Pero yo les digo: todo el que se divorcia de su esposa, salvo en caso de infidelidad, la expone a cometer adulterio si ella se vuelve a casar. Y el que se case con una mujer divorciada también comete adulterio."
      ] },
    { section: "LOS JURAMENTOS", paragraphs: [
        "33 Ustedes oyeron que se dijo a los antepasados: 'No rompas tu promesa, sino cumple lo que jures al Señor.'",
        "34 Pero yo les digo: no juren de ninguna manera. Ni por el cielo, porque es el trono de Dios;",
        "35 ni por la tierra, porque es el estrado de sus pies; ni por Jerusalén, porque es la ciudad del gran Rey.",
        "36 Ni juren tampoco por su cabeza, porque no pueden hacer que ni uno solo de sus cabellos se vuelva blanco o negro.",
        "37 Que su 'sí' sea sí, y su 'no' sea no; porque cualquier cosa de más viene del maligno."
      ] },
    { section: "LA VENGANZA", paragraphs: [
        "38 Ustedes oyeron que se dijo: 'Ojo por ojo, diente por diente.'",
        "39 Pero yo les digo: no se venguen del que les haga mal. Si alguien te da una bofetada en una mejilla, vuélvele también la otra.",
        "40 Si alguien te demanda para quitarte la túnica, déjale también la capa.",
        "41 Si un soldado te obliga a llevar carga por un kilómetro, llévala dos.",
        "42 A quien te pida algo, dáselo; y al que quiera pedirte prestado, no le vuelvas la espalda."
      ] },
    { section: "AMEN A SUS ENEMIGOS", paragraphs: [
        "43 Ustedes oyeron que se dijo: 'Ama a tu amigo y odia a tu enemigo.'",
        "44 Pero yo les digo: amen a sus enemigos y oren por los que los persiguen,",
        "45 para que sean hijos de su Padre que está en el cielo. Porque él hace salir el sol sobre malos y buenos, y hace caer la lluvia sobre justos e injustos.",
        "46 Si aman solo a los que los aman, ¿qué recompensa merecen? ¡Hasta los cobradores de impuestos hacen lo mismo!",
        "47 Y si solo saludan a sus amigos, ¿qué hacen de más que los demás? ¡Hasta los paganos hacen eso!",
        "48 Por eso, sean perfectos, así como su Padre celestial es perfecto."
      ] },
    { kicker: "Mateo 6", section: "LA LIMOSNA", paragraphs: [
        "1 Tengan cuidado de no practicar su religiosidad en público para que la gente los vea. Si lo hacen así, no tendrán recompensa de su Padre que está en el cielo.",
        "2 Por eso, cuando le des algo a alguien necesitado, no lo vayas contando, como hacen los hipócritas en las sinagogas y en las calles, para que la gente los alabe. Les aseguro que esto es verdad: ya recibieron su recompensa.",
        "3 Pero tú, cuando ayudes a alguien necesitado, hazlo de tal manera que ni tu amigo más cercano se entere de lo que hiciste.",
        "4 Que quede en secreto; y tu Padre, que ve lo que se hace en secreto, te dará la recompensa."
      ] },
    { section: "LA ORACIÓN", paragraphs: [
        "5 Cuando oren, no sean como los hipócritas. A ellos les gusta orar de pie en las sinagogas y en las esquinas de las calles, para que la gente los vea. Les aseguro que esto es verdad: ya recibieron su recompensa.",
        "6 Pero tú, cuando ores, entra en tu cuarto, cierra la puerta y ora a tu Padre, que no se puede ver. Y tu Padre, que ve lo que se hace en secreto, te dará la recompensa.",
        "7 Y cuando oren, no repitan palabras sin sentido, como hacen los paganos, que creen que Dios los va a escuchar por hablar mucho.",
        "8 No sean como ellos, porque el Padre de ustedes ya sabe lo que necesitan, antes de que se lo pidan."
      ] },
    { section: "LA ORACIÓN", paragraphs: [
        "9 Así que oren de esta manera: 'Padre nuestro que estás en el cielo, santificado sea tu nombre.",
        "10 Venga tu Reino. Hágase tu voluntad en la tierra como en el cielo.",
        "11 Danos hoy el pan que necesitamos.",
        "12 Perdona nuestras ofensas, así como nosotros perdonamos a los que nos ofenden.",
        "13 Y no nos dejes caer en tentación, sino líbranos del mal. [Porque tuyo es el Reino, el poder y la gloria, para siempre. ¡Amén!]'",
        "14 Porque si ustedes perdonan a los que les ofenden, su Padre celestial también los perdonará a ustedes.",
        "15 Pero si no los perdonan, tampoco su Padre les perdonará sus ofensas."
      ] },
    { section: "EL AYUNO", paragraphs: [
        "16 Cuando ayunen, no pongan cara triste, como hacen los hipócritas, que quieren que todos sepan que están ayunando. Les aseguro que esto es verdad: ya recibieron su recompensa.",
        "17 Tú, en cambio, cuando ayunes, lávate la cara y péinate,",
        "18 para que nadie note que estás ayunando, sino solo tu Padre, que no se puede ver. Y tu Padre, que ve lo que se hace en secreto, te dará la recompensa."
      ] },
    { section: "TESOROS EN EL CIELO", paragraphs: [
        "19 No acumulen riquezas aquí en la tierra, donde la polilla y el óxido destruyen, y donde los ladrones entran a robar.",
        "20 Acumulen más bien riquezas en el cielo, donde ni la polilla ni el óxido las destruyen, y donde los ladrones no pueden entrar a robarlas.",
        "21 Porque donde esté tu riqueza, allí estará también tu corazón."
      ] },
    { section: "LA RIQUEZA ES COMER Y VESTIR", caption: "Valemos más que los lirios y los pajarillos.", paragraphs: [
        "24 Ningún siervo puede servir a dos amos a la vez, porque odiará a uno y amará al otro, o será fiel a uno y despreciará al otro. Ustedes no pueden servir a Dios y al dinero al mismo tiempo.",
        "25 Por eso les digo: no se preocupen por la comida y la bebida que necesitan para vivir, ni por la ropa que necesitan para vestirse. ¿No vale la vida más que la comida? ¿Y el cuerpo, más que la ropa?"
      ] },
    { section: "LA RIQUEZA ES COMER Y VESTIR", caption: "Valemos más que los lirios y los pajarillos.", paragraphs: [
        "26 Miren las aves que vuelan por el cielo: no siembran, ni cosechan, ni guardan comida en graneros; y sin embargo el Padre de ustedes, que está en el cielo, las alimenta. ¿No valen ustedes mucho más que las aves?",
        "27 ¿Quién de ustedes puede alargar su vida aunque solo sea una hora, por mucho que se preocupe?",
        "28 ¿Y por qué se preocupan por la ropa? Miren cómo crecen las flores del campo: no trabajan ni hacen su propia ropa.",
        "29 Pero les aseguro que ni Salomón, con toda su riqueza, se vistió tan bien como una de ellas."
      ] },
    { section: "LA RIQUEZA ES COMER Y VESTIR", caption: "Valemos más que los lirios y los pajarillos.", paragraphs: [
        "30 Si Dios viste así a la hierba del campo, que hoy florece y mañana se echa al fuego, ¡cuánto más los vestirá a ustedes, gente de poca fe!",
        "31 Así que no anden preocupados preguntando: '¿Qué vamos a comer?' o '¿Qué vamos a beber?' o '¿Con qué vamos a vestirnos?'",
        "32 Porque los paganos andan siempre tras esas cosas. Su Padre celestial ya sabe que ustedes las necesitan.",
        "33 Busquen, más bien, primero el Reino de Dios y su justicia, y todo lo demás se les dará por añadidura.",
        "34 Por eso, no se preocupen por el día de mañana, que el día de mañana traerá su propia preocupación. A cada día le basta con su propio afán."
      ] },
    { kicker: "Mateo 7", section: "NO JUZGUEN A LOS DEMÁS", paragraphs: [
        "1 No juzguen a otros, para que Dios no los juzgue a ustedes.",
        "2 Porque Dios los juzgará de la misma manera en que ustedes juzguen a otros, y usará con ustedes la misma medida que usen con los demás.",
        "3 ¿Por qué te fijas en la astilla que está en el ojo de tu hermano y no reparas en la viga que está en el tuyo?",
        "4 ¿Cómo le vas a decir a tu hermano: 'Déjame sacarte esa astilla del ojo', si tienes una viga en el tuyo?",
        "5 ¡Hipócrita! Saca primero la viga de tu propio ojo, y entonces podrás ver bien para sacar la astilla del ojo de tu hermano.",
        "6 No den lo santo a los perros, porque se volverán contra ustedes y los atacarán; ni echen sus perlas delante de los cerdos, porque las pisotearán."
      ] },
    { section: "LA BONDAD DE DIOS", paragraphs: [
        "7 Pidan, y se les dará; busquen, y encontrarán; llamen, y se les abrirá.",
        "8 Porque todo el que pide, recibe; el que busca, encuentra; y al que llama, se le abre.",
        "9 ¿Quién de ustedes, si su hijo le pide pan, le da una piedra?",
        "10 ¿O si le pide un pescado, le da una serpiente?",
        "11 Pues si ustedes, siendo malos, saben dar cosas buenas a sus hijos, ¡cuánto más su Padre celestial dará cosas buenas a los que le pidan!",
        "12 Traten a los demás como quieren que ellos los traten a ustedes; en esto se resumen la Ley y los Profetas."
      ] },
    { blocks: [
        { section: "LOS DOS CAMINOS", paragraphs: [
            "13 Entren por la puerta angosta, porque ancha es la puerta y fácil el camino que lleva a la perdición, y muchos son los que entran por ella.",
            "14 Pero angosta es la puerta y difícil el camino que lleva a la vida, y son pocos los que la encuentran.",
            "ELIGE TU CAMINO: el angosto, hacia el cielo, o el ancho, hacia la perdición."
          ] },
        { section: "LOS FALSOS PROFETAS", caption: "El árbol bueno da buenos frutos", paragraphs: [
            "15 ¡Cuídense de los falsos profetas! Vienen a ustedes disfrazados de ovejas, pero por dentro son lobos feroces.",
            "16 Por sus frutos los conocerán. Los espinos no dan uvas, ni los abrojos dan higos.",
            "17 Así, todo árbol bueno da buen fruto, y el árbol malo da mal fruto.",
            "18 Un árbol bueno no puede dar mal fruto, ni un árbol malo dar buen fruto.",
            "19 Todo árbol que no da buen fruto se corta y se echa al fuego.",
            "20 Así que por sus frutos conocerán a los falsos profetas."
          ] }
      ] },
    { section: "QUIÉN ENTRA EN EL REINO DE LOS CIELOS", paragraphs: [
        "21 No todo el que me diga: 'Señor, Señor', entrará en el Reino de los Cielos, sino el que hace la voluntad de mi Padre celestial.",
        "22 Cuando llegue aquel día, muchos me dirán: 'Señor, Señor, ¿no profetizamos en tu nombre, y en tu nombre expulsamos demonios e hicimos muchos milagros?'",
        "23 Entonces les diré claramente: '¡Jamás los conocí! Apártense de mí, los que hacen el mal.'"
      ] },
    { section: "LOS DOS CIMIENTOS", paragraphs: [
        "24 Todo el que escucha estas palabras mías y las pone en práctica es como un hombre prudente que construyó su casa sobre la roca.",
        "25 Cayó la lluvia, vinieron las inundaciones y sopló el viento con fuerza contra esa casa; pero no cayó, porque estaba cimentada sobre la roca.",
        "26 Pero todo el que escucha estas palabras mías y no las pone en práctica es como un hombre insensato que construyó su casa sobre la arena.",
        "27 Cayó la lluvia, vinieron las inundaciones y sopló el viento con fuerza contra esa casa, y se derrumbó, y su ruina fue total."
      ] },
    { section: "LA AUTORIDAD DE DIOS", paragraphs: [
        "28 Cuando Jesús terminó de hablar, la gente estaba asombrada de su manera de enseñar,",
        "29 porque enseñaba como quien tiene autoridad, y no como los maestros de la Ley."
      ] },
    { section: "¿QUÉ DEBO HACER PARA SEGUIR A JESÚS?", paragraphs: [
        "¿Qué debo hacer para seguir a Jesús? La Biblia nos dice en Mateo 16:24-25 qué hacer si quieres seguir a Jesús: 'Si alguien quiere ser mi seguidor, niéguese a sí mismo, tome su cruz y sígame. Si intenta aferrarse a su vida, la perderá; pero si la entrega por mi causa, la encontrará.'",
        "Si estás dispuesto a dar este paso de fe, haz esta oración con todo tu corazón:",
        "'Señor mi Dios, te entrego mi vida. Perdona mis pecados. Te acepto como mi único y suficiente Salvador. Escribe mi nombre en el libro de la vida. ¡Amén!'"
      ] }
  ],

  /* =====================  ITALIANO (traduzione)  ===================== */
  it: [
    { kicker: "Matteo, capitoli 5, 6 e 7", section: "LE PAROLE DI GESÙ",
      paragraphs: [
        "1 Quando Gesù vide quelle folle, salì su un monte e si sedette. I suoi discepoli gli si avvicinarono,",
        "2 ed egli cominciò a insegnare loro. Gesù disse:"
      ] },
    { paragraphs: [
        "3 Beati quelli che sanno di essere poveri in spirito, perché di essi è il Regno dei Cieli.",
        "4 Beati quelli che piangono, perché Dio li consolerà.",
        "5 Beati gli umili, perché riceveranno ciò che Dio ha promesso.",
        "6 Beati quelli che hanno fame e sete di fare la volontà di Dio, perché egli li sazierà pienamente.",
        "7 Beati quelli che hanno misericordia degli altri, perché Dio avrà misericordia di loro.",
        "8 Beati quelli che hanno il cuore puro, perché vedranno Dio.",
        "9 Beati quelli che lavorano per la pace, perché Dio li tratterà come suoi figli.",
        "10 Beati quelli che sono perseguitati per aver fatto la volontà di Dio, perché di essi è il Regno dei Cieli.",
        "11 Beati voi, quando vi insulteranno, vi perseguiteranno e diranno ogni sorta di male contro di voi per causa mia.",
        "12 Rallegratevi e siate felici, perché una grande ricompensa vi aspetta nei cieli. Così infatti perseguitarono i profeti vissuti prima di voi."
      ] },
    { section: "GESÙ DISSE", paragraphs: [
        "13 Voi siete il sale per l'umanità; ma se il sale perde il sapore, non serve più a nulla. Viene buttato via e calpestato dalla gente.",
        "14 Voi siete la luce per il mondo. Una città costruita sopra un monte non si può nascondere.",
        "15 Nessuno accende una lampada per metterla sotto un cesto. Al contrario, la si mette al suo posto, perché faccia luce a tutti quelli che sono in casa."
      ] },
    { section: "LA LEGGE DI MOSÈ", paragraphs: [
        "17 Non pensate che io sia venuto ad abolire la Legge di Mosè o gli insegnamenti dei Profeti. Non sono venuto ad abolirli, ma a dare loro pieno compimento.",
        "18 Vi assicuro che questo è vero: finché dureranno il cielo e la terra, nulla sarà tolto dalla Legge, nemmeno la più piccola lettera o un solo trattino. E così sarà fino alla fine di tutte le cose.",
        "19 Perciò, chiunque trasgredisce anche il minimo di questi comandamenti e insegna agli altri a fare lo stesso, sarà considerato il più piccolo nel Regno dei Cieli. Chi invece li osserva e li insegna sarà considerato grande nel Regno dei Cieli.",
        "20 Perché vi assicuro che entrerete nel Regno dei Cieli solo se sarete più fedeli nel fare la volontà di Dio dei maestri della Legge e dei farisei."
      ] },
    { section: "IL TRIBUNALE DI DIO", paragraphs: [
        "21 Avete udito che fu detto agli antichi: 'Non uccidere. Chi uccide sarà sottoposto al giudizio.'",
        "22 Ma io vi dico che chiunque si adira con il proprio fratello sarà sottoposto al giudizio. Chi dice al proprio fratello: 'Non vali nulla', sarà sottoposto al tribunale. E chi lo chiama stolto rischia il fuoco della Geenna.",
        "23 Perciò, se stai per presentare la tua offerta all'altare e lì ti ricordi che tuo fratello ha qualcosa contro di te,",
        "24 lascia lì la tua offerta, davanti all'altare, e va' prima a riconciliarti con tuo fratello; poi torna e presenta la tua offerta a Dio.",
        "25 Se qualcuno ti accusa e ti porta in tribunale, mettiti presto d'accordo con lui, finché sei ancora in tempo, prima di arrivarci. Perché una volta arrivati davanti al giudice, il giudice ti consegnerà alla guardia e sarai gettato in prigione.",
        "26 Ti assicuro che questo è vero: non ne uscirai finché non avrai pagato fino all'ultimo centesimo."
      ] },
    { section: "L'ADULTERIO", paragraphs: [
        "27 Avete udito che fu detto: 'Non commettere adulterio.'",
        "28 Ma io vi dico: chiunque guarda una donna desiderandola ha già commesso adulterio con lei nel proprio cuore.",
        "29 Perciò, se il tuo occhio destro ti fa cadere in peccato, cavalo e gettalo via; è meglio perdere una parte del corpo piuttosto che essere gettato con tutto il corpo nella Geenna.",
        "30 E se la tua mano destra ti fa cadere in peccato, tagliala e gettala via; è meglio perdere una parte del corpo piuttosto che finire con tutto il corpo nella Geenna."
      ] },
    { section: "IL DIVORZIO", paragraphs: [
        "31 Fu anche detto: 'Chi ripudia la propria moglie le dia l'atto di ripudio.'",
        "32 Ma io vi dico: chiunque ripudia la propria moglie, se non in caso di infedeltà, la espone all'adulterio se lei si risposa. E chi sposa una donna ripudiata commette anch'egli adulterio."
      ] },
    { section: "I GIURAMENTI", paragraphs: [
        "33 Avete udito che fu detto agli antichi: 'Non spergiurare, ma mantieni verso il Signore i tuoi giuramenti.'",
        "34 Ma io vi dico: non giurate affatto: né per il cielo, perché è il trono di Dio;",
        "35 né per la terra, perché è lo sgabello dei suoi piedi; né per Gerusalemme, perché è la città del gran Re.",
        "36 Non giurare nemmeno per la tua testa, perché non puoi rendere bianco o nero un solo capello.",
        "37 Il vostro parlare sia: 'Sì, sì', 'No, no'; il di più viene dal maligno."
      ] },
    { section: "LA VENDETTA", paragraphs: [
        "38 Avete udito che fu detto: 'Occhio per occhio, dente per dente.'",
        "39 Ma io vi dico: non opponetevi al malvagio; anzi, se uno ti schiaffeggia sulla guancia destra, porgigli anche l'altra.",
        "40 E a chi vuole portarti in tribunale per toglierti la tunica, lascia anche il mantello.",
        "41 E se uno ti costringe a fare un miglio, fanne con lui due.",
        "42 Da' a chi ti chiede, e a chi desidera un prestito da te non voltare le spalle."
      ] },
    { section: "AMARE I NEMICI", paragraphs: [
        "43 Avete udito che fu detto: 'Ama il tuo prossimo e odia il tuo nemico.'",
        "44 Ma io vi dico: amate i vostri nemici e pregate per quelli che vi perseguitano,",
        "45 affinché siate figli del Padre vostro che è nei cieli; perché egli fa sorgere il sole sopra i buoni e sopra i cattivi, e fa piovere sui giusti e sugli ingiusti.",
        "46 Se amate solo quelli che vi amano, che merito ne avete? Non fanno lo stesso anche gli esattori delle tasse?",
        "47 E se salutate soltanto i vostri amici, che fate di straordinario? Non fanno lo stesso anche i pagani?",
        "48 Siate dunque perfetti, come è perfetto il Padre vostro celeste."
      ] },
    { kicker: "Matteo 6", section: "LA CARITÀ", paragraphs: [
        "1 Fate attenzione a non compiere le vostre pratiche religiose davanti agli uomini per essere visti da loro; altrimenti non avrete ricompensa presso il Padre vostro che è nei cieli.",
        "2 Quando fai un'elemosina, non farla suonare la tromba davanti a te, come fanno gli ipocriti nelle sinagoghe e nelle strade per essere lodati dalla gente. Vi assicuro che questo è vero: essi hanno già ricevuto la loro ricompensa.",
        "3 Ma tu, quando fai l'elemosina, non sappia la tua sinistra ciò che fa la tua destra,",
        "4 affinché la tua elemosina rimanga nel segreto; e il Padre tuo, che vede nel segreto, te ne darà la ricompensa."
      ] },
    { section: "LA PREGHIERA", paragraphs: [
        "5 Quando pregate, non siate come gli ipocriti, ai quali piace pregare stando in piedi nelle sinagoghe e agli angoli delle piazze, per essere visti dalla gente. Vi assicuro che questo è vero: essi hanno già ricevuto la loro ricompensa.",
        "6 Ma tu, quando preghi, entra nella tua camera, chiudi la porta e prega il Padre tuo che è nel segreto; e il Padre tuo, che vede nel segreto, te ne darà la ricompensa.",
        "7 E pregando, non usate troppe parole come fanno i pagani, i quali pensano di essere esauditi a forza di parole.",
        "8 Non siate dunque come loro, poiché il Padre vostro sa di che cosa avete bisogno, prima ancora che glielo chiediate."
      ] },
    { section: "LA PREGHIERA", paragraphs: [
        "9 Voi dunque pregate così: 'Padre nostro che sei nei cieli, sia santificato il tuo nome.",
        "10 Venga il tuo Regno. Sia fatta la tua volontà, come in cielo, così in terra.",
        "11 Dacci oggi il nostro pane quotidiano.",
        "12 E perdonaci i nostri peccati, come anche noi li perdoniamo a chi ci ha offeso.",
        "13 E non esporci alla tentazione, ma liberaci dal maligno. [Perché tuo è il regno, la potenza e la gloria, in eterno. Amen!]'",
        "14 Perché se voi perdonate agli altri le loro colpe, il Padre vostro celeste perdonerà anche a voi.",
        "15 Ma se non perdonate agli altri, neppure il Padre vostro perdonerà le vostre colpe."
      ] },
    { section: "IL DIGIUNO", paragraphs: [
        "16 Quando digiunate, non abbiate un aspetto triste come gli ipocriti, i quali si sfigurano il volto per far sapere agli altri che digiunano. Vi assicuro che questo è vero: essi hanno già ricevuto la loro ricompensa.",
        "17 Ma tu, quando digiuni, làvati il viso e pèttinati,",
        "18 in modo che gli altri non vedano che digiuni, ma solo il Padre tuo che è nel segreto; e il Padre tuo, che vede nel segreto, te ne darà la ricompensa."
      ] },
    { section: "TESORI IN CIELO", paragraphs: [
        "19 Non accumulate tesori sulla terra, dove la tignola e la ruggine consumano, e dove i ladri scassinano e rubano.",
        "20 Accumulate piuttosto tesori in cielo, dove né tignola né ruggine consumano, e dove i ladri non scassinano né rubano.",
        "21 Perché dov'è il tuo tesoro, lì sarà anche il tuo cuore."
      ] },
    { section: "LA RICCHEZZA È CIBO E VESTITO", caption: "Valiamo più dei gigli e degli uccellini.", paragraphs: [
        "24 Nessuno può servire due padroni, perché o odierà l'uno e amerà l'altro, o sarà fedele all'uno e disprezzerà l'altro. Non potete servire Dio e il denaro.",
        "25 Per questo vi dico: non affannatevi per la vostra vita, di che cosa mangerete o berrete; né per il vostro corpo, di che cosa vi vestirete. Non è la vita più del cibo, e il corpo più del vestito?"
      ] },
    { section: "LA RICCHEZZA È CIBO E VESTITO", caption: "Valiamo più dei gigli e degli uccellini.", paragraphs: [
        "26 Guardate gli uccelli del cielo: non seminano, non mietono, non raccolgono in granai, eppure il Padre vostro celeste li nutre. Non valete voi molto più di loro?",
        "27 E chi di voi, per quanto si preoccupi, può aggiungere alla propria vita un'ora sola?",
        "28 E perché vi affannate per il vestito? Osservate come crescono i gigli del campo: non lavorano e non filano.",
        "29 Eppure vi dico che neanche Salomone, con tutta la sua gloria, vestì come uno di loro."
      ] },
    { section: "LA RICCHEZZA È CIBO E VESTITO", caption: "Valiamo più dei gigli e degli uccellini.", paragraphs: [
        "30 Se dunque Dio veste così l'erba dei campi, che oggi è e domani si getta nel forno, non farà molto di più per voi, gente di poca fede?",
        "31 Non affannatevi dunque, dicendo: 'Che cosa mangeremo?' o 'Che cosa berremo?' o 'Di che cosa ci vestiremo?'",
        "32 Sono i pagani che ricercano tutte queste cose; il Padre vostro celeste sa che ne avete bisogno.",
        "33 Cercate prima il Regno di Dio e la sua giustizia, e tutte queste cose vi saranno date in più.",
        "34 Non affannatevi dunque per il domani, perché il domani avrà cura di se stesso. A ciascun giorno basta la sua pena."
      ] },
    { kicker: "Matteo 7", section: "NON GIUDICATE", paragraphs: [
        "1 Non giudicate, affinché non siate giudicati.",
        "2 Perché con il giudizio con cui giudicate sarete giudicati, e con la misura con cui misurate sarà misurato a voi.",
        "3 Perché guardi la pagliuzza che è nell'occhio di tuo fratello, e non ti accorgi della trave che è nel tuo occhio?",
        "4 Come puoi dire a tuo fratello: 'Lascia che tolga la pagliuzza dal tuo occhio', mentre hai una trave nel tuo?",
        "5 Ipocrita! Togli prima la trave dal tuo occhio, e allora vedrai bene per togliere la pagliuzza dall'occhio di tuo fratello.",
        "6 Non date le cose sante ai cani, e non gettate le vostre perle davanti ai porci, perché non le calpestino e poi si voltino a sbranarvi."
      ] },
    { section: "LA BONTÀ DI DIO", paragraphs: [
        "7 Chiedete, e vi sarà dato; cercate, e troverete; bussate, e vi sarà aperto.",
        "8 Perché chiunque chiede riceve; chi cerca trova; e a chi bussa sarà aperto.",
        "9 Chi tra voi, se il figlio gli chiede un pane, gli darà una pietra?",
        "10 O se gli chiede un pesce, gli darà una serpe?",
        "11 Se voi dunque, che siete cattivi, sapete dare cose buone ai vostri figli, quanto più il Padre vostro celeste darà cose buone a chi gliele chiede!",
        "12 Tutto quello che volete che gli uomini facciano a voi, fatelo anche voi a loro: questa è la Legge ed i Profeti."
      ] },
    { blocks: [
        { section: "LE DUE VIE", paragraphs: [
            "13 Entrate per la porta stretta, perché larga è la porta e spaziosa la via che conduce alla perdizione, e molti sono quelli che entrano per essa.",
            "14 Quanto stretta è la porta e angusta la via che conduce alla vita! E pochi sono quelli che la trovano.",
            "SCEGLI LA VIA: stretta, verso il cielo, o larga, verso la perdizione."
          ] },
        { section: "I FALSI PROFETI", caption: "Il buon albero produce buoni frutti", paragraphs: [
            "15 Guardatevi dai falsi profeti! Vengono a voi travestiti da pecore, ma dentro sono lupi rapaci.",
            "16 Li riconoscerete dai loro frutti. Si raccolgono forse uve dalle spine, o fichi dai rovi?",
            "17 Così ogni albero buono produce frutti buoni, e l'albero cattivo produce frutti cattivi.",
            "18 Un albero buono non può produrre frutti cattivi, né un albero cattivo produrre frutti buoni.",
            "19 Ogni albero che non produce buon frutto viene tagliato e gettato nel fuoco.",
            "20 Li riconoscerete dunque dai loro frutti."
          ] }
      ] },
    { section: "CHI ENTRA NEL REGNO DEI CIELI", paragraphs: [
        "21 Non chiunque mi dice: 'Signore, Signore', entrerà nel Regno dei Cieli, ma chi fa la volontà del Padre mio che è nei cieli.",
        "22 In quel giorno molti mi diranno: 'Signore, Signore, non abbiamo profetizzato nel tuo nome, e nel tuo nome non abbiamo scacciato demòni, e nel tuo nome non abbiamo fatto molti miracoli?'",
        "23 Allora dichiarerò loro: 'Non vi ho mai conosciuti; allontanatevi da me, voi che operate l'iniquità.'"
      ] },
    { section: "LE DUE FONDAMENTA", paragraphs: [
        "24 Chi ascolta queste mie parole e le mette in pratica è simile a un uomo saggio che costruì la sua casa sopra la roccia.",
        "25 Cadde la pioggia, vennero le inondazioni, soffiarono i venti e si abbatterono su quella casa; ma essa non cadde, perché era fondata sulla roccia.",
        "26 Chi ascolta queste mie parole e non le mette in pratica è simile a un uomo stolto che costruì la sua casa sulla sabbia.",
        "27 Cadde la pioggia, vennero le inondazioni, soffiarono i venti e si abbatterono su quella casa; ed essa cadde, e la sua rovina fu grande."
      ] },
    { section: "L'AUTORITÀ DI DIO", paragraphs: [
        "28 Quando Gesù ebbe finito questi discorsi, le folle restarono stupite del suo insegnamento,",
        "29 perché egli insegnava loro come uno che ha autorità, e non come i loro maestri della Legge."
      ] },
    { section: "CHE COSA DEVO FARE PER SEGUIRE GESÙ?", paragraphs: [
        "Che cosa devo fare per seguire Gesù? La Bibbia ci dice in Matteo 16:24-25 che cosa fare se vuoi seguire Gesù: 'Se qualcuno vuole essere mio discepolo, rinneghi se stesso, prenda la sua croce e mi segua. Perché chi vorrà salvare la propria vita la perderà; ma chi la perderà per causa mia, la troverà.'",
        "Se sei disposto a compiere questo passo di fede, fai questa preghiera con tutto il cuore:",
        "'Signore mio Dio, ti affido la mia vita. Perdona i miei peccati. Ti accolgo come mio unico e sufficiente Salvatore. Scrivi il mio nome nel libro della vita. Amen!'"
      ] }
  ]
};

/* ============================================================
   Textos de interface (capa, botões, rodapé) por idioma.
   ============================================================ */
const UI_STRINGS = {
  pt: {
    langName: "Português (BR)",
    siteTitle: "Sermão do Monte",
    siteSubtitle: "Mateus 5, 6 e 7",
    coverNote: "Escolha o idioma: a interface e o texto bíblico são exibidos no idioma selecionado.",
    startButton: "Abrir o livro",
    chooseLanguage: "Escolha o idioma",
    prev: "Página anterior",
    next: "Próxima página",
    pageOf: function(n, total) { return "Página " + n + " de " + total; },
    home: "Voltar à capa",
    footerTitle: "Baseado na versão NTLH",
    footerSubtitle: "Honra e Glória ao Único e Eterno Deus",
    swipeHint: "Toque nas bordas ou arraste para virar a página"
  },
  en: {
    langName: "English",
    siteTitle: "Sermon on the Mount",
    siteSubtitle: "Matthew 5, 6 and 7",
    coverNote: "Choose your language: both the interface and the Bible text are shown in the selected language.",
    startButton: "Open the book",
    chooseLanguage: "Choose your language",
    prev: "Previous page",
    next: "Next page",
    pageOf: function(n, total) { return "Page " + n + " of " + total; },
    home: "Back to cover",
    footerTitle: "Based on the NTLH version",
    footerSubtitle: "Honor and Glory to the One and Eternal God",
    swipeHint: "Tap the edges or drag to turn the page"
  },
  es: {
    langName: "Español",
    siteTitle: "El Sermón del Monte",
    siteSubtitle: "Mateo 5, 6 y 7",
    coverNote: "Elige tu idioma: la interfaz y el texto bíblico se muestran en el idioma seleccionado.",
    startButton: "Abrir el libro",
    chooseLanguage: "Elige tu idioma",
    prev: "Página anterior",
    next: "Página siguiente",
    pageOf: function(n, total) { return "Página " + n + " de " + total; },
    home: "Volver a la portada",
    footerTitle: "Basado en la versión NTLH",
    footerSubtitle: "Honra y Gloria al Único y Eterno Dios",
    swipeHint: "Toca los bordes o arrastra para pasar la página"
  },
  it: {
    langName: "Italiano",
    siteTitle: "Il Discorso della Montagna",
    siteSubtitle: "Matteo 5, 6 e 7",
    coverNote: "Scegli la lingua: l'interfaccia e il testo biblico vengono mostrati nella lingua selezionata.",
    startButton: "Apri il libro",
    chooseLanguage: "Scegli la lingua",
    prev: "Pagina precedente",
    next: "Pagina successiva",
    pageOf: function(n, total) { return "Pagina " + n + " di " + total; },
    home: "Torna alla copertina",
    footerTitle: "Basato sulla versione NTLH",
    footerSubtitle: "Onore e Gloria all'Unico ed Eterno Dio",
    swipeHint: "Tocca i bordi o trascina per girare pagina"
  }
};
