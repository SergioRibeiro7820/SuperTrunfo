var carta1 = {
  nome: "PeteRock",
  imagem: "https://resources.tidal.com/images/4c781d3c/cae3/4167/90cc/e01499f53ddb/750x750.jpg",
  setup: {
    sample: 7,
    drumkit: 9,
    workflow: 10
  }
};

var carta2 = {
  nome: "DjPremier",
  imagem: "https://djmag.com/sites/default/files/article/image/DJ-Premier.jpg",
  setup: {
    sample: 10,
    drumkit: 9,
    workflow: 8
  }
};

var carta3 = {
  nome: "LargeProfessor",
  imagem: "https://lastfm.freetls.fastly.net/i/u/ar0/93c76fc8ff8a46dbc6aa5f2231cf4e9b.jpg",
  setup: {
    sample: 6,
    drumkit: 8,
    workflow: 10
  }
};

var cartas = [carta1, carta2, carta3];

var cartaMaquina;
var cartaJogador;

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 3);
  cartaMaquina = cartas[numeroCartaMaquina];
  // console.log(cartaMaquina);

  var numeroCartaJogador = parseInt(Math.random() * 3);
  while (numeroCartaMaquina == numeroCartaJogador) {
    numeroCartaJogador = parseInt(Math.random() * 3);
  }

  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;

  exibirCartaJogador();
}

function obterAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");
  for (var b = 0; b < radioAtributos.length; b++) {
    if (radioAtributos[b].checked == true) {
      return radioAtributos[b].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obterAtributoSelecionado();
  var divResultado = document.getElementById("resultado");
  
  if (cartaJogador.setup[atributoSelecionado] > cartaMaquina.setup[atributoSelecionado]) {
    htmlResultado = "<p class='resultado-final'>Seu Beat é Hype!</p>"
  } else if (cartaJogador.setup[atributoSelecionado] < cartaMaquina.setup[atributoSelecionado]) {
    htmlResultado = "<p class='resultado-final'>Seu Beat não é Hype!</p>"
  } else {
    htmlResultado = "<p class='resultado-final'>Os Beats são Hits!!!</p>"
  }
    // console.log(divResultado);
  divResultado.innerHTML = htmlResultado;
  
  document.getElementById('btnJogar').disabled = true;
  exibirCartaMaquina()
}


function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>"
  
  var opcoesTexto = "";
  for (var atributo in cartaJogador.setup) {
    opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.setup[atributo] + "<br>" ;
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
  
  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>"
  
  var opcoesTexto = "";
  for (var atributo in cartaJogador.setup) {
    opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.setup[atributo] + "</p>" ;
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
  
  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"
}

// COMENTÁRIOS 

// console.log(carta1.setup); //acessar a lista de atributos=setup
// console.log(carta1.setup.sample); //acessar o atributos=setup
// console.log(carta1.setup.drumkit);
// console.log(carta1.setup.workflow);

// Para que o sorteio das cartas seja sempre uma carta diferente da outra
// usaremos uma estrutura chamada while(enquanto).

// Na parte de jogar usaremos o (for) para percorrer o setup(atributo) de cada carta do jogo.

// função jogar
// console.log(atributoSelecionado); mostrar o atributo selecionado pelo jogador.
// console.log(cartaJogador.setup[atributoSelecionado]); mostrar o valor do atributo selecionado pelo jogador.

//  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})` // string que contém um parte de outra string add atributo img ao card. Outra forma de fazer é => divCartaJogador.style.backgroundImage = url"(" + cartaJogador.imagem + ")"

// ===========================================================================================================================================================

// Desafio da Aula
// resolver o problema: quando o jogador não selecionar nenhum atributo acontece o que?
// mostrar a imagem da carta sorteada.


//   CÓDIGO DA AULA 07 (FUNÇÃO JOGAR) QUE FOI ALTERADO E NÃO MENCIONADO NA AULA 08.
//   var elementoResultado = document.getElementById("resultado");
//   var valorCartaJogador = cartaJogador.setup[atributoSelecionado];
//   var valorCartaMaquina = cartaMaquina.setup[atributoSelecionado];

//   if (valorCartaJogador > valorCartaMaquina) { elementoResultado.innerHTML = "Seu Beat é Hype!"; } 
//   else if (valorCartaMaquina > valorCartaJogador) { elementoResultado.innerHTML = "Seu Beat não é Hype!"; } 
//   else { elementoResultado.innerHTML = "Os Beats são Hits!!!"; }
