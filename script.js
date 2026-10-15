// Função para calcular o IMC
function calcularIMC(peso, altura) {
    // Cálculo correto do IMC: peso dividido pela altura ao quadrado
    let valor_imc = peso / (altura * altura);
    return valor_imc;
}

// Teste do cálculo conforme exemplo do exercício (80kg e 1.83m)
let pesoTeste = 80;
let alturaTeste = 1.83;
let resultadoIMC = calcularIMC(pesoTeste, alturaTeste);

// Exibição no Console do Navegador (F12)
console.log('O valor do IMC é: ' + resultadoIMC);
console.log('O valor formatado do IMC é: ' + resultadoIMC.toFixed(2));
