function celsiusParaFahrenheit(celsius){
    return (celsius * 9/5) + 32;
}

function horasParaMinutos(horas) {
    return horas * 60;
}  

function idadeParaDias(idade) {
    return idade * 365;
}  

function metrosParaKm(metros) {
    return metros / 1000;
}

function consumoDeCombustivel(distancia, consumo) {
    return distancia / consumo;
}

module.exports = { celsiusParaFahrenheit, 
                horasParaMinutos, 
                idadeParaDias, 
                metrosParaKm, 
                consumoDeCombustivel 
};
                    
