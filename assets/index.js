
let mudaimg = [

    'https://escolaeducacao.com.br/wp-content/uploads/2019/07/boto-cor-de-rosa-750x430.jpg',
    'https://s4.static.brasilescola.uol.com.br/be/conteudo/images/saci-perere.jpg',
    'https://static.todamateria.com.br/upload/cu/ca/cucanofolclore.jpg'
]

let img = document.querySelector('img')
let mudaP = document.querySelector('#historia')
let mudah2 = document.querySelector('#titulo')

 function trocaIMG(){
    let aleatorio = Math.floor( 3 * Math.random())
    img.src = mudaimg[aleatorio]

    if (aleatorio==0) {

        mudaP.textContent = 'A lenda do boto-cor-de-rosa fala que esse animal se transforma em um homem muito bonito e conquistador, que parte à procura de mulheres para seduzi-las. Existem diferentes versões da lenda, sendo que algumas falam que ele se transforma durante qualquer festa nas comunidades ribeirinhas, e outras, que a transformação só acontece na Lua cheia do mês de junho, durante as festividades de Santo Antônio, São João e São Pedro. O boto, como mencionado, transforma-se em um homem muito bonito, com boa conversa e galanteador. Durante a transformação, ele passa a usar roupas e sapatos brancos, além de um chapéu que tampa o topo de sua cabeça. Esse chapéu seria um disfarce, pois a transformação não é completa: no topo da cabeça estariam as narinas do boto. Sendo assim, o chapéu esconde a grande evidência de que aquele homem é, na verdade, o boto. Existem versões da lenda que falam que o boto procura a mulher mais bonita da festa para seduzi-la, e outras, que ele não procura necessariamente a mais bonita, mas sim uma mulher virgem. Depois de seduzir a mulher, o boto deita-se com ela e, antes do fim da noite, ele a abandona. Essa mulher engravida, e seu filho cresce sem pai, uma vez que o boto voltou para suas águas. Essa lenda era muito utilizada na tradição popular para explicar os filhos sem pai. Assim, todo filho que cresce sem saber quem é o pai fica conhecido como filho(a) do boto.'

        mudah2.textContent = 'Lenda do Boto cor-de-rosa. Engravida as mulheres e desaparece...'


    }

    if(aleatorio == 1){

        mudaP.textContent = 'Segundo a lenda do Saci, ele é um ser baixinho, negro e possui apenas uma perna – por isso se locomove pulando rapidamente pela floresta. Outra característica marcante é o seu capuz vermelho. O Saci é muito brincalhão, agitado e travesso. Por isso ele está sempre realizando travessuras por onde passa. Ele gosta de bagunçar a crina dos cavalos durante a noite, dando nós e fazendo tranças. Esses são sinais de que o Saci passou por ali. Ele também tem o costume de entrar nas casas para pregar peças nas pessoas. Pode queimar as comidas que estão no fogão, ou fazer objetos desaparecerem. Às vezes até apaga velas e luzes. O Saci cria um redemoinho quando passa rápido por um lugar, levantando folhas e sujeira. Quando isso acontece, a lenda do Saci conta que é possível capturá-lo lançando uma peneira no meio do redemoinho. Então, quem capturar o Saci deve retirar o seu gorro e colocá-lo dentro de uma garrafa.'

        mudah2.textContent = 'Lenda do Saci-Pererê Adora fazer travessuras...'

    }

    if(aleatorio == 2){

        mudaP.textContent = 'A Cuca é uma personagem do folclore brasileiro. Trata-se de uma bruxa velha com aparência assustadora que possui cabeça de jacaré e unhas imensas. Dona de uma voz assustadora, a Cuca rapta as crianças desobedientes. Reza a lenda que a bruxa Cuca dorme uma vez a cada sete anos. Por isso, os pais tentam convencer as crianças a dormirem nas horas corretas pois, do contrário, serão levadas pela Cuca.'

        mudah2.textContent = 'Lenda da Cuca...'

    }
 }