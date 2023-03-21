

let urlParams = new URLSearchParams(window.location.search);
let nome = urlParams.get('nome');
let cpf = urlParams.get('cpf');
let rendimentos = parseFloat(urlParams.get('rendimentos'));


function calcularAliquota(rendimentos) {
    var rendimentoAnual = 0;  
    rendimentoAnual = (rendimentos*12)

    if (rendimentoAnual <= 22847){
        return 0;

    } else if (rendimentoAnual >= 22847 && rendimentoAnual < 33919) {
        return 7.5;

    } else if (rendimentoAnual >= 33919 && rendimentoAnual < 45012) {
        return 15;

    } else if (rendimentoAnual >= 45012 && rendimentoAnual < 55976) {
        return 22.5;

    } else {
        return 27.5;
    }
}



export default function calcularImposto(rendimentos) {
    var aliquota = 0;
    var imposto = 0;
    var rendimentoAnual = 0;  
    rendimentoAnual = (rendimentos*12)
    
    if (rendimentoAnual <= 22847){
        aliquota = 0;
    } else if (rendimentoAnual >= 22847 && rendimentoAnual < 33919) {
        aliquota = 7.5;
    } else if (rendimentoAnual >= 33919 && rendimentoAnual < 45012) {
        aliquota = 15;
    } else if (rendimentoAnual >= 45012 && rendimentoAnual < 55976) {
        aliquota = 22.5;
    } else { 
        aliquota = 27.5;
           }
    imposto = ((rendimentos*12) * aliquota) / 100;
    return imposto = imposto;
    }

let nomeElement = document.getElementById('nome');
let cpfElement = document.getElementById('cpf');
let rendimentosElement = document.getElementById('rendimentos');
let aliquotaElement = document.getElementById('aliquota');
let impostoElement = document.getElementById('imposto');


nomeElement.textContent = nome;
cpfElement.textContent = cpf;
rendimentosElement.textContent = `R$ ${rendimentos.toFixed(2)}`;
aliquotaElement.textContent = `${calcularAliquota(rendimentos)}%`;
impostoElement.textContent = `R$ ${calcularImposto(rendimentos).toFixed(2)}`;