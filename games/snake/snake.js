var canvas = document.getElementById('snake-canvas')

var ctx = canvas.getContext('2d')

var placar = document.getElementById("score-game")

var tela_inicio = document.getElementById("startScreen")
var tela_doFim = document.getElementById("gameOverScreen")
var botao_iniciar = document.getElementById("btn-iniciar")
var botao_restart = document.getElementById("btn-restart")

var tamanho_bloco = 20
var quantidade_blocos = canvas.whidth / tamanho_bloco

var cobra = [
    { x: 10, y: 10 },
    { x: 9, y: 10}
]