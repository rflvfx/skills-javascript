const saudacao = (nome) => `Ola, ${nome}!`;
const somar = (a, b) => a + b;

if (require.main === module) {
  console.log(saudacao('Mundo'));
  console.log('2 + 3 =', somar(2, 3));
}

module.exports = { saudacao, somar };
