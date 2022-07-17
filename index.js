//var nome = "Vincius";

//var idade = prompt("Digite sua idade");

/*document.write("<h1>teste</h1>");
document.write("<br>");
document.write("<image src='http://google.com/google.jpg'/>");
document.write("<strong> Aprendendo</strong>")*/

function entrar() {
    var area = document.getElementById('area');
    var texto = prompt('Digite seu nome');

    if(texto == '' || texto == null){
        alert('Digite seu nome novamente!');
        area.innerHTML = 'Bem vindo...';
    }else{
        area.innerHTML = 'Bem vindo ' + texto;
    }
}

function entrar2(nome) {
    var area = document.getElementById('area');
    var texto = prompt('Digite seu sobrenome');

    area.innerHTML = 'Bem vindo ' + nome + ' ' + texto;
}

/*
var lista = ["vinicis", "bifi", "teste", 12];

lista.indexOf("bifi");

lista[1];

lista.join(",");

lista.pop(); //remove o ultimo elemento

lista.shift(); //remove o primeiro elemento

lista.push("teste2") //adicionar elemento
*/

/*
function acao(){
    document.write("Executando... <br/>");
}

setInterval(acao, 1000); //executa a cada X tempo

var timer = setInterval(acao, 1000); //executa a cada X tempo
clearInterval(timer); // Para o contador


setTimeout(acao, 3000);//executa apos a contagem
*/

/*
var nome = '';
if(typeof localStorage.nome == 'undefined'){
    localStorage.nome = prompt("Digite seu nome");
}

nome = localStorage.nome;

document.getElementById("nome").innerHTML = nome;
*/

/*
function cadastroPessoa(info){
    let novosDados = {
        ...info,
        cargo: 'Programador',
        status: 1,
        codigo: '21312321'
        
    }
    return novosDados;
}

console.log(cadastroPessoa({nome: 'Vinicius', sobrenome:'Biffi', anoInicio: 2045}));
*/

/*
function cadastrar(usuarios, ...novosUsuarios){
    totalUsuarios = [
        ...usuarios,
        ...novosUsuarios
    ]
    console.log(totalUsuarios);
}

let usuarios = ["Vinicius", "Biffi"]

let novosUsuarios = cadastrar(usuarios, "Joao", "Maria");
*/

/*
const lista = [1, 2, 3, 4, 5, 6];

const novaLista = lista.map(function(item, index){
    return item + index;
});

console.log(novaLista);

const soma = lista.reduce(function(total, proximo){
    return total + proximo;
});

const find = lista.find(function(item){
    return item === 6;
});
*/

/*
function adicionar(...numeros){
    let total = numeros.reduce((total, proximo) => total+proximo);
    console.log(total);
}

adicionar(1, 2, 3, 4, 5);
*/

/*
let nomes = ["Vinicius", "Biffi", "Joao"];
console.log(nomes.includes('Vinicius'));//retorna true ou false.
*/
