let jogador, vencedor = null
let jogadorSelecionado = window.document.getElementById('jogador-selecionado')
let vencedorSelecionado = window.document.getElementById('vencedor-selecionado')
let quadrados = window.document.getElementsByClassName('quadrado')

mudarJogador('X')

function escolherQuadrado(id) {
    let quadrado = window.document.getElementById(id)
    
    quadrado.style.color = '#000'

    if(quadrado.innerHTML === '-' && vencedor == null){

        quadrado.innerHTML = jogador

        if(jogador === 'X'){
            jogador = 'O'
        } else {
            jogador = 'X'
        }
        
        mudarJogador(jogador)
        checarVencedor()

    } else {
        return
    }

}

function mudarJogador(valor) {
    jogador = valor
    jogadorSelecionado.innerHTML = jogador
}

function checarVencedor() {
    let quadrado1 = window.document.getElementById('1')
    let quadrado2 = window.document.getElementById('2')
    let quadrado3 = window.document.getElementById('3')
    let quadrado4 = window.document.getElementById('4')
    let quadrado5 = window.document.getElementById('5')
    let quadrado6 = window.document.getElementById('6')
    let quadrado7 = window.document.getElementById('7')
    let quadrado8 = window.document.getElementById('8')
    let quadrado9 = window.document.getElementById('9')

    if(checaSequencia(quadrado1,quadrado2,quadrado3)){
        mudaCor(quadrado1,quadrado2,quadrado3)
        mudaVencedor(quadrado1)
    }

    if(checaSequencia(quadrado4,quadrado5,quadrado6)){
        mudaCor(quadrado4,quadrado5,quadrado6)
        mudaVencedor(quadrado4)
    }

    if(checaSequencia(quadrado7,quadrado8,quadrado9)){
        mudaCor(quadrado7,quadrado8,quadrado9)
        mudaVencedor(quadrado8)
    }

    if(checaSequencia(quadrado1,quadrado5,quadrado9)){
        mudaCor(quadrado1,quadrado5,quadrado9)
        mudaVencedor(quadrado1)
    }

    if(checaSequencia(quadrado3,quadrado5,quadrado7)){
        mudaCor(quadrado3,quadrado5,quadrado7)
        mudaVencedor(quadrado3)
    }

    if(checaSequencia(quadrado1,quadrado4,quadrado7)){
        mudaCor(quadrado1,quadrado4,quadrado7)
        mudaVencedor(quadrado1)
    }

    if(checaSequencia(quadrado2,quadrado5,quadrado8)){
        mudaCor(quadrado2,quadrado5,quadrado8)
        mudaVencedor(quadrado2)
    }

    if(checaSequencia(quadrado3,quadrado6,quadrado9)){
        mudaCor(quadrado3,quadrado6,quadrado9)
        mudaVencedor(quadrado3)
    }
}

function mudaVencedor(quadrado) {
    vencedor = quadrado.innerHTML
    vencedorSelecionado.innerHTML = vencedor 
}

function mudaCor(quadrado1,quadrado2,quadrado3) {

    quadrado1.style.background = '#0f0'
    quadrado2.style.background = '#0f0'
    quadrado3.style.background = '#0f0'

}


function checaSequencia(quadrado1,quadrado2,quadrado3){

    let ehigual = false
    if(quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML){
        ehigual = true
    }
    return ehigual
}

function reiniciar() {
    vencedor = null
    vencedorSelecionado.innerHTML = ''

    for(let i=1; i<=9;i++){
        let quadrado = window.document.getElementById(i)
        quadrado.style.color = 'black'
        quadrado.style.background = '#eee'
        quadrado.innerHTML = '-'
    }

    mudarJogador(X)
}