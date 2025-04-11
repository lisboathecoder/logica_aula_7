let moedas = 0;
let dinheiro = 0;

while (dinheiro < 12) {
  dinheiro = moedas * 3;
  console.log(`Tem ${dinheiro}R$ com ${moedas} moedas`);
  moedas++;
}