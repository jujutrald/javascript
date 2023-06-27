/*
let pagamento = "debito";

//if(pagamento ==="debito"){
    //console.log("receba 10% de desconto");
//}else if(pagamento === dinheiro || pagamento === "pix"){
    //console.log("15% de desconto")
//}else if(pagamento === "2x"){
    //console.log("preço normal de etiqueta sem juros")
//}else{
    //console.log("preço normal de etiqueta sem juros de 10%")
//}


switch (pagamento){
    case "debito":
    console.log("receba 10% de desconto");
    break;
    case "dinheiro":
    console.log("receba 15% de desconto");
    break;
    case "pix":
    console.log("receba 15% de desconto");
    break;
    case "2x":
    console.log("preço normal de etiqueta sem juros");
    break;
    default:
    console.log("preço normal de etiqueta sem juros se 10%");
    break;
}
*/
//let carro = "renegade";

//switch (carro){
    //case "renegade":
    //console.log("jeep");
    //break;
    //case "c4 cactus":
    //console.log("citroen");
    //break;
    //case "hb20":
    //console.log("hyundai");
    //break;
    //case "kicks":
    //console.log("nissan");
    //break;
    // "focus":
    //console.log("ford");
    //break;
    //case "tracker":
    //console.log("chevrolet");
    //break;
    //case "corola":
    //console.log("toyota");
    //break;
    //default:
   //console.log("escolha entre renegade, c4 cactus, hb20, kicks, focus, tracker, corola");
    //break;
//}
//for (let i = 0; i < 10; i++){
    //console.log("o resultado de 5 x é", i, "=", 5 * i);
//}

//let i =0;
//while (i <=10) {
    //console.log("O resultado de 5 x", i, "=", 5 * i);
    //i++
//}
//let num1 = 5;
//let num2 = 10;

 //let soma = num1+num2;

//console.log(soma);
//function soma(x, y) {
//const resultado = x + y;
//return resultado;
//}
//console.log(soma(20, 30));
//console.log(soma(15, 55));

//function saudacao(){
    //return "Boa noite pessoal";
//}
//console.log(saudacao());

//function saud(nome3){
    //return `Boa noite ${nome3}`;
//}
//console.log(saud("Maria"));

let altura2 = 1.80;
let peso2 = 80;
let imc2 = peso2 / (altura2 * altura2)
function imc(peso, altura){
    let resultado = peso / (altura * altura)
    if (resultado <= 24.9) {
     return "Peso normal"   
} else if(resultado>=25 && resultado <=29.9){
    return "pessoa com sobrepeso"
} else if(resultado>=29.9)

if (resultado <= 30) {
    return "Obesidade grau I"   
} else if(resultado>=30 && resultado <=34.9){
   return "pessoa com obesidade grau I"
} else if(resultado>=34.9) 

if (resultado <= 35) {
    return "Obesidade grau II"  
 } else if(resultado>=35 && resultado <=39.9){
   return "pessoa com obesidade grau II"
} else if(resultado>=39.9)

if (resultado <= 40) {
    return "Obesidade grau III"   
} else if(resultado>=40 && resultado <=45.9){
   return "pessoa com obesidade grau III"
} else if(resultado>=45.9)
}
