const apiUrl = 'https://economia.awesomeapi.com.br/last/USD-BRL'

function calcular(){
    let verificar = document.getElementById('valor').value
    if(verificar == ''){
        alert('Digite um valor')
    }else{
        function pegarDolar() {
        fetch(apiUrl)
        .then((resposta) => resposta.json())
        .then((data) => pegarvalor(data.USDBRL.ask))
    }
    pegarDolar()

    function pegarvalor(valor){
        const valorDolar = parseFloat(valor)
        const valorUsuario = document.getElementById('valor').value
        const total =  valorUsuario * valorDolar
        document.querySelector('h1').innerHTML = `${total.toFixed(2)} dolares<br> Faça o L`
        document.querySelector('img').style.opacity = '1'
    }}

}
