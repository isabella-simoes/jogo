var altura = 0
var largura = 0

function ajustaTamanhoPalcoJogo(){
    altura = innerHeight 
    largura = innerWidth
    // height altura, widht largura ṕrecisa disto para o jogo saber a limitação
    // de quanto o jogo conseguej

}
ajustaTamanhoPalcoJogo()

function posicaoRandomica(){
var posicaoX = Math.floor(Math.rondow() * largura) -90

var posicaoY = Math.floor(Math.rondow() * altura) -90

    // criar o elemneto mosquito
    var mosquito = document.createElement("img")
    mosquito.src = "mosca.png"
    mosquito.className = "mosquito1"
    mosquito.style.left = posicaoX + "px"
    mosquito.style.top = posicaoY + "px"
    mosquito.style.position = "absolute"

    document.body.appendChild(mosquito)
    

}
posicaoRandomica()