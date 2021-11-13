function calcular(){
    let verificar = document.getElementById('valor').value
    if(verificar == ''){
        alert('Digite um valor')
    }else{
        function pegarDolar() {
        fetch('https://economia.awesomeapi.com.br/last/USD-BRL')
        .then((resposta) => resposta.json())
        .then((data) => pegarvalor(data.USDBRL.ask))
    }
    pegarDolar()

    function pegarvalor(valor){
        let valorDolar = parseFloat(valor)
        let valorReduzido = valorDolar.toFixed(2)             
        let valorUsuario = document.getElementById('valor').value
        let total =  valorUsuario * valorReduzido
        document.querySelector('h1').innerHTML = `${valorUsuario}<img src="https://cdn-icons-png.flaticon.com/128/126/126179.png" alt=""> dolares equivale a ${total}<img src="https://cdn-icons-png.flaticon.com/128/126/126179.png" alt="">`
    }}

}
