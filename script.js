//ANIMACAO AO CLICAR NO CHECK
//SALVA O VALOR
//RESETA O TEMPO DE SELECAO
//CONSOLE MOSTRA DADOS SALVOS
//LIMPA A CAIXA DE INPUT
//CRIA A DIV 
//INSERE A DIV NA LISTA


const check = document.querySelector('.fa-check'); //CONSTANTE CHECK
const txtInput = document.querySelector('#caixa'); //CONSTANTE PARA REFERIR AO TEXTO DO INPUT
const listBox = document.querySelector('.box');  //CONSTANTE PARA ADICIONAR O TEXTO NA BOX
const listaVazia = document.querySelector('#nulltxt') //CONSTANTE PARA REMOVER O NULL QUANDO VAZIA

check.addEventListener('click', function () {
    check.classList.add('clicado'); //MUDANCA DE COR DO CHECK
    let textosalvo = txtInput.value.trim(); //SALVA O TEXTO DIGITADO NA VARIAVEL LET 'TEXTOSALVO' //TRIM DESCONSIDERA ESPAÇOS NO COMEÇO E NO FIM
    if (textosalvo === "") {
        fundo.classList.remove('fechado')
        txtInput.clear()
        return;
    }
    listaVazia.classList.add('sumido') //APAGA O LISTA VAZIA QUANDO ADICIONADO UM ITEM NA LISTA
    setTimeout(() => {
        check.classList.remove('clicado')
    }, 1100); //TEMPO DE RESET DE ELEMENTO PARA PODER FAZER SEMPRE A ANIMAÇAO
    caixa.value = ""; //LIMPA A CAIXA DEPOIS DE ADICIONAR NA LISTA

    const novoItem = document.createElement('div'); //CONSTANTE PARA CRIAR UM NOVO ITEM QUANDO DIGITADO
    novoItem.classList.add('item-lista'); //MANIPULA O novoItem TRANSFORMANDO ELE NA CLASSE 'ITEM-LISTA'
    listBox.appendChild(novoItem); //INSERE A DIV NA PAGINA
    novoItem.innerHTML = `
        <input type="checkbox" id="checkbox">
        <span>${textosalvo}</span>`; //ADICIONA A CHECKBOX E O ITEM ESCRITO NA LISTA
})



//RELOAD
const reloadPage = document.querySelector('#main'); //CONSTANTE PARA DAR RELOAD NA PAGE

reloadPage.addEventListener('click', function () {
    window.location.reload(); //RELOAD AO CLICAR EM 'GEGELIST.COM'
})



//CAIXA DE ERRO AO DIGITAR ALGO NULO
const btnEntendido = document.querySelector('#fecharCampoVazio')
const fundo = document.querySelector('.fundoCampoVazio')

btnEntendido.addEventListener('click', function () {
    btnEntendido.classList.add('clicado2')

    setTimeout(() => {
        fundo.classList.add('fechado');
    }, 500);
})