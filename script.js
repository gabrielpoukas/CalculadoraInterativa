let body;
let formCalculadora;
let btnToggleTheme;

let inputCapital;
let inputTaxa;
let inputTempo;


let resultadosDiv;
let spanMontanteFinal;
let spanJurosAcumulados;


window.onload = function()  {


body= document.querySelector('body');
formCalculadora = document.querySelector('#form-calculadora');
btnToggleTheme= document.querySelector('#btn-toggle-theme');

inputCapital= document.querySelector('#capital');
inputTaxa = document.querySelector('#taxa')
;
inputTempo = document.querySelector('#tempo');

    resultadosDiv = document.querySelector('#resultados');
    spanMontanteFinal = document.querySelector('#montante-final');
    spanJurosAcumulados = document.querySelector('#juros-acumulados');

    formCalculadora.addEventListener('submit', calcularJuros);
    
    btnToggleTheme.addEventListener('click', toggleTheme);

    document.querySelector('#btn-limpar').addEventListener('click', limparCampos);

};


function calcularJuros(e) {

    e.preventDefault(); 
    
    
    const C = parseFloat(inputCapital.value);
    const taxaAnual = parseFloat(inputTaxa.value);
    const t = parseFloat(inputTempo.value);

    
    if (isNaN(C) || isNaN(taxaAnual) || isNaN(t) || C <= 0 || taxaAnual <= 0 || t <= 0) {
        alert("Por favor, preencha todos os campos com valores positivos e válidos.");
        resultadosDiv.classList.add('oculto'); 
        return;
    }
    
    
    const i = taxaAnual / 100; 
    
    
    const montante = C * Math.pow((1 + i), t);
    
    
    const juros = montante - C;
    
    exibirResultados(montante, juros);
}


function toggleTheme() {
    
    body.classList.toggle('light-theme'); 
    
   
    if (body.classList.contains('light-theme')) {
        btnToggleTheme.textContent = '🌙 Modo Noite';
    } else {
        btnToggleTheme.textContent = '🌞 Modo Dia';
    }
}


function exibirResultados(montante, juros) {
   
    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
    });
    
   
    spanMontanteFinal.textContent = formatter.format(montante);
    spanJurosAcumulados.textContent = formatter.format(juros);
    
  
    resultadosDiv.classList.remove('oculto');
}

function limparCampos() {
   
    inputCapital.value = '';
    inputTaxa.value = '';
    inputTempo.value = '';
    
    resultadosDiv.classList.add('oculto');


}