const entrada = [8, 3, 4, 8, 20, 9, 10, 15, 40];
let i = 0;

function gets() {
    const valor = entrada [i];
    i++;
    return valor;
}
const N = gets();
let maiorNumeroPar = 0;
let menorNumeroImpar = 0;

for (let i = 0; i < N; i++){
    const numero = parseInt(gets());
    if(numero % 2 === 0){
        if( numero > maiorNumeroPar){
            maiorNumeroPar = numero;
        }
    
    }else{
        if(menorNumeroImpar === 0){
            menorNumeroImpar = numero;
        }else if(numero < menorNumeroImpar){
            menorNumeroImpar = numero;
        }
    }

}

console.log('Maior número par: '+ maiorNumeroPar);
console.log('Menor número impar: '+ menorNumeroImpar);