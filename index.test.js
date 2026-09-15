const { saudacao, somar } = require('./index.js');
console.assert(saudacao('Rafael') === 'Ola, Rafael!', 'saudacao falhou');
console.assert(somar(2, 3) === 5, 'soma falhou');
console.log('Testes passaram!');
