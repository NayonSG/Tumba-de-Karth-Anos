const textElement = document.getElementById('text')
const optionBtnsElement = document.getElementById('option-btns')

let state = {}

function startGame() {
    state = {}
    showTextNode(1)
}

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    while (optionBtnsElement.firstChild) {
        optionBtnsElement.removeChild(optionBtnsElement.firstChild)
    }

    textNode.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add('btn')
            button.addEventListener('click', () => selectOption(option))
            optionBtnsElement.appendChild(button)
        }
    })
}

function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
    const nextTextNodeId = option.nextText
    if (nextTextNodeId <= 0) {
        return startGame()

    }
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)

}
const textNodes = [
    {
        id: 1,
        text: 'Você é um aventureiro e, em uma de suas viagens, ouviu rumores de uma tumba perdida onde uma vez residiu um antigo e poderoso feiticeiro. Ao ouvir a história, você fica curioso, mas pondera sobre o que fazer:',
        options:[
            {
                text: 'Decide partir sozinho para explorar a tumba',
                nextText: 2
            },
            {
                text: 'Decide procurar um grupo de aventureiros',
                nextText: 2
},
        
        ],  
    },

    {
        id: 2,
        text: 'Tendo sua missão em mente, você parte para buscar informações e equipamentos para a jornada. Você compra comida para a viagem, uma barraca e uma espada para se defender:',
        options: [
            {
                text: 'Procurar informações sobre a tumba',
                nextText: 3
            },           
        ],
    },
    {
        id: 3,
        text: 'Já equipado, você decide parar na taverna mais próxima para conseguir alguma informação. Dentro da taverna, você vê uma garçonete, o dono da taverna, e um grupo de aventureiros. Você:',
        options: [
            {
                text: 'Pergunta ao dono da taverna',
                nextText: 4
            },
            {
                text: 'Pergunta a Garçonete',
                nextText: 5
            },
            {
                text: 'Pergunta a um grupo de aventureiros',
                nextText: 6
            },
        ],
    },
    {
        id: 4,
        text: "Você se aproxima do dono da taverna e pergunta sobre a tumba, recebendo apenas o nome do feiticeiro: Karth'Anos. Você decide procurar por mais informações:",
        options: [
            {
                text: 'Pergunta ao dono da taverna',
                nextText: 4
            },
            {
                text: 'Pergunta a Garçonete',
                nextText: 5
            },
            {
                text: 'Pergunta a um grupo de aventureiros',
                nextText: 6
            },
        ],
    },
    {
        id: 5,
        text: 'Ao perguntar a garçonete sobre a tumba, ela diz que ouviu algo de um grupo de aventureiros à alguns dias. Eles disseram que a tumba estava no meio de um pântano e que muitos já haviam morrido tentando alcançar a tumba. Você agradece a informação.',
        options: [
            {
                text: 'Pergunta ao dono da taverna',
                nextText: 4
            },
            {
                text: 'Pergunta a Garçonete',
                nextText: 5
            },
            {
                text: 'Pergunta a um grupo de aventureiros',
                nextText: 6
            },
        ],
    },
    {
        id: 6,
        text: 'Você se aproxima de um grupo de aventureiros que estava sentado na taverna observando um mapa, e pergunta sobre a Tumba. De acordo com eles, a Tumba fica no centro de uma região pantanosa à noroeste da cidade. Você:',
        options: [
            {
                text: 'Agradece as informações e se retira da taverna',
                nextText: 9
            },
            {
                text: 'Pergunta se pode se juntar ao grupo',
                nextText: 7
            },
            {
                text: 'Tenta pegar o mapa que estava sobre a mesa',
                nextText: 8
            },
        ],
    },
    {
        id: 7,
        text: 'Você pergunta se pode se juntar ao grupo.  O lider do grupo diz que eles irão passar por alguns lugares antes e que ter mais um membro apenas atrasaria eles. Também revela que irão partir no dia seguinte ao raiar do sol. Eles te convidam para comer juntos e depois de uma bela refeição ao lado do grupo, você parte pro seu quarto e:',
        options: [
            {
                text: 'Confere seu equipamento antes de dormir.',
                nextText: 10
            },
            {
                text: 'Deita e dorme',
                nextText: 11
            },
        ],
    },
    {
        id: 8,
        text: 'Você vê o mapa que o grupo estava observando sobre a mesa. Nele, estão marcações uteis e rotas para chegar a tumba. Você pega o mapa e tenta fugir, mas é rapidamente cercado pelo grupo e por outros aventureiros que estavam na Taverna. Você é espancado e jogado para fora da taverna e assim que se levanta, ainda desorientado, a última coisa que sente é o aço gelado da lâmina de um dos aventureiros atravessando seu peito.',
        options: [
            {
                text: 'Reiniciar o jogo',
                nextText: -1
            },
        ],
    },
    {
        id: 9,
        text: 'Desconfiado que eles também irão para a tumba, você decide fazer uma refeição e partir imediatamente. Ao sair da taverna, o vento frio da noite é seu único companheiro durante a caminhada pela estrada sinuosa que sai da cidade. Após caminhar por algumas horas, você adentra uma floresta e chega até uma clareira:',
        options: [
            {
                text: 'Acende uma fogueira e monta o acampamento',
                nextText: 12
            },
            {
                text: 'Monta o acampamento e vai dormir',
                nextText: 13
            },
        ],
    },
    {
        id: 10,
        text: 'Você confere seu equipamento antes de deitar. Depois de ter certeza que tudo está preparado, você se acomoda em sua cama e dorme profundamente. Na manhã seguinte, você encontra o grupo na porta da taverna e juntos, partem pela estrada para fora da cidade. Após caminhar por algumas horas, vocês adentram uma floresta e, chegam a uma bifurcação. Você examina o caminho e: ',
        options: [
            {
                text: 'Checa com o grupo o mapa, para ter certeza do caminho',
                nextText: 18
            },
            {
                text: 'Pega a rota da direita',
                nextText: 15
            },
            {
                text: 'Pega a rota da esquerda',
                nextText: 16
            },
        ],
    },
    {
        id: 11,
        text: 'A mistura de cansaço e vinho te atinge como uma pedra e você resolve dormir. Na manhã seguinte, você parte pela estrada para fora da cidade. Após caminhar por algumas horas, você adentra uma floresta e chega a uma bifurcação. Você examina o caminho e: ',
        options: [
            {
                text: 'Pega a rota da direita',
                nextText: 15
            },
            {
                text: 'Pega a rota da esquerda',
                nextText: 16
            },
        ],
    },
    {
        id: 12,
        text: 'Usando alguns gravetos e folhas, você prepara uma fogueira para manter animais selvagens longe e lhe aquecer nesta noite fria. Com isso, você rapidamente arma sua barraca e se prepara para uma noite de sono tranquila.',
        options:[
            {
                text: 'zZzZzZZzzZzZZZzzZZZzZ',
                nextText: 14
            },
        ],  
    },
    {
        id: 13,
        text: 'Você resolve montar seu acampamento e dormir para poupar tempo. Após organizar tudo, você se deita e dorme profundamente. No meio da noite, barulhos estranhos te acordam, você sai da barraca e tenta enxergar alguma coisa, mas a luz fria da lua não é o suficiente para iluminar a densa floresta. Antes que você consiga identificar de onde vem o barulho, uma matilha de lobos atrozes te ataca. Você tenta lutar como pode, mas os lobos já te cercaram. A última coisa que você vê é um grande lobo pular na sua direção e dilacerar sua garganta. Parece que a matilha irá comer bem hoje.',
        options: [
            {
                text: 'Reiniciar o jogo',
                nextText: -1
            },       
        ],
    },
    {
        id: 14,
        text: 'Você acorda depois de uma boa noite de sono com apenas as cinzas do que antes eram uma fogueira por perto. Alguns rastros ao redor da clareira mostram que a fogueira serviu ao seu propósito. Rapidamente, você arruma suas coisas e retoma a caminhada até a tumba. Em certo ponto do caminho, você acha uma bifurcação. Você:',
        options: [
            {
                text: 'Pega a rota da direita',
                nextText: 15
            },
            {
                text: 'Pega a rota da esquerda',
                nextText: 16
            },
        ],
    },
    {
        id: 15,
        text: 'Você opta por pegar a rota da direita e segue viagem. O caminho continua pela floresta, até que chega a entrada de uma caverna. Aparentemente, não existem sinais de animais ou monstros dentro da caverna, você:',
        options: [
            {
                text: 'Entra na caverna',
                nextText: 17
            },
            
        ],
    },
    {
        id: 16,
        text: 'Você opta por pegar a rota da esquerda e segue viagem. O caminho continua pela floresta, até que chega a uma planície. Você continua caminhando até que avista um pequeno vilarejo e ao fundo, começa a ver sinais do pântano. Você:',
        options: [
            {
                text: 'Entra na vila para procurar informações',
                nextText: 19
            },
            {
                text: 'Passa pelas margens da vila direto para o pântano',
                nextText: 20
            },
        ],
    },
    {
        id: 17,
        text: 'Confiando que o caminho segue após a caverna, você acende uma tocha e adentra a caverna. A medida que segue pelo caminho, um odor estranho invade suas narinas. Você nota teias de aranha cada vez mais densas, mas continua adentrando a caverna até que chega em uma grande galeria, onde vários ossos estão empilhados no chão, além de casulos presos em teias pendurados na parede. Antes que você possa fazer algo, uma teia se prende em suas costas e te suspende no ar. Você observa várias aranhas, de varios tamanhos diferentes sairem de todos os buracos e frestas na caverna, enquanto a Aranha rainha desce do teto e para na sua frente. Apavorado, você sente os oito olhos dela te encarando, enquanto ela te puxa para perto de sua boca. A picada venenosa deixa seu corpo pesado, você não consegue respirar direito, sua visão fica turva e a última coisa que você sente são as teias da Aranha rainha te envolvendo.',
        options: [
            {
                text: 'Reiniciar o jogo',
                nextText: -1
            },
        ],
    },
    {
        id: 18,
        text: 'Você opta por pegar a rota da esquerda e segue viagem. O caminho continua pela floresta, até que chega a uma planície. Você continua caminhando até que avista um pequeno vilarejo e ao fundo, começa a ver sinais do pântano. Você:',
        options: [
            {
                text: 'Entra na vila para procurar informações',
                nextText: 19
            },
            {
                text: 'Passa pelas margens da vila direto para o pântano',
                nextText: 20
            },
        ],
    },
    {
        id: 18,
        text: 'Você pede para que o grupo olhe o mapa e cheque qual o melhor caminho para o pântano. O lider te indica pegar a rota da esquerda e seguir viagem. O caminho continua pela floresta, até que chega a uma planície. Você continua caminhando até que avista um pequeno vilarejo e ao fundo, começa a ver sinais do pântano. Você:',
        options: [
            {
                text: 'Entra na vila para procurar informações',
                nextText: 19
            },
            {
                text: 'Passa pelas margens da vila direto para o pântano',
                nextText: 20
            },
        ],
    },
    {
        id: 19,
        text: 'Ao chegar na entrada da vila, você nota que não existem pessoas nas ruas e as portas das casas estão fechadas. Um cheiro de podre vem até suas narinas, trazido pelo vento que vem da praça central da cidade. Algo de muito estranho aconteceu aqui e você sente uma aura sinistra envolver seu corpo:',
        options: [
            {
                text: 'Ir até a praça central',
                nextText: 21
            },
            {
                text: 'Sair da vila em direção ao pântano',
                nextText: 20
            },
        ],
    },
    {
        id: 20,
        text: 'Explorar aquela cidade parece ser um problema, então você abre mão das novas informações pelas que já tem e ruma para o pântano pelas margens da cidade. Depois de caminhar por mais algumas horas, você finalmente chega às margens do pântano. A vegetação rasteira e o chão elameado criam uma paisagem desolada, que combina bem com o cheiro de morte e decomposição. Grandes bolsões de gás inflamável saem das pilhas de corpos e carcaças carcomidas. Você vê algo brilhando em meio a uma pilha de esqueletos próxima. Você:',
        options: [
            {
                text: 'Vê o que é o objeto brilhante',
                nextText: 22
            },
            {
                text: 'Procura sinais da tumba',
                nextText: 26
            },
        ],
    },
    {
        id: 21,
        text: 'Você se dirige para a praça central o mais rápido que pode e, ao chegar lá, vê uma garota ajoelhada sobre um corpo. Ao se aproximar para perguntar o que houve ali, vê que a garota, na verdade, está comendo o corpo. Antes que possa fazer qualquer coisa, a garota se vira em sua direção e grita enquanto encara seus olhos. A visão daquela cena te paraliza por um segundo, mas você consegue sacar suas armas e matar aquele zumbi. Porém, uma grande horda de zumbis que se alimentava daqueles que antes foram os moradores dessa vila te nota e começa a correr em sua direção. Você corre para fora da cidade, mas a horda incansável de zumbis te alcança. Você luta com todas as suas forças mas não é o suficiente, aos poucos, você é cercado e sucumbe ante a horda de mortos-vivos.',
        options: [
            {
                text: 'Reiniciar o jogo',
                nextText: -1
            },          
        ],
    },
    {
        id: 22,
        text: 'Você decide se aproximar dos esqueletos para ver o que é o objeto brilhante. Ao chegar perto, consegue ver um broche rúnico com um pálido brilho azulado. Sem saber ao certo o que ele faz, você:',
        options: [
            {
                text: 'Tenta ler as runas',
                nextText: 23
            },
            {
                text: 'Deixa o broche onde estava',
                nextText: 24
            },
            {
                text: 'Coloca o broche no bolso',
                setState: {brooch: true},
                nextText: 25
            },
        ],
    },
    {
        id: 23,
        text: "Você tenta ler as runas e consegue identificar algumas palavras, mas não consegue identificar todo o conteúdo. Aparentemente, o broche pertencia ao próprio Karth'Anos. Você ainda não sabe para o quê ele serve, mas sabe que será útil.",
        options: [
            {
                text: 'Coloca o broche no bolso',
                setState: {brooch: true},
                nextText: 25
            },
        ],
    },
    {
        id: 24,
        text: 'Você decide deixar o broche onde estava. Sem saber o porquê ele estava ali. Você se aproxima da pilha de ossos onde o achou e o coloca no mesmo lugar.',
        options: [
            {
                text: 'Procurar pistas da tumba',
                nextText: 26
            },
        ],
    },
    {
        id: 25,
        text: 'Você decide guardar o broche e o coloca em seu bolso, afinal, aquela pilha de ossos definitivamente não vai mais precisar dele. Você pensa na sua próxima ação:',
        options: [
            {
                text: 'Procurar pistas da tumba',
                nextText: 26
            },            
        ],
    },
    {
        id: 26,
        text: 'Você começa a caminhar pelo pântano, procurando algo que possa te indicar a localização da tumba. Você caminha por horas até que a noite chega. Já sem forças, você decide parar por hoje. Você acha um local seco e monta sua barraca. Esperando ter mais sorte no próximo dia, você vai dormir e rapidamente cai no sono',
        options: [
            {
                text: 'zZzZzZZzzZzZZZzzZZZzZz',
                nextText: 27
            },           
        ],
    },
    {
        id: 27,
        text: 'O sol nasce e você acorda. Após arrumar suas coisas, você retoma sua missão de procurar pistas sobre a tumba. O odor do pântano e o terreno lamacento dificultam sua caminhada e tornam sua jornada ainda mais difícil. Você olha para o céu e vê que o sol já está no ponto mais alto, você:',
        options: [
            {
                text: 'Decide seguir em frente, até o centro do pântano',
                nextText: 28
            },
            {
                text: 'Tenta usar o broche',
                requiredState: (currentState) => currentState.brooch,
                nextText: 29
            },            
        ],
    },
    {
        id: 28,
        text: 'Você continua caminhando até o centro do pântano e a medida que caminha, a vegetação fica cada vez mais densa. Em um certo ponto, você começa a ouvir o farfalhar dos arbustos ao redor, mas pensa que são apenas os gases do pântano. No meio do pântano, você encontra algumas ruínas cercadas por estátuas em pedaços. O caminho parece indicar que ali é a Tumba, e você se apressa para chegar até elas. A medida que você corre até a tumba, vê pequenos vultos se aproximando, você:',
        options: [
            {
                text: 'Corre mais rápido para a tumba',
                nextText: 30
            },
            {
                text: 'Para e saca sua arma',
                nextText: 31
            },            
        ],
    },
    {
        id: 29,
        text: 'Você pega o broche no bolso e, assim que o tira, um facho de luz azulada indica uma direção. você resolve seguir na direção que a luz aponta. Você continua caminhando até o centro do pântano e a medida que caminha, a vegetação fica cada vez mais densa. Em um certo ponto, você começa a ouvir o farfalhar dos arbustos ao redor, mas pensa que são apenas os gases do pântano. No meio do pântano, você encontra algumas ruínas cercadas por estátuas em pedaços. O caminho parece indicar que ali é a Tumba, e você se apressa para chegar até elas. A medida que você corre até a tumba, vê pequenos vultos se aproximando, você:',
        options: [
            {
                text: 'Corre mais rápido para a tumba',
                nextText: 30
            },
            {
                text: 'Para e saca sua arma',
                nextText: 31
            },
            {
                text: 'Aponta o broche para os vultos',
                nextText: 32
            },
        ],
    },
    {
        id: 30,
        text: 'Você vê uma horda de goblins correndo na sua direção e corre o mais rápido que pode até uma grande porta de pedra. Você começa a procurar algum mecanismo que abra a porta e ao se virar, percebe que é uma questão de minutos até que eles te alcancem. Você nota duas pedras brilhantes no chão ao lado de uma caveira na parede, um círculo mágico meio apagado no chão e um buraco em outra parede, grande o suficiente para que você coloque um braço dentro. Você:',
        options: [
            {
                text: 'Pega as pedras e coloca nos olhos da caveira',
                nextText: 33
            },
            {
                text: 'Pisa no círculo mágico',
                nextText: 34
            },
            {
                text: 'Enfia o braço na parede',
                nextText: 35
            },
        ],
    },
    {
        id: 31,
        text: 'Você saca sua espada e vê uma horda de goblins correndo na sua direção. Você firma sua base e desfere o primeiro golpe contra o primeiro goblin, fazendo a cabeça do pequeno ser voar para longe de seu corpo. O mesmo acontece com o segundo e o terceiro, mas eles não param de vir. Enquanto você luta com vários goblins de uma só vez, não percebe que alguns goblins com zarabatanas, que estavam nas árvores, atiram dardos contra você. Os dardos carregados de veneno perfuram sua roupa e inoculam o veneno no seu corpo. Seu corpo começa a ficar dormente e pesado e, pouco a pouco, fica mais difícil resistir à investida. Você tomba, cansado e sangrando enquanto sente as pequenas lâminas dos goblins perfurarem seu corpo e rasgarem a sua pele. A porta da tumba é sua última visão antes de morrer.',
        options: [
            {
                text: 'Reiniciar o jogo',
                nextText: -1
            },           
        ],
    },
    {
        id: 32,
        text: 'Você vê uma horda de goblins correndo na sua direção e, desesperado, aponta o facho de luz na direção deles. A simples visão daquela luz faz com que a horda enlouqueça e se disperse tão rapidamente quanto ela se formou. Parece que os goblins não irão mais te incomodar. Com calma, você se dirige até uma grande porta de pedra. Você começa a procurar algum mecanismo que abra a porta e nota duas pedras brilhantes no chão ao lado de uma caveira na parede, um círculo mágico meio apagado no chão e um buraco em outra parede, grande o suficiente para que você coloque um braço dentro. Você:',
        options: [
            {
                text: 'Pega as pedras e coloca nos olhos da caveira',
                nextText: 33
            },
            {
                text: 'Pisa no círculo mágico',
                nextText: 34
            },
            {
                text: 'Enfia o braço na parede',
                nextText: 35
            },
        ],
    },
    {
        id: 33,
        text: 'Você pega as pedras no chão e coloca nos olhos da caveira. O chão treme, e as pedras começam a brilhar. Um raio de luz sai dos olhos da caveira e te acerta em cheio. O clarão te cega, mas você continua vivo. Presumindo que aquele mecanismo de defesa estava quebrado, você decide partir para o próximo. Você tenta andar, mas não consegue. Ao olhar para baixo, vê que suas pernas estão petrificadas. A única coisa que você pode fazer é observar com horror a petrificação se espalhar pelo seu corpo, enquanto você se torna uma bela estátua, imortalizada em pedra. ',
        options: [            
            {
                text: 'Reiniciar o jogo',
                nextText: -1
            },            
        ],
    },
    {
        id: 34,
        text: "Você escolhe tentar usar o círculo mágico no chão. Apesar de desgastadas, você percebe que as runas no círculo lembram bastante àquelas inscritas no broche. Assim que você pisa sobre ele, os simbolos inscritos no chão começam a brilhar e um raio de luz te atinge. Você acorda meio atordoado em um lugar estranho, um grande salão de pedra já desgastado pelo tempo. Você conseguiu entrar na Tumba de Karth'Anos. A sua frente, você vê uma escadaria que termina em uma grande porta. Do lado esquerdo e direito, existem corredores largos e escuros. Você:",
        options: [
            {
                text: 'Pega o corredor da direita',
                nextText: 36
            },
            {
                text: 'Pega o corredor da esquerda',
                nextText: 37
            },
            {
                text: 'Sobe as escadas',
                nextText: 61
            },
        ],
    },
    {
        id: 35,
        text: 'Você coloca o braço dentro do buraco e procura alguma alavanca que abra a porta de pedra a sua frente. Por mais que tente, não encontra nada. Você começa a se achar um pouco burro por pensar que qualquer pessoa construiria uma tumba com uma alavanca para abrir a porta dentro de um buraco, mas também fica um pouco aliviado que aquele buraco não era uma armadilha que deceparia o seu braço te fazendo sangrar até a morte...',
        options: [
            {
                text: 'Pega as pedras e coloca nos olhos da caveira',
                nextText: 33
            },
            {
                text: 'Pisa no círculo mágico',
                nextText: 34
            },            
        ],
    },
    {
        id: 36,
        text: "Você resolve explorar primeiro o corredor a direita. Seguindo pelo largo corredor, você nota quatro portas. A primeira possui um portão de aço, a segunda, uma porta simples de madeira, a terceira é uma porta de ferro ornamentada com ouro e pedras preciosas. A porta da última sala está presa na parede apenas pelas dobradiças e ao contrário das outras, encontra-se aberta. ",
        options: [
            {
                text: 'Tentar abrir a porta de aço',
                nextText: 40
            },
            {
                text: 'Tentar abrir a porta de madeira',
                nextText: 41
            },
            {
                text: 'Tentar abrir a porta ornamentada',
                nextText: 42
            },
            {
                text: 'Ir para a sala aberta',
                nextText: 53
            },
        ],
    },
    {
        id: 37,
        text: "Você resolve explorar primeiro o corredor a esquerda. Seguindo pelo largo corredor, você percebe alguns ossos espalhados no chão. Você não se amedronta e continua seguindo em frente, até que vê uma grande porta de ferro. Na parede ao lado da porta, você vê uma mensagem parcialmente ilegível, escrita com sangue: \"... há salv..ão ...ses ....edor..s, ...te a...a!\". Você: ",
        options: [
            {
                text: 'Volta para o Hall de entrada',
                nextText: 38
            },
            {
                text: 'Força a porta',
                nextText: 39
            },            
        ],
    },
    {
        id: 38,
        text: "Você volta ao hall de entrada e pondera sobre qual caminho seguir:",
        options: [
            {
                text: 'Pega o corredor da direita',
                nextText: 36
            },
            {
                text: 'Pega o corredor da esquerda',
                nextText: 37
            },
            {
                text: 'Sobe as escadas',
                nextText: 61
            },
        ],
    },
    {
        id: 39,
        text: "Você força a porta e com bastante esforço, ela se abre revelando uma sala grande, alta, profunda e escura. O ar preso na sala carrega um cheiro forte de uma mistura de mofo, carne apodrecida e sangue velho. Você sente seu estômago revirar, mas continua em frente. Ao entrar na sala, se depara com os restos de um dragão, com um grande colar de ouro e diamantes em seu pescoço. Atrás do dragão, uma pilha de tesouros e ossos. Você:",
        options: [
            {
                text: 'Pega os tesouros e leva para fora da sala',
                nextText: 46
            },
            {
                text: 'Pega o colar no pescoço da carcaça do dragão',
                nextText: 47
            },
        ]
    },
    {
        id: 40,
        text: "Você se aproxima da porta de aço e tenta forçar a fechadura. Com um pouco de esforço, a porta se abre, rangendo depois de tanto tempo fechada, como se reclamasse do esforço que está fazendo. Varios objetos de tortura estão presentes dentro da sala, com alguns esqueletos ainda pendurados as paredes por correntes enferrujadas. Você olha ao redor, mas não vê nada de valor.",
        options: [
            {
                text: 'Tentar abrir a porta de madeira',
                nextText: 41
            },
            {
                text: 'Tentar abrir a porta ornamentada',
                nextText: 42
            },
            {
                text: 'Ir para a sala aberta',
                nextText: 53
            },
        ],
    },
    {
        id: 41,
        text: "Chegando até a porta de madeira, você vê um complicado mecanismo em sua fechadura. O mecanismo parece desgastado pelo tempo, mas aparentemente, ainda está funcional. O que quer que esteja do outro lado dessa porta, é muito valioso ou perigoso para ser trancado dessa forma. Você:",
        options: [
            {
                text: 'Tenta abrir o mecanismo',
                nextText: 42
            },
            {
                text: 'Arromba a porta',
                nextText: 43
            },           
        ],
    },
    {
        id: 42,
        text: "Você usa suas habilidades para tentar abrir o mecanismo e ter acesso a sala e, depois de algum tempo, consegue abrir a porta de madeira. No meio da sala, você vê o que parece ser um ser humano, porém, sua pele é cinzenta e seus olhos totalmente brancos. Ele continua parado e te encara fixamente enquanto lentamente começa a se transformar... em você! O Doppelganger toma sua forma e esboça um sorriso sádico enquanto caminha em sua direção. Você:",
        options: [
            {
                text: 'Saca sua arma e luta contra ele',
                nextText: 44
            },
            {
                text: 'Sai da sala e tranca a porta',
                nextText: 45
            },
            
        ],
    },
    {
        id: 43,
        text: "Aproveitando o desgaste das peças do mecanismo e da própria porta, você resolve arrombá-la. O que consegue fazer sem muito esforço. No meio da sala, você vê o que parece ser um ser humano, porém, sua pele é cinzenta e seus olhos totalmente brancos. Ele te encara fixamente e começa a se transformar... em você! O Doppelganger toma sua forma e esboça um sorriso sádico enquanto caminha em sua direção:",
        options: [
            {
                text: 'Saca sua arma e luta contra ele',
                nextText: 44
            },                      
        ],
    },
    {
        id: 44,
        text: "Você saca sua espada e usa toda a sua habilidade para lutar contra o Doppelganger, mas ele desvia de cada golpe que você desfere. É como se ele soubesse exatamente o que você fosse fazer, antes de você fazer. Você balança sua espada, mas não consegue acertar nenhum golpe. O Doppelganger ri do seu desespero até que pula sobre você e te joga ao chão. Você sente as mãos dele envolverem o seu pesçoco e te estrangularem. Você se debate, mas não consegue tirar ele de cima de você. Em seu último suspiro, seus olhos aterrorizados fitam aquela sua versão sádica rindo sob o seu corpo, enquanto sua vida se esvai lentamente.",
        options: [
            {
                text: 'Reiniciar o jogo',
                nextText: -1
            },         
        ],
    },
    {
        id: 45,
        text: "Você sai correndo da sala e tranca a porta de madeira atrás de você enquanto escuta os gritos e as batidas violentas do Doppelganger tentando sair. Você só consegue sentir alívio pelo mecanismo que trava a porta ainda estar funcionando. Depois de retomar o fôlego, você:",
        options: [
            {
                text: 'Tentar abrir a porta de aço',
                nextText: 40
            },            
            {
                text: 'Tentar abrir a porta ornamentada',
                nextText: 49
            },
            {
                text: 'Ir para a sala aberta',
                nextText: 53
            },
        ],
    },
    {
        id: 46,
        text: "Você corre diretamente para o tesouro, ignorando a carcaça do dragão. Baús e mais baús de ouro e jóias são agora seus. Você move tudo para o salão principal e, depois de limpar a sala, a única coisa que sobram são os ossos que ali estavam, a carcaça do dragão, o colar em seu pescoço,",
        options: [
            {
                text: 'Pegar o colar no pescoço do Dragão',
                nextText: 47
            },
            {
                text: 'Sair da tumba carregando o tesouro',
                nextText: 48
            },
            
        ],
    },
    {
        id: 47,
        text: 'Você se dirige a carcaça do dragão e pega o colar em seu pesçoco. Uma luz verde começa a emanar do colar, mas você ignora e se vira de costas para o corpo. Subitamente, a carcaça começa a se mover. Luzes espectrais surgem nas orbitas antes vazias do crânio do Dragão. Você ouve o estalar dos ossos enquanto olha aterrorizado aquele cadáver gigantesco voltar a vida como um dragão morto-vivo. O dragão olha para você e ruge na sua direção. A onda sonora é o suficiente para tirar seu equilibrio e te jogar ao chão. Você tenta se levantar e sair dali o mais rápido possível, mas o Dragão esquelético tem outros planos. O Dragão levanta sua cabeça e expele seu sopro corrosivo. Você sente sua pele queimar enquanto desgruda da sua carne, que cai em em pedaços descolada de seus ossos. Seu corpo derrete diante da ação corrosiva do sopro do dragão, e o colar cai a sua frente. Você se lembra dos escritos na parede e finalmente entende a mensagem: "Não há salvação nesses corredores, volte agora"',
        options: [
            {
                text: 'Reiniciar o jogo',
                nextText: -1
            },            
        ],
    },
    {
        id: 48,
        text: "Você decide que todo aquele ouro não deve ficar nem mais um minuto nessa tumba esquecida pelos deuses e resolve partir de volta para a cidade. Você procura um modo de carregar tudo e acaba encontrando, convenientemente, os cavalos e carroças de um grupo de aventureiros. Você também acha os corpos sem vida dos aventureiros e pensa que, aparentemente, eles não vão mais precisar dos cavalos. Você carrega seu tesouro nas carroças e parte de volta a civilização, com todo esse tesouro, seus dias de aventureiro com certeza chegaram a um fim. ",
        options: [
            {
                text: "PARABÉNS POR SOBREVIVER A TUMBA DE KARTH'ANOS E RECUPERAR O TESOURO PERDIDO!",
                nextText: 100
            },
            
        ],
    },
    {
        id: 49,
        text: "Você segue o corredor até uma porta ricamente ornamentada com fios de ouro, safiras, esmeraldas, rubis e outras pedras preciosas. Você nota que as pedras incrustadas tem símbolos mágicos dentro delas. Ao se aproximar da porta, ela se abre sozinha, como se sentisse a sua presença. As portas revelam um grande salão, ornamentado com tapeçarias e mobílias novas e impecáveis. Todo o local tem uma atmosfera mágica muito forte, afinal, quem diria que uma sala como esta estaria uma tumba abandonada? Você vê uma mesa farta, com comidas e bebibas, frutas e doces de vários tipos que nunca viu antes, ao fundo, uma cama digna de um rei encontra-se arrumada e convidativa. Você pondera:",
        options: [
            {
                text: 'Não devo deixar toda essa comida estragar, não é?',
                nextText: 50
            },
            {
                text: 'Isso, definitivamente, é uma armadilha.',
                nextText: 51
            },
            
        ],
    },
    {
        id: 50,
        text: "Você sente o estômago roncar e decide se banquetear. Você come os mais variados tipos de comida, que parecem ter sido feitas por um anjo e bebe dos melhores vinhos e das melhores cervejas que já teve oportunidade de provar. Depois de se saciar, você decide dormir e se deita na cama. A cama acolhe seu corpo cansado, como uma mãe que abraça o filho que chora. Em poucos minutos, você dorme profundamente.",
        options: [
            {
                text: 'ZzzZZZZzzzZzZzZzzzZZZZZzz',
                nextText: 52
            },
            {
                text: 'Isso, definitivamente, é uma armadilha.',
                nextText: 51
            },
            
        ],
    },
    {
        id: 51,
        text: "Você pensa que tudo isso é bom demais para ser verdade e sai da sala. No momento em que você pisa no corredor, a porta se fecha atrás de você e magicamente desaparece. Você se vira perplexo enquanto passa a mão na parede e constata que é como se aquela porta nunca estivera ali. Você decide explorar o resto do corredor:",
        options: [
            {
                text: 'Abrir a porta de aço',
                nextText: 40
            },
            {
                text: 'Abrir a porta de madeira',
                nextText: 41
            },           
            {
                text: 'Ir para a sala aberta',
                nextText: 53
            },
        ],
    },
    {
        id: 51,
        text: "Você pensa que tudo isso é bom demais para ser verdade e sai da sala. No momento em que você pisa no corredor, a porta se fecha atrás de você e magicamente desaparece. Você se vira perplexo enquanto passa a mão na parede e constata que é como se aquela porta nunca estivera ali. Você decide explorar o resto do corredor:",
        options: [
            {
                text: 'Abrir a porta de aço',
                nextText: 40
            },
            {
                text: 'Abrir a porta de madeira',
                nextText: 41
            },           
            {
                text: 'Ir para a sala aberta',
                nextText: 53
            },
        ],
    },
    {
        id: 52,
        text: "Você acorda depois de um belo sono e decide continuar sua exploração. No momento em que você pisa no corredor, a porta se fecha atrás de você e magicamente desaparece. Você se vira perplexo enquanto passa a mão na parede e constata que é como se aquela porta nunca estivera ali. Você decide explorar o resto do corredor:",
        options: [
            {
                text: 'Abrir a porta de aço',
                nextText: 40
            },
            {
                text: 'Abrir a porta de madeira',
                nextText: 41
            },           
            {
                text: 'Ir para a sala aberta',
                nextText: 53
            },
        ],
    },
    {
        id: 53,
        text: "Você vai até a sala aberta. O marco de pedra é a única coisa que divide a sala e o corredor. Observando dentro da sala, você vê vários moveis velhos e revirados, jogados pela sala. No fim da sala, existem dois baús identicos, um ao lado do outro. Você: ",
        options: [
            {
                text: 'Abre o baú da direita',
                nextText: 54
            },
            {
                text: 'Abre o baú da esquerda',
                nextText: 55
            },      
        ],
    },
    {
        id: 54,
        text: "Você decide abrir primeiro o baú da direita. Ao se aproximar, começa a notar algo estranho, como se ouvisse uma risada abafada. Você:",
        options: [
            {
                text: 'Abre o baú mesmo assim',
                nextText: 56
            },
            {
                text: 'Decide abrir o outro baú',
                nextText: 57
            },           
        ],
    },
    {
        id: 55,
        text: "Você decide abrir primeiro o baú da esquerda. Ao se aproximar, começa a notar algo estranho, como se ouvisse uma risada abafada. Você:",
        options: [
            {
                text: 'Abre o baú mesmo assim',
                nextText: 56
            },
            {
                text: 'Decide abrir o outro baú',
                nextText: 57
            },           
        ],
    },
    {
        id: 56,
        text: "Você não se importa muito com a risada e tenta abrir o baú. O baú se abre e revela que não possui nada dentro. Você vira sua atenção para o outro baú quando, de repente, uma língua gigantesca saí de dentro do baú aberto e um grande olho aparece no lugar da fechadura. Dentes pontiagudos surgem e o baú se revela um Mímico, que te ataca. ",
        options: [
            {
                text: 'Lutar contra o mímico',
                nextText: 58
            },                 
        ],
    },
    {
        id: 57,
        text: "Você pensa que o baú é possivelmente uma armadilha e decide abrir o baú ao lado. O baú está cheio de itens comuns, como tapeçarias velhas, roupas e adornos. O que mais te chama a atenção, no entanto, é uma espada velha, guardada no fundo do baú.",
        options: [
            {
                text: 'Pegar a espada',
                setState: {mgkSwrd: true},
                nextText: 59
            },
            {
                text: 'Sair da sala',
                nextText: 60
            },           
        ],
    },
    {
        id: 58,
        text: "O Mímico solta uma risada alta e te ataca várias vezes usando sua língua. Você consegue se desviar dos ataques e revida, sem muito sucesso. O Mímico salta em sua direção, tentanto te morder, mas é lento demais e você desvia com facilidade. O monstro grita e começa a chicotear os arredores com sua língua, destruindo o baú e alguns móveis no processo. Você pega um pedaço de pano velho que saiu voando do baú destruído e joga sobre o monstro que, momentaneamente, perde a visão de você. Esse tempo é mais que o suficiente para que você crave sua espada no monstro, que urra de dor e se debate.Você o atinge mais algumas vezes até que ele para de se mover.",
        options: [
            {
                text: 'Sair da sala',
                nextText: 60
            },                 
        ],
    },
    {
        id: 59,
        text: "Você pega a espada e tira um pouco da poeira que está sobre ela. A primeira vista, parece ser uma espada comum, exceto por dois rubis de sangue presos nas pontas da guarda da espada. A lâmina parece ainda estar boa.",
        options: [
            {
                text: 'Sair da sala',
                nextText: 60
            },           
        ],
    },
    {
        id: 60,
        text: "Você sai da sala e é atingido por um clarão de luz. Seus olhos ficam temporariamente cegos pela intensidade da luz e uma dor calcinante te faz gritar de dor. Assim que seus olhos conseguem voltar a se focar, você percebe que não está mais no corredor, mas sim em um espaço de puro branco. Sua compreensão não consegue distinguir onde começa e onde termina aquele espaço, o que é acima e o que é abaixo. Uma figura alta, de longos cabelos grisalhos, vestindo uma túnica púrpura com adornos dourados surge na sua frente. Ela te encara com seus estranhos olhos vermelhos.",
        options: [
            {
                text: 'Quem é você?',
                nextText: 62
            },                 
        ],
    },
    {
        id: 61,
        text: "Você começa a subir as escadas e é atingido por um clarão de luz. Seus olhos ficam temporariamente cegos pela intensidade da luz e uma dor calcinante te faz gritar de dor. Assim que seus olhos conseguem voltar a se focar, você percebe que não está mais no corredor, mas sim em um espaço de puro branco. Sua compreensão não consegue distinguir onde começa e onde termina aquele espaço, o que é acima e o que é abaixo. Uma figura alta, de longos cabelos grisalhos, vestindo uma túnica púrpura com adornos dourados e segurando um cajado prateado com três serpentes entrelaçadas em sua ponta surge na sua frente. Ela te encara com seus estranhos olhos vermelhos.",
        options: [
            {
                text: 'Quem é você?',
                nextText: 62
            },                 
        ],
    },
    {
        id: 62,
        text: "Eu? - Responde a figura - Eu sou o rei deste local, o criador desta tumba e seu único regente. Meu nome é Karth'Anos e você é mais um rato que ousa invadir meu território e saquear meus tesouros. A insolência humana realmente não tem fim, e eu eliminarei você com as minhas próprias mãos! - Karth'Anos faz um gesto e você retorna a tumba, mas num local completamente diferente. Uma grande sala com pilares suntuosos e tapeçarias caras que adornam as paredes. Tochas nas paredes acendem magicamente, revelando um trono onde repousa um esqueleto, com as mesmas roupas que você viu Karth'Anos usando. Um vento sussurante atinge a sala e você sente o calor da vida sair do recinto enquanto, lentamente, o esqueleto de Karth'Anos retoma a vida.",
        options: [
            {
                text: "Lutar contra Karth'Anos",
                nextText: 63
            },
            {
                text: "Fugir da tumba",
                nextText: 69
            },                       
        ],
    },
    {
        id: 63,
        text: 'Estando frente a frente com o inimigo e sabendo que não poderá sair dali sem lutar, você saca sua espada e se prepara. O Feiticeiro Lich te encara com suas órbitas vazias e desce de seu trono. A própria tumba reconhece o retorno de seu mestre enquanto treme violentamente. Se esforçando para se manter de pé, você observa enquanto a própria estrutura do salão muda, é como se a própria sala estivesse viva. Você se prepara e parte para cima do Lich num ataque frente-a-frente. Ele balança seu cajado e bolas de fogo saem voando na sua direção. Você se esconde atrás de um dos pilares próximos, enquanto as bolas flamejantes explodem em contato com o chão onde você estava. No momento, você está entre a parede esquerda e o corredor central. Você:',
        options: [
            {
                text: "Ataca pela direita",
                nextText: 64
            },
            {
                text: "Ataca pela esquerda",
                nextText: 65
            },                       
        ],
    },
    {
        id: 64,
        text: "Você decide atacar novamente pelo corredor central, de frente para o Feiticeiro. Karth'Anos estende a mão em sua direção e raios são disparados da ponta de seus dedos. Você corre e por pouco, não é atingido por um dos raios. Pedras gigantescas dos pilares atingidos caem no meio da sala, bloqueando seu avanço e servindo como uma proteção contra os ataques impiedosos do Lich. Novamente escondido, mas dessa vez do lado direito da sala a poucos metros do trono, você:",
        options: [
            {
                text: "Faz o ataque pelo flanco",
                nextText: 66
            },
            {
                text: "Volta a atacar de frente",
                nextText: 67
            },                          
        ],
    },
    {
        id: 65,
        text: "Você decide atacar pela esquerda, se aproveitando dos pilares para bloquear a visão do Feiticeiro. Karth'Anos bate seu cajado no chão e invoca alguns esqueletos na sua frente. Você rapidamente dá cabo daquelas pilhas de ossos ambulantes e prossegue para flanquear o Feiticeiro. Você está poucos metros do trono agora, você:",
        options: [
            {
                text: "Faz o ataque pelo flanco",
                nextText: 66
            },
            {
                text: "Volta a atacar de frente",
                nextText: 67
            },                          
        ],
    },
    {
        id: 66,
        text: "Você corre ainda mais rapidamente e chega a uma posição perfeita para desferir um golpe no Lich pelo flanco do trono. Respirando fundo, você toma fôlego e parte para o ataque, mas ao sair de sua posição para alcançar o feiticeiro, você é surpreendido pelo olhar frio de Karth'Anos a poucos passos de você. O Lich te agarra pelo pescoço e te erque do chão como se seu corpo fosse um boneco, você sente a mão esquelética envolver sua traquéia e apertá-la com uma força descomunal.\"Ah, a fragilidade da vida... Me recordo de quando era assim. Fraco... Frágil... Patético...\". O Lich solta seu corpo mas você é mantido flutuando por um feitiço. Karth'Anos se afasta e, com um gesto te joga longe. Você sente o gosto de sangue na boca e vê sua espada quebrada ao seu lado. Sentado em seu trono, o Lich ri e diz: \"Não importa quantas eras se passem, humanos continuam sendo humanos. Eu lhe pouparei desta vez, se você se retirar da minha vista\". Você está gravemente ferido, sua arma está quebrada. Não restam muitas escolhas além de: ",
        options: [
            {
                text: "Continuar lutando contra Karth'Anos",
                nextText: 68
            },
            {
                text: "Fugir da tumba",
                nextText: 69
            },
            {
                text: "Usar a espada que você achou na tumba",
                requiredState: (currentState) => currentState.mgkSwrd,
                nextText: 70
            },                       
        ],
    },
    {
        id: 67,
        text: "Você toma fôlego e parte para o ataque, pulando por cima da pedra e avançando diretamente na direção de Karth'Anos. Mas, ao sair de sua posição para alcançar o feiticeiro, você sente algo se enrolar em suas pernas e te prender. Vinhas e cipós te amarram firmemente, restringindo totalmente seus movimentos. O Lich flutua em sua direção e erque a mão esquelética, fazendo suas amarras te apertarem ainda mais.\"Ah, a fragilidade da vida... Me recordo de quando era assim. Fraco... Frágil... Patético...\". Os cipós puxam seu corpo pelos braços e pernas a alguns metros do chão. Karth'Anos se afasta e, com um gesto te joga longe. Você sente o gosto de sangue na boca e vê sua espada quebrada ao seu lado. Sentado em seu trono, o Lich ri e diz: \"Não importa quantas eras se passem, humanos continuam sendo humanos. Eu lhe pouparei desta vez, se você se retirar da minha vista\". Você está gravemente ferido, sua arma está quebrada. Não restam muitas escolhas além de: ",
        options: [
            {
                text: "Continuar lutando contra Karth'Anos",
                nextText: 68
            },
            {
                text: "Fugir da tumba",
                nextText: 69
            },
            {
                text: "Usar a espada que você achou na tumba",
                requiredState: (currentState) => currentState.mgkSwrd,
                nextText: 70
            },
        ]                      
    },
    {
        id: 68,
        text: "Você sabe que tem poucas chances de vencer mas ainda assim se levanta. Fugir não é mais uma opção, não depois de chegar tão longe. Você pega um pedaço da sua espada no chão e, ainda cambaleando, se posiciona de frente para Karth'Anos.\"Oh... Então, o herói se levanta para sua última batalha...\" - O feiticeiro ri e ergue a mão aos céus, conjurando várias bolas de fogo que pairam no ar ardendo e trepidando como pequenos sóis. Você junta o resto de forças que seu corpo ainda possui e se prepara para o último golpe. O Lich abaixa a mão e os feitiços saem voando em sua direção. Você corre o mais rápido que suas pernas cansadas e feridas te permitem, desviando por pouco das explosões enquanto avança na direção do monstro. Mais e mais bolas de fogo chovem ao seu redor e, enquanto você faz o melhor que pode para desviar delas, também se aproxima cada vez mais de seu alvo. Num último esforço, você salta para perto do trono, e desfere um golpe com sua espada quebrada. Karth'Anos apara o golpe, utilizando seu cajado, que cai no chão. Porém, apesar de ter bloqueado o golpe, o Lich agoniza de dor. Percebendo que a alma do Lich está no cajado, você rasteja para pegá-lo e enfim, consegue. O cajado prateado luta para retornar às mãos de seu dono, como se tivesse vida própria, mas você o segura firme e, num grande esforço, consegue quebrá-lo ao meio. O feiticeiro grita de dor e agonia, enquanto seus ossos viram poeira e suas vestes, trapos sujos. Você derrotou o Lich, mas mal consegue ficar de pé. Você cai no chão frio da sala, cansado e ferido, porém ainda vivo. Talvez leve algum tempo para que você consiga se levantar e sair dali, mas pelo menos, o mal ancião que assolava aquela tumba já não existe mais. Depois de se recuperar, você retorna a porta da tumba com os tesouros que conseguiu encontrar e acaba encontrando alguns corpos sem vida próximos de alguns cavalos e carroças. Você carrega seu tesouro nas carroças e parte de volta a civilização. As marcas dessa batalha, sem dúvidas, irão marcar o fim da sua vida como aventureiro.",
        options: [
            {
                text: "PARABÉNS POR DERROTAR KARTH'ANOS E CONCLUIR A HISTÓRIA!",
                nextText: 100
            },           
        ]                      
    },
    {
        id: 69,
        text: "Você sabe que não irá conseguir vencer o feiticeiro nessas condições. Sua arma está quebrada, seu sangue, espalhado pela sala, pinta o chão como tinta, você sente cada músculo do seu corpo doendo e implorando por piedade. Você corre para a saída da tumba, sem olhar para trás. Ao chegar na porta de pedra, encontra os cavalos e carroças de um grupo de aventureiros. Você também acha os corpos sem vida dos aventureiros e pensa que aquele corpo poderia ser o seu. Você monta em um cavalo e parte de volta a civilização. As marcas dessa batalha e os horrores que você presenciou vão, sem dúvidas, marcar o fim da sua vida como aventureiro.",
        options: [
            {
                text: "VOCÊ BATALHOU CONTRA O MAL ANCIÃO E SOBREVIVEU!",
                nextText: 100
            },            
        ]                      
    },
    {
        id: 70,
        text: "Você sente o sangue em sua boca e olha ao seu redor. A destruição causada pelo feiticeiro é tamanha que a própria sala não se parece mais com aquela que você entrou. Você se levanta, disposto a lutar até o fim, mas sua espada está quebrada e os pedaços espalhados pela sala. Você pensa em como poderia continuar lutando, de repente, uma chuva de estacas de gelo começar a cair do céu. Você pula para o canto da sala e por pouco não é atingido. Novamente escondido, você se lembra da espada que achou no baú, dentro da tumba. Você observa a sala e consegue achar seus pertences, não tão longe de onde você está agora. Se movendo o mais rápido que suas pernas cansadas aguentam, você consegue alcançar a  espada. \"Essa espada velha vai ter que servir, pelo menos agora\", você pensa enquanto a remove de sua bainha. Empunhando sua nova arma, você se prepara para o combate final. Karth'Anos olha para a cena e diz: \"Você achou Kael'Darin, mas isso não será o suficiente para te salvar!\". O feiticeiro ri e ergue a mão aos céus, conjurando várias bolas de fogo que pairam no ar ardendo e trepidando como pequenos sóis. As bolas de fogo voam em sua direção e, instintivamente, você estica a espada na direção do feitiço. A espada cria uma barreira que absove o feitiço e logo, os rubis na guarda da espada começam a brilhar. Uma chama gentil envolve seu corpo e, magicamente, seus ferimentos começam a cicatrizar e a dor no seu corpo passa. Sentindo seu corpo renovado, você:",
        options: [
            {
                text: "Investe contra o Lich",
                nextText: 71
            },
            {
                text: "Aguarda o próximo ataque",
                nextText: 72
            },           
        ]                      
    },
    {
        id: 71,
        text: "Com seu corpo renovado, você não perde tempo e avança diretamente contra o Lich. Karth'Anos urra e mais bolas de fogo aparecem no ar, voando instantaneamente em sua direção. Você se desvia com facilidade dos projéteis e ganha terreno cada vez mais rápido. O Lich, tomado pelo ódio, dispara um raio de sua mão, você novamente estica a espada que absorve o feitiço. Uma onda de energia invade seu corpo, e você nota que a cada vez que a espada absorve um feitiço, você fica temporariamente mais forte. Instantenamente, você começa a ver as coisas cada vez mais devagares, mas não é o mundo que ficou mais lento, você ficou mais rápido. Usando sua velocidade a seu favor, você se aproxima rapidamente do lich e desfere um golpe certeiro no corpo esquelético do feiticeiro, partindo-o ao meio. Para sua infelicidade, isso não é o suficiente para pará-lo. Vinhas e raízes prendem seus pés enquanto o corpo do lich se junta. Você corta suas amarras e volta ao ataque. Karth'Anos apara o golpe utilizando seu cajado. Porém, apesar de ter bloqueado o golpe, o Lich grita, como se tivesse levado um golpe direto. Percebendo que a alma do Lich está no cajado, você continua sua investida. A cada golpe que o Lich defende, mais e mais dano você causa. Até que o feiticeiro cai e solta seu cajado, gritando de dor e agonia. Você pega o cajado em suas mãos e com um grande esforço, consegue partir o cajado ao meio. Você observa enquanto Karth'Anos é envolvido por labaredas esverdeadas e seus ossos e vestes viram pó. Você derrotou o Lich, o mal ancião que comandava aquela tumba não existe mais. Você é o novo Rei daquele domínio. ",
        options: [
            {
                text: "VOCÊ DERROTOU KARTH'ANOS E SE TORNOU O REI DA TUMBA!",
                nextText: 100
            },             
        ]                      
    }, {
        id: 71,
        text: "Com seu corpo renovado, você aguarda o próximo movimento do feiticeiro para contra-atacar. Karth'Anos urra e mais bolas de fogo aparecem no ar, voando instantaneamente em sua direção. Você se desvia com facilidade dos projéteis e ganha terreno cada vez mais rápido. O Lich, tomado pelo ódio, dispara um raio de sua mão, você novamente estica a espada que absorve o feitiço. Uma onda de energia invade seu corpo, e você nota que a cada vez que a espada absorve um feitiço, você fica temporariamente mais forte. Instantenamente, você começa a ver as coisas cada vez mais devagares, mas não é o mundo que ficou mais lento, você ficou mais rápido. Usando sua velocidade a seu favor, você se aproxima rapidamente do lich e desfere um golpe certeiro no corpo esquelético do feiticeiro, partindo-o ao meio. Para sua infelicidade, isso não é o suficiente para pará-lo. Vinhas e raízes prendem seus pés enquanto o corpo do lich se junta. Você corta suas amarras e volta ao ataque. Karth'Anos apara o golpe utilizando seu cajado. Porém, apesar de ter bloqueado o golpe, o Lich grita, como se tivesse levado um golpe direto. Percebendo que a alma do Lich está no cajado, você continua sua investida. A cada golpe que o Lich defende, mais e mais dano você causa. Até que o feiticeiro cai e solta seu cajado, gritando de dor e agonia. Você pega o cajado em suas mãos e com um grande esforço, consegue partir o cajado ao meio. Você observa enquanto Karth'Anos é envolvido por labaredas esverdeadas e seus ossos e vestes viram pó. Você derrotou o Lich, o mal ancião que comandava aquela tumba não existe mais. Você é o novo Rei daquele domínio. ",
        options: [
            {
                text: "VOCÊ DERROTOU KARTH'ANOS E SE TORNOU O REI DA TUMBA!",
                nextText: 100
            },
        ]                      
    },
    {
        id: 100,
        text: "Parabéns por concluir o jogo, mas este é apenas um dos 4 finais possíveis! Espero que você tenha aproveitado sua aventura até a Tumba de Karth'Anos! Esse foi um pequeno projeto de programação simples que fiz para testar meus conhecimentos. Obrigado por jogar!"
    }


]


startGame()
