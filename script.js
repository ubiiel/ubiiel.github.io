const check = document.querySelector('.fa-check'); //CONSTANTE CHECK
const txtInput = document.querySelector('#caixa'); //CONSTANTE PARA REFERIR AO TEXTO DO INPUT
const listBox = document.querySelector('.box');  //CONSTANTE PARA ADICIONAR O TEXTO NA BOX
const listaVazia = document.querySelector('#nulltxt') //CONSTANTE PARA REMOVER O NULL QUANDO VAZIA


//AO CLICAR TEM ANIMACAO
//SALVA O VALOR
//RESETA O TEMPO DE SELECAO
//CONSOLE MOSTRA DADOS SALVOS
check.addEventListener('click', function () {
    check.classList.add('clicado'); //MUDANCA DE COR DO CHECK
    listaVazia.classList.add('sumido') //APAGA O LISTA VAZIA QUANDO ADICIONADO UM ITEM NA LISTA
    let textosalvo = txtInput.value; //SALVA O TEXTO DIGITADO NA VARIAVEL LET 'TEXTOSALVO'

    setTimeout(() => {
        check.classList.remove('clicado')
    }, 1100); //TEMPO DE RESET DE ELEMENTO PARA PODER FAZER SEMPRE A ANIMAÇAO
    console.log('check ok')
    console.log(txtInput.value)
    
    const novoItem = document.createElement('div'); //CONSTANTE PARA CRIAR UM NOVO ITEM QUANDO DIGITADO
    novoItem.classList.add('item-lista'); //MANIPULA O novoItem TRANSFORMANDO ELE NA CLASSE 'ITEM-LISTA'
    listBox.appendChild(novoItem); //
    novoItem.innerHTML = `
        <input type="checkbox" id="checkbox">
        <span>${textosalvo}</span>`;
})

