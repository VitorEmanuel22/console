let nome = "Vitor ";
let sobrenome = "Emanuel Martins de Almeida";

let nomecompleto = nome.concat(sobrenome);
console.log(nomecompleto)

let quantidadedecaracteres= nomecompleto.lenght;
console.log(quantidadedecaracteres);

let irmaovelho = nomecompleto.replace( nome, "Pablo ");
console.log(irmaovelho);

let cacula = nomecompleto.replace( nome, "Nathan ");
console.log(cacula);

let a = Math.floor(Math.random()*100);
console.log(a);

let b = Math.floor(Math.random()*100);
console.log(b);

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);