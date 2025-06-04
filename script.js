function converterCtoF(tempC) {
    const tempF = (tempC * 9/5) + 32;
    console.log(`Temperatura = ${tempF} F`);
    /*O resultado retorna o que é desejado, neste caso a temp cenvertida que está na variavel tempF */
    return tempF;
}
function converterCtoK(tempC) {
    const tempK = tempC + 273.15;
    console.log(`Temperatura = ${tempK} K`);
    /*O resultado retorna o que é desejado, neste caso a temp cenvertida que está na variavel tempK */
    return tempK;
}

function converter() {
    console.log(`Ei clicou!`)
    let tempC = parseFloat(document.getElementById("tempC").value);
    console.log(`Temp °C: ${tempC}`)
/*Chamando a função que converte de C para F */
    const resultado = converterCtoF(tempC);
    /*Exibe o resultado na tag que possui um id chmando resultado no HTML */
    document.getElementById('resultado').innerHTML = `${resultado} F`;

    document.getElementsByClassName('resultado')[0].style.display = 'flex'

    const resultadoK = converterCtoK(tempC);

    document.getElementById('resultadoK').innerHTML = `${resultadoK} K`;
}
function limpar() {
    console.log('limpou')
    document.getElementsByClassName('resultado')[0].style.display = 'none';
}
//converterCtof(18);
//converterCtof(30);