
const check = document.querySelector('.fa-check'); //CONSTANTE CHECK
const txtInput = document.querySelector('#caixa'); //CONSTANTE PARA REFERIR AO TEXTO DO INPUT
const listBox = document.querySelector('.box');  //CONSTANTE PARA ADICIONAR O TEXTO NA BOX
const listaVazia = document.querySelector('#nulltxt') //CONSTANTE PARA REMOVER O NULL QUANDO VAZIA

function adicionarLista() {
     let textosalvo = txtInput.value.trim(); //SALVA O TEXTO DIGITADO NA VARIAVEL LET 'TEXTOSALVO' //TRIM DESCONSIDERA ESPAÇOS NO COMEÇO E NO FIM
    if (textosalvo === "") {
        fundo.classList.remove('fechado')
        txtInput.blur() //tira o foco do input com o blur; desseleciona o input;
        return;
    } else {

        //funcionalidade completa de adicionar item e o posicionamento das marcadas e desmarcadas
        const novoItem = document.createElement('div'); //CONSTANTE PARA CRIAR UM NOVO ITEM QUANDO DIGITADO
        listaVazia.classList.add('sumido') //APAGA O LISTA VAZIA QUANDO ADICIONADO UM ITEM NA LISTA
        novoItem.classList.add('item-lista'); //MANIPULA O novoItem TRANSFORMANDO ELE NA CLASSE '.item-lista'
        listBox.prepend(novoItem); //INSERE A DIV NA PAGINA
        novoItem.innerHTML = `
        <input type="checkbox" id="checkbox">
        <span>${textosalvo}</span>`; //ADICIONA A CHECKBOX E O ITEM ESCRITO NA LISTA
        caixa.value = ""; //LIMPA A CAIXA DEPOIS DE ADICIONAR NA LISTA
        //POSICONAMENTO DAS MARCADAS E DESMARCADAS
        const checkbox = novoItem.querySelector('input')
        
        checkbox.addEventListener('change', function () {
            if (checkbox.checked) {
                listBox.appendChild(novoItem)
            }
            else {
                const itemMarcado = listBox.querySelector('.item-lista input:checked')
            if (itemMarcado) {
                const divItemMarcado = itemMarcado.closest('.item-lista')
                listBox.insertBefore(novoItem, divItemMarcado)
            }
            else {
                listBox.append(novoItem)
            }

        }
    })
}
};




//funcionamento de adiconar com tecla a "Enter"
txtInput.addEventListener('keydown', function (evento) {
    if (evento.key === "Enter") {
        adicionarLista();

        //animacao da check - copiado
        check.classList.add('clicado'); //MUDANCA DE COR DO CHECK
    setTimeout(() => {
        check.classList.remove('clicado')
    }, 1100); //TEMPO DE RESET DE ELEMENTO PARA PODER FAZER SEMPRE A ANIMAÇAO
    }
})


//funcionamento para adicionar via clique na "check"
check.addEventListener('click', function () {
    adicionarLista(); //chamar funcao para adicionar na lista

    //animacao da check
    check.classList.add('clicado'); //MUDANCA DE COR DO CHECK
    setTimeout(() => {
        check.classList.remove('clicado')
    }, 1100); //TEMPO DE RESET DE ELEMENTO PARA PODER FAZER SEMPRE A ANIMAÇAO
});




//ANIMACAO BOTOES ABAIXO DO INPUT

const botaoEditar = document.querySelector('.editBtn')
const botaoOrdenar = document.querySelector('.orderByBtn')

botaoEditar.addEventListener('click', function () {
    botaoEditar.classList.add('botaoEditarClicado')
    setTimeout(() => {
        botaoEditar.classList.remove('botaoEditarClicado')
    }, 300);
});

botaoOrdenar.addEventListener('click', function () {
    botaoOrdenar.classList.add('botaoOrdenarClicado')
    setTimeout(() => {
        botaoOrdenar.classList.remove('botaoOrdenarClicado')
    }, 300);
});




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