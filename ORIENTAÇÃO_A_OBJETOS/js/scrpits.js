// 1 - métodos
// const animal = {
//     nome: "Ares",
//     latir: function () {
//         console.log("au au caralho");
//     },
// };

// console.log(animal.nome);

// animal.latir();

// // 2 - mais sobre metodos
// const pessoa = {

//     nome: "jonas",

//     getNome: function () {
//         return this.nome;
//     },

//     setNome: function (novoNome) {
//         this.nome = novoNome;
//     },
// };

// console.log(pessoa.nome);

// console.log(pessoa.getNome());

// pessoa.setNome("Ares");

// console.log(pessoa.getNome());

// // 3 - prototype
// const text = "asd"

// console.log(Object.getPrototypeOf(text));

// const bool = true

// console.log(Object.getPrototypeOf(bool));

// const arr = [];

// console.log(arr.length);

// console.log(Object.getPrototypeOf(arr));

// // 4 - mais sobre prototype
// const myObject = {
//     a: "b",
// };

// console.log(Object.getPrototypeOf(myObject));

// console.log(Object.getPrototypeOf(myObject) === Object.prototype);

// const mySecondObject = Object.create(myObject);

// console.log(mySecondObject);

// console.log(mySecondObject.a);

// console.log(Object.getPrototypeOf(mySecondObject) === myObject);

// 5 - classes basicas
// const cachorro = {
//     raca: null,
//     patas: 4,

// };

// const pastorAlemao = Object.create(cachorro);

// pastorAlemao.raca = "Pastor Alemão";

// console.log(pastorAlemao);

// console.log(pastorAlemao.patas);

// const bulldog = Object.create(cachorro);

// bulldog.raca = "Bulldog";

// console.log(bulldog);

// // 6 - função como classe - função construtora
// function criarCachorro(nome, raca) {
//     const cachorro = Object.create({});

//     cachorro.nome = nome;
//     cachorro.raca = raca;

//     return cachorro;
// } 

// const ares = criarCachorro("Ares", "pitbull");

// console.log(ares);

// const mel = criarCachorro("Mel", "Salsicha");

// console.log(mel);

// console.log(Object.getPrototypeOf(mel));

// // 7 - funcoes como classe
// function Cachorro(nome, raca) {
//     this.nome = nome
//     this.raca = raca
// };

// const pitbull = new Cachorro("ares", "pitbull")

// console.log(pitbull);

// // 8 - metodos na funcao construtora
// Cachorro.prototype.uivar = function () {
//     console.log("Auuuuu!");
// };

// console.log(Cachorro.prototype)

// pitbull.uivar();

// // 9 - classes es6
// class cachorroClasse {
//     constructor(nome, raca) {
//         this.nome = nome
//         this.raca = raca
//     }
// }

// const jeff = new cachorroClasse("Jeff", "Labrador");

// console.log(jeff);

// console.log(Object.getPrototypeOf(jeff));

// // 10 - mais sobre classes
// class Caminhao {
//     constructor(eixos, cor) {
//         this.eixos = eixos;
//         this.cor = cor;
//     }

//     descreverCaminhao() {
//         console.log(`Este caminhão tem ${this.eixos} eixos e é da cor ${this.cor}`)
//     }
// }  

// const scania = new Caminhao(6, "Vermelha");

// console.log(scania);

// scania.descreverCaminhao();

// Caminhao.motor = 4;

// const c2 = new Caminhao(5, "Preta");

// console.log(c2);

// console.log(c2.motor);

// Caminhao.prototype.motor = 4.0;

// const c3 = new Caminhao(6, "Azul");

// console.log(c3.motor);

// 11 - override
class Humano {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

const jonas = new Humano("Jonas", 21);

console.log(jonas);

Humano.prototype.idade = "Não definida";

console.log(jonas.idade);

console.log(Humano.prototype.idade);

// 12 - symbols
class  Aviao {
    constructor(marca, turbina) {
        this.marca = marca
        this.turbina = turbina
    }
}

const asas = Symbol()
const pilotos = Symbol

Aviao.prototype[asas] = 2;

Aviao.prototype[pilotos] = 3;

const boeing = new Aviao("Boeing", 10);

console.log(boeing);

console.log(boeing[asas]);

console.log(boeing[pilotos]);

// 13 - getters e setter
class Post {
    constructor(titulo, descricao, tags) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.tags = tags;
    }
    get exibirTitulo() {
        return `Você está lendo: ${this.titulo}`;
    }

    set adicionarTags(tags) {
        const tagsArray = tags.split(",")
        this.tags = tagsArray
    }
}

const myPost = new Post("Algum post", "É um post sobre programação");

console.log(myPost);

console.log(myPost.exibirTitulo);

myPost.adicionarTags = "programação, javascript, js";

// 14 - herança
class Mamifero {
    constructor(patas) {
        this.patas = patas
    }
}

class Lobo extends Mamifero {
    constructor(patas, nome) {
        super(patas, patas)
        this.nome = nome;
    }
}

const shark = new Lobo(4, "shark");

console.log(shark);

console.log(shark.patas);

// 15 - instanceof
console.log(shark instanceof Lobo);

console.log(Lobo instanceof Mamifero);

console.log(new Lobo(4, "teste") instanceof Mamifero);