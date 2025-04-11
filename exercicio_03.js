let numero = 0;
let soma = 1;

while (soma <= 30) {
    soma += numero;
    numero++;
    console.log(`${numero} + ${soma}`);
}
console.log(`o resultado é do calculo ${numero + soma}`)