var inputNumero = document.querySelector('#inputNumero')
const botao = document.querySelector('#mostra')
var campoTabuada = document.querySelector('#campoTabuada')

botao.addEventListener('click', mostraTabuada)
function mostraTabuada() {
    var texto = ''
    var numero = Number(inputNumero.value)
    for (var contador = 1; contador <= 10; contador++) {
        // if (contador == 5){continue} se isso for feito aqui o resultado de 5 não aparece na tabuada
        texto += `${numero} x ${contador.toString().padStart(2, '0')} = ${numero*contador} \n`
        // acima eu transformei o contador em uma string pra poder aplicar o padStart, 
        // que completa a esquerda a string até a quantidade desejada de caracteres
        
    }
    campoTabuada.innerHTML = texto  //innText não deu certo porque a quebra de linha não funciona nele
}
