function converterCtoF(tempC) {
    const tempF = (tempC * 9/5) + 32;
    console.log(`Temperatura = ${tempF} F`);
    /*O resultado retorna o que é desejado, neste caso a temp cenvertida que está na variavel tempF */
    return tempF;
}

function converter() {
    console.log(`Ei clicou!`)
    let tempC = document.getElementById("tempC").value;
    console.log(`Temp °C: ${tempC}`)
/*Chamando a função que converte de C para F */
    const resultado = converterCtoF(tempC);
    /*Exibe o resultado na tag que possui um id chmando resultado no HTML */
    document.getElementById('resultado').innerHTML = resultado
}
//converterCtof(18);
//converterCtof(30);