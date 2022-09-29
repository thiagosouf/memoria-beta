let order = [];
let clickedOrder = [];
let score = 0;

//0 - verde
//1 - vermelho
//2 - amarelo
//3 - azul

const C = document.querySelector('.C');
const D = document.querySelector('.D');
const E = document.querySelector('.E');
const B = document.querySelector('.B');

let colorOrder = [0, 1, 2, 3]
let cont = 0

//cria ordem aletoria de cores
let shuffleOrder = () => {
    //let colorOrder = Math.floor(Math.random() * 4);

    order[order.length] = colorOrder[cont];
    clickedOrder = [];

    if (cont >= colorOrder.length) {
        congratulation();
    }

    for (let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
    cont++
}

//acende a proxima cor
let lightColor = (element, number) => {
    console.log(number)
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
        console.log("acende")
        console.log(number)
    }, number - 350);
    setTimeout(() => {
        element.classList.remove('selected');
        console.log("apaga")
        console.log(number)
    }, number - 50);
}

//checa se os botoes clicados são os mesmos da ordem gerada no jogo
let checkOrder = () => {
    for (let i in clickedOrder) {
        if (clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if (clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
        nextLevel();
    }
}

//funcao para o clique do usuario
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250);
}

//funcao que retorna a cor
let createColorElement = (color) => {
    if (color == 0) {
        return E;
    } else if (color == 1) {
        return D;
    } else if (color == 2) {
        return B;
    } else if (color == 3) {
        return C;
    } else if (color == 4) {
        return A;
    } else if (color == 5) {
        return G;
    } else if (color == 6) {
        return F;
    } else if (color == 7) {
        return C2;
    }
}

//funcao para proximo nivel do jogo
let nextLevel = () => {
    score++;
    shuffleOrder();
}

//funcao para game over
let gameOver = () => {
    alert(`Pontuação: ${score}!\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo`);
    order = [];
    clickedOrder = [];
    cont = 0;

    playGame();
}

let congratulation = () => {
    alert(`Parabens voce acertou todos os desafios da primeira fase!`)
    console.log(order)
    console.log(clickedOrder)
    console.log(cont)
    console.log(colorOrder)
    order = [];
    clickedOrder = [];
    cont = 0;

    playGame();
}

//funcao de inicio do jogo
let playGame = () => {
    alert('Bem vindo ao Gênesis! Iniciando novo jogo!');
    score = 0;

    nextLevel();
}

//eventos de clique para as cores
E.onclick = () => click(0);
D.onclick = () => click(1);
B.onclick = () => click(2);
C.onclick = () => click(3);
A.onclick = () => click(4);
G.onclick = () => click(5);
F.onclick = () => click(6);
C2.onclick = () => click(7);



//inicio do jogo
playGame();
